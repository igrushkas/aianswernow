// Cloudflare Worker — HubSpot API proxy for aianswernow.com
// Keeps the HubSpot token server-side and handles CORS

export default {
  async fetch(request, env) {
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || 'https://aianswernow.com',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Verify origin
    const origin = request.headers.get('Origin') || '';
    if (!origin.includes('aianswernow.com') && !origin.includes('aianswernow-3c345.web.app')) {
      return new Response(JSON.stringify({ error: 'Forbidden' }), {
        status: 403,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    try {
      const body = await request.json();
      const { action, data } = body;

      if (action === 'create-contact-and-deal') {
        // Step 1: Create contact
        const contactRes = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${env.HUBSPOT_TOKEN}`
          },
          body: JSON.stringify({
            properties: {
              email: data.email || '',
              firstname: data.contact_name || '',
              phone: data.phone || '',
              company: data.business_name || '',
              industry: data.industry || '',
              hs_lead_status: 'NEW'
            }
          })
        });

        let contact;
        if (contactRes.status === 409) {
          // Contact already exists — search for it
          const searchRes = await fetch('https://api.hubapi.com/crm/v3/objects/contacts/search', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${env.HUBSPOT_TOKEN}`
            },
            body: JSON.stringify({
              filterGroups: [{
                filters: [{
                  propertyName: 'email',
                  operator: 'EQ',
                  value: data.email
                }]
              }]
            })
          });
          const searchData = await searchRes.json();
          contact = searchData.results && searchData.results[0];
        } else {
          contact = await contactRes.json();
        }

        if (!contact || !contact.id) {
          return new Response(JSON.stringify({ error: 'Failed to create/find contact', details: contact }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }

        // Step 2: Create deal associated with contact
        const dealRes = await fetch('https://api.hubapi.com/crm/v3/objects/deals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${env.HUBSPOT_TOKEN}`
          },
          body: JSON.stringify({
            properties: {
              dealname: (data.business_name || 'Unknown') + ' - Free Demo',
              dealstage: 'appointmentscheduled',
              pipeline: 'default',
              description: 'Voice: ' + (data.voice_preference || 'N/A') +
                ' | Owner: ' + (data.is_owner || 'N/A') +
                ' | Industry: ' + (data.industry || 'N/A')
            },
            associations: [{
              to: { id: contact.id },
              types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 3 }]
            }]
          })
        });

        const deal = await dealRes.json();

        return new Response(JSON.stringify({
          success: true,
          contactId: contact.id,
          dealId: deal.id
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      return new Response(JSON.stringify({ error: 'Unknown action' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });

    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  }
};

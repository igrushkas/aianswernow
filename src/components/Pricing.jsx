const plans = [
  {
    name: 'Cruise',
    tagline: 'Hands-off answering, order capture, auto-confirmations.',
    price: 299,
    setup: 99,
    popular: false,
    features: [
      'No contract',
      'Up to 400 mins/month',
      '24/7 phone answering',
      'Order & booking capture',
      'Pushes to your systems',
      'Primary language included',
      'AI chat & email support',
      '99% uptime',
      'Overage: $0.40/min (or: per-call pricing available)',
      '1 content update / month',
    ],
    addons: ['Customer email order confirmations: $99/month'],
  },
  {
    name: 'Navigate',
    tagline: 'Smart workflows, multilingual support, loyalty prompts.',
    price: 599,
    setup: 299,
    popular: true,
    features: [
      'Up to 750 mins/month',
      'Appointments / Bookings',
      'Soft Smart Upselling on Orders',
      '7 Multi-language support',
      'Customer email orders confirmation',
      'Simple Performance Analytics Report',
      'Priority Support',
      '+All in Cruise Package',
    ],
    addons: [],
  },
  {
    name: 'Autopilot X',
    tagline: 'Custom AI agents, voice clone option, dedicated success team.',
    price: 799,
    setup: 499,
    popular: false,
    features: [
      'Up to 1,300 mins/month',
      'Advanced Integrations (POS/CRM)',
      '15 Multi-language support',
      'Custom AI Training (menu, tone, upsells)',
      'Detailed Analytics Report',
      'Advanced Customer Support',
      '+All In Navigate Package',
    ],
    addons: [],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-lg text-white/70">
            Simple, transparent pricing. No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white/5 border rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? 'border-purple-500 shadow-lg shadow-purple-500/20'
                  : 'border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-6 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-white/60 mb-6">{plan.tagline}</p>

              <div className="mb-6">
                <span className="text-4xl font-extrabold">${plan.price}</span>
                <span className="text-white/60">/month</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">{f}</span>
                  </li>
                ))}
              </ul>

              {plan.addons.length > 0 && (
                <div className="mb-6">
                  <p className="text-sm font-semibold text-white/70 mb-2">Add-ons (Optional):</p>
                  {plan.addons.map((a, j) => (
                    <p key={j} className="text-sm text-white/60">• {a}</p>
                  ))}
                </div>
              )}

              <div className="text-sm text-white/60 mb-4">
                +${plan.setup} One-time Setup
              </div>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl font-bold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                Get Your FREE Demo Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

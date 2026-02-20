/**
 * Firebase Shim — Handles Supabase requests redirected by the sync fetch intercept.
 * Loads Firebase SDK, writes to Firestore, and processes any queued requests.
 */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js'
import { getFirestore, collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/11.3.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyAJ8hLasKT3rGTcvMF0999nWZ_wRsbzWt4",
  authDomain: "aianswernow-3c345.firebaseapp.com",
  projectId: "aianswernow-3c345",
  storageBucket: "aianswernow-3c345.firebasestorage.app",
  messagingSenderId: "441518559053",
  appId: "1:441518559053:web:1e2bc62517d77b9d53b104"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

/**
 * Handle an intercepted Supabase REST API request by writing to Firestore.
 * Returns a Response object that mimics Supabase's response format.
 */
async function handleSupabaseRequest(url, options) {
  const urlStr = typeof url === 'string' ? url : url?.url || ''

  // Extract table name from URL: .../rest/v1/{tableName}?...
  const match = urlStr.match(/\/rest\/v1\/([^?]+)/)
  const tableName = match ? match[1] : 'demo_requests'

  const method = options?.method?.toUpperCase() || 'GET'

  // Only handle POST (insert) and HEAD/GET (heartbeat) requests
  if (method === 'POST') {
    try {
      const body = JSON.parse(options?.body || '[]')
      const row = Array.isArray(body) ? body[0] : body

      const docRef = await addDoc(collection(db, tableName), {
        ...row,
        created_at: serverTimestamp()
      })

      console.log('[Firebase] Saved to Firestore:', tableName, '→', docRef.id)

      return new Response(JSON.stringify([{ id: docRef.id, ...row }]), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      })
    } catch (err) {
      console.error('[Firebase] Firestore write failed:', err)
      return new Response(JSON.stringify({ message: err.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      })
    }
  }

  // For GET/HEAD requests (heartbeat, select), return empty success
  return new Response(JSON.stringify([]), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}

// Register as the handler for future intercepted requests
window.__fbHandler = handleSupabaseRequest

// Process any requests that were queued before Firebase loaded
if (window.__fbQueue && window.__fbQueue.length > 0) {
  console.log('[Firebase] Processing', window.__fbQueue.length, 'queued request(s)')
  const queue = [...window.__fbQueue]
  window.__fbQueue = []
  for (const item of queue) {
    handleSupabaseRequest(item.url, item.options)
      .then(item.resolve)
      .catch(item.reject)
  }
}

console.log('[Firebase] Shim ready — all Supabase calls now go to Firestore')

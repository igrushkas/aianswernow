/**
 * Firebase Shim - Intercepts Supabase fetch calls and redirects to Firebase Firestore
 * The original site uses Supabase (free tier that pauses after inactivity).
 * This shim intercepts all Supabase REST API calls and writes to Firebase instead.
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

// Intercept all fetch calls to Supabase and redirect to Firebase
const originalFetch = window.fetch
window.fetch = async function(url, options) {
  const urlStr = typeof url === 'string' ? url : url?.url || ''

  // Intercept Supabase REST API insert calls (demo_requests table)
  if (urlStr.includes('supabase.co/rest/v1/demo_requests')) {
    console.log('[Firebase] Intercepting Supabase REST call → writing to Firebase')
    try {
      const body = JSON.parse(options?.body || '[]')
      const row = Array.isArray(body) ? body[0] : body

      const docRef = await addDoc(collection(db, 'demo_requests'), {
        ...row,
        created_at: serverTimestamp()
      })

      console.log('[Firebase] Saved to Firestore, doc ID:', docRef.id)
      return new Response(JSON.stringify([{ id: docRef.id, ...row }]), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      })
    } catch (err) {
      console.error('[Firebase] Write failed:', err)
      return new Response(JSON.stringify({ message: err.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      })
    }
  }

  // Intercept Supabase Edge Function calls (email notifications)
  if (urlStr.includes('supabase.co/functions/v1/')) {
    console.log('[Firebase] Intercepting Supabase Edge Function (no-op)')
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  // Pass through all other requests unchanged
  return originalFetch.apply(this, arguments)
}

console.log('[Firebase] Shim loaded — Supabase calls will be redirected to Firestore')

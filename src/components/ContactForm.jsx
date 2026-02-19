import { useState } from 'react'
import { submitDemoRequest } from '../lib/firebase'

const industries = [
  'Restaurants / Cafe / Pizzerias',
  'Auto Dealers & Used Car Lots',
  'Auto Repair / Tire Shops',
  'Dental & Medical Clinics',
  'Education & Tutoring Centers',
  'Event Venues / Caterers / Wedding Vendors',
  'Gyms / Yoga & Fitness Studios',
  'Home Services (plumbers, electricians, HVAC)',
  'Hotels / B&B / Short-term rentals',
  'Landscaping / Cleaning Services',
  'Laundromats & Dry Cleaners',
  'Pet Services (groomers, boarding, vets)',
  'Photographers / Videographers',
  'Real Estate / Property Managers',
  'Retail (small brick-and-mortar)',
  'Salons & Barbers',
  'Senior Care & Home Health Agencies',
  'Spas / Massage / Wellness',
  'Other...',
]

const captchaItems = [
  { emoji: '🌳', label: 'Tree', correct: true },
  { emoji: '🚗', label: 'Car', correct: false },
  { emoji: '🏠', label: 'House', correct: false },
  { emoji: '🌸', label: 'Flower', correct: false },
]

export default function ContactForm() {
  const [form, setForm] = useState({
    business_name: '',
    contact_name: '',
    email: '',
    phone: '',
    is_owner: '',
    voice_preference: 'Female',
    industry: 'Restaurants / Cafe / Pizzerias',
    price_list_link: '',
    price_list_text: '',
  })
  const [captchaPassed, setCaptchaPassed] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleCaptcha = (item) => {
    if (item.correct) setCaptchaPassed(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!captchaPassed) {
      setError('Please complete the verification.')
      return
    }
    if (!form.business_name || !form.email) {
      setError('Please fill in required fields.')
      return
    }

    setSubmitting(true)
    setError('')

    try {
      await submitDemoRequest(form)
      setSubmitted(true)
    } catch (err) {
      console.error('Submit error:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="contact" className="py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-green-500/20 border border-green-500 rounded-2xl p-12">
            <svg className="w-16 h-16 text-green-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h2 className="text-3xl font-bold mb-4">Demo Request Sent!</h2>
            <p className="text-white/70 text-lg">
              We'll have your custom demo ready within 24 hours. Check your email!
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Get Your Custom{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              FREE Working Demo
            </span>{' '}
            in 24 Hours!
          </h2>
          <p className="text-white/70">It takes 2 mins to fill it out!</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
          {/* Owner check */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              I am an owner or decision-maker (required)
            </label>
            <div className="flex gap-4">
              {['Yes', 'No'].map(opt => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="is_owner"
                    value={opt}
                    checked={form.is_owner === opt}
                    onChange={handleChange}
                    className="accent-purple-500"
                  />
                  <span className="text-sm">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Voice preference */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Create a voice demo with
            </label>
            <div className="flex gap-4">
              {['Female', 'Male'].map(opt => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="voice_preference"
                    value={opt}
                    checked={form.voice_preference === opt}
                    onChange={handleChange}
                    className="accent-purple-500"
                  />
                  <span className="text-sm">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Industry */}
          <div>
            <label className="block text-sm font-semibold mb-2">Industry</label>
            <select
              name="industry"
              value={form.industry}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
            >
              {industries.map(ind => (
                <option key={ind} value={ind} className="bg-slate-900">{ind}</option>
              ))}
            </select>
          </div>

          {/* Business name */}
          <input
            type="text"
            name="business_name"
            placeholder="Your Business Name (required)"
            value={form.business_name}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Contact name */}
          <input
            type="text"
            name="contact_name"
            placeholder="Your Name"
            value={form.contact_name}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email (required)"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Price list link */}
          <input
            type="url"
            name="price_list_link"
            placeholder="Website Link To Price List and Services"
            value={form.price_list_link}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Price list text */}
          <textarea
            name="price_list_text"
            placeholder="Or paste your full list of services and prices here..."
            rows="6"
            value={form.price_list_text}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-vertical"
          />

          {/* Captcha */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Are you human? Please select the Tree.
            </label>
            <div className="flex gap-3">
              {captchaItems.map((item, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleCaptcha(item)}
                  className={`w-16 h-16 rounded-lg border-2 text-2xl flex items-center justify-center transition-all ${
                    captchaPassed && item.correct
                      ? 'border-green-500 bg-green-500/20'
                      : 'border-white/20 bg-white/5 hover:border-purple-500'
                  }`}
                >
                  {item.emoji}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Submitting...
              </span>
            ) : (
              'Create My Free Demo'
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

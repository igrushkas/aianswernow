const benefits = [
  { icon: '💰', text: 'Increases revenue', sub: 'Converts missed calls to sales' },
  { icon: '📞', text: 'Unlimited calls', sub: 'At the same time' },
  { icon: '🗣️', text: 'Human-sounding voice', sub: 'Sounds like your staff' },
  { icon: '📅', text: '24/7 bookings & orders', sub: 'Always available' },
  { icon: '🔗', text: 'POS & CRM integrations', sub: 'Pushes to your systems' },
  { icon: '🌍', text: 'Multilingual support', sub: 'Any language' },
  { icon: '⚡', text: 'Fast ROI', sub: 'Pays for itself in 3-7 days' },
  { icon: '🛡️', text: 'Money-back guarantee', sub: 'Risk-free trial' },
]

export default function Hero() {
  return (
    <section className="relative py-20 lg:pt-28 lg:pb-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              Never Miss Another{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Customer Call
              </span>
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-8">
              Human-sounding AI answers every call — 24/7, books appointments, takes orders,
              generates quotes, opens support tickets, sends everything to your POS/CRM,
              and handles unlimited simultaneous callers in the customer's language so you
              never miss revenue.
            </p>

            <div className="flex flex-col sm:flex-col gap-4 mb-8">
              <a
                href="#vapi-demo"
                className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-cyan-500/40"
              >
                Hear A Demo
              </a>
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                  <span className="text-xl">{b.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-white">{b.text}</div>
                    <div className="text-xs text-white/60">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-purple-500/20 animate-pulse-glow"
              >
                Get Your FREE Demo Now
              </a>
            </div>
          </div>

          {/* Right column - YouTube video */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/_LTZRSPOFGo?controls=1&rel=0&loop=1&playlist=_LTZRSPOFGo"
                title="AiAnswerNow Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

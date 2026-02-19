const testimonials = [
  {
    quote: "Our front desk was overwhelmed. Now, the AI handles all appointment bookings and reminders flawlessly. No-shows are down 40%, and my staff can focus on patient care. It's been a complete game-changer for our practice.",
    name: 'Dr. Anya Sharma',
    company: 'Bright Smiles Dental Clinic',
  },
  {
    quote: "I was afraid we'd have to let staff go, but with all the new orders, we actually had to hire another person just to keep up. Business has never been better!",
    name: 'David Lee',
    company: 'The Corner Bistro',
  },
  {
    quote: 'The AI receptionist filters calls and qualifies new leads with precision, asking all the right initial questions. My paralegals now spend their time on high-value casework instead of answering the phone. Our client intake is smoother than ever.',
    name: 'Marcus Thorne',
    company: 'Thorne & Associates Law Firm',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16">
          What Our Clients{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Say
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 relative"
            >
              <svg className="w-8 h-8 text-purple-400 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
              </svg>
              <p className="text-white/80 italic mb-6 leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm text-purple-400">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

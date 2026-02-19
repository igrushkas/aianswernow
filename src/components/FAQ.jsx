import { useState } from 'react'

const faqs = [
  {
    q: 'How does the AI handle complex or custom service requests?',
    a: 'Our AI is trained on your specific business data — your menu, services, pricing, and policies. For truly unusual requests it can\'t handle, it seamlessly transfers the call to your staff or takes a message.',
  },
  {
    q: 'Can the AI integrate with my existing scheduling or POS system?',
    a: 'Yes! We integrate with most major POS systems, scheduling tools, and CRMs. During setup, we connect directly to your existing systems so orders and bookings flow seamlessly.',
  },
  {
    q: "What happens if a customer has a question the AI can't answer?",
    a: 'The AI will gracefully transfer the call to your business line or take a detailed message. You\'ll never lose a customer due to an unanswered question.',
  },
  {
    q: "Is the AI's voice robotic? Will it turn off customers?",
    a: 'Not at all! Our AI uses the latest human-voice technology that sounds natural and warm. Listen to our demos above — most callers can\'t tell the difference from a real person.',
  },
  {
    q: 'How long does it take to set up for my business?',
    a: 'Most businesses are up and running within 24-48 hours. We handle all the setup, training, and integration — you just provide your business details and we do the rest.',
  },
  {
    q: 'What is the cost, and is there a long-term contract?',
    a: 'Plans start at $299/month with no long-term contracts. Cancel anytime. We also offer a money-back guarantee so you can try risk-free.',
  },
  {
    q: 'Will this work for my auto repair shop?',
    a: 'Absolutely! Our AI handles appointment scheduling, service inquiries, price quotes, and status updates. It\'s perfect for any service-based business.',
  },
  {
    q: 'I run a dental clinic. Can it handle patient intake?',
    a: 'Yes! The AI can handle appointment bookings, insurance verification questions, pre-visit instructions, and reminders. It\'s HIPAA-aware and handles patient communications professionally.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-semibold text-white pr-4">{q}</span>
        <svg
          className={`w-5 h-5 text-purple-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-6 text-white/70 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Frequently Asked{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <p className="text-center text-white/60 mb-8">
          Quick answers to the most common questions.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function AskAI() {
  return (
    <section id="ask-question" className="py-20 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Have a Question?{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Get an Immediate Answer.
          </span>
        </h2>
        <p className="text-white/70 text-lg mb-8 leading-relaxed">
          Our AI assistant is standing by right now — ask anything you want and it will
          walk you through exactly how it works, how much it costs, and how quickly you
          can be up and running. In less than a minute, you'll know whether this is the
          game-changer your business has been waiting for.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-cyan-500/40"
        >
          Ask Our AI Assistant
        </a>
      </div>
    </section>
  )
}

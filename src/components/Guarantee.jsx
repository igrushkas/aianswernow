export default function Guarantee() {
  return (
    <section id="guarantee" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Our{' '}
          <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Triple Guarantee
          </span>
        </h2>
        <p className="text-lg text-white/80 leading-8 max-w-3xl mx-auto">
          You'll never miss a call; every caller is answered instantly. We integrate
          seamlessly with your POS — or your money back. Our AI will answer 99% of
          your calls and will forward calls to your business as a backup.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/5 border border-green-500/30 rounded-xl p-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Every Call Answered</h3>
            <p className="text-sm text-white/60">Instant pickup, zero missed calls</p>
          </div>

          <div className="bg-white/5 border border-green-500/30 rounded-xl p-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">POS Integration</h3>
            <p className="text-sm text-white/60">Seamless or money back</p>
          </div>

          <div className="bg-white/5 border border-green-500/30 rounded-xl p-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">99% AI Coverage</h3>
            <p className="text-sm text-white/60">Human backup for the rest</p>
          </div>
        </div>
      </div>
    </section>
  )
}

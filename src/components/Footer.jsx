export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-white font-bold">AI Answer Now</span>
            </div>
            <p className="text-sm text-white/60">
              Revolutionizing business communication with Human Voice AI-powered
              receptionist services in ANY language simultaneously.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#services" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Demo */}
          <div>
            <h3 className="font-bold mb-4">Demo</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#vapi-demo" className="hover:text-white transition-colors">Hear the Magic</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Get a Free Demo</a></li>
              <li><a href="#ask-question" className="hover:text-white transition-colors">Ask our AI</a></li>
              <li><a href="#guarantee" className="hover:text-white transition-colors">100% Guarantee</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} AI Answer Now. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

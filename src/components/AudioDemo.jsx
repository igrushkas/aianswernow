import { useRef, useState } from 'react'

const demos = [
  { lang: 'English', file: '/audio/English.mp3' },
  { lang: 'Chinese', file: '/audio/Chinese.mp3' },
  { lang: 'Russian', file: '/audio/Russian.mp3' },
  { lang: 'Spanish', file: '/audio/Spanish.mp3' },
  { lang: 'Italian', file: '/audio/Italian.mp3' },
  { lang: 'Hindi', file: '/audio/Hindi.mp3' },
]

function AudioPlayer({ lang, file }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const toggle = () => {
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }

  const handleTimeUpdate = () => {
    const { currentTime, duration } = audioRef.current
    setProgress(duration ? (currentTime / duration) * 100 : 0)
  }

  const handleEnded = () => {
    setPlaying(false)
    setProgress(0)
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-all">
      <button
        onClick={toggle}
        className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shrink-0 hover:scale-110 transition-transform"
      >
        {playing ? (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
      <div className="flex-1">
        <div className="text-sm font-semibold text-white mb-2">{lang}</div>
        <div className="w-full bg-white/10 rounded-full h-1.5">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <audio
        ref={audioRef}
        src={file}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        preload="none"
      />
    </div>
  )
}

export default function AudioDemo() {
  return (
    <section id="vapi-demo" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Hear the Magic.{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              See for yourself.
            </span>
          </h2>
          <p className="text-white/70 text-lg">
            Click to hear the audio and watch the video to see it in ACTION.
            Experience the future of restaurant communication firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {demos.map(d => (
            <AudioPlayer key={d.lang} lang={d.lang} file={d.file} />
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all"
          >
            Get Your FREE Demo Now
          </a>
        </div>
      </div>
    </section>
  )
}

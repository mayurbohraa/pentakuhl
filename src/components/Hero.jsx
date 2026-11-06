import { useEffect, useRef, useState } from 'react'
import { HiPause, HiPlay, HiVolumeOff, HiVolumeUp } from 'react-icons/hi'
import ScrollDownButton from './ui/ScrollDownButton'

export default function Hero() {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => {
      if (motion.matches) video.pause()
      else
        video.play().catch(() => {
          /* Playback can require a user gesture. */
        })
    }
    updateMotion()
    motion.addEventListener('change', updateMotion)
    return () => {
      motion.removeEventListener('change', updateMotion)
      video.pause()
    }
  }, [])

  const togglePlayback = () => {
    const video = videoRef.current
    if (video.paused) video.play().catch(() => setFailed(true))
    else video.pause()
  }

  return (
    <section
      id="home"
      aria-labelledby="page-title"
      className="relative h-svh min-h-[420px] w-full overflow-hidden bg-penta-teal pt-[var(--header-height)]"
    >
      <h1 id="page-title" className="sr-only">
        Penta Freight — Global logistics solutions
      </h1>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted={muted}
        playsInline
        preload="none"
        poster="/images/about/about-plane.png"
        onPlay={() => {
          setPlaying(true)
          setFailed(false)
        }}
        onPause={() => setPlaying(false)}
        onError={() => setFailed(true)}
        aria-hidden="true"
      >
        <source src="/video/hero.mp4" type="video/mp4" onError={() => setFailed(true)} />
      </video>
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
      <ScrollDownButton
        onClick={() => document.getElementById('about')?.scrollIntoView()}
        className="bottom-0"
      />
      <div className="absolute right-4 bottom-16 z-10 flex gap-2 sm:right-6 sm:bottom-6">
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={playing ? 'Pause video' : 'Play video'}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-penta-action text-white shadow-lg hover:bg-[#ad3810]"
        >
          {playing ? <HiPause aria-hidden="true" /> : <HiPlay aria-hidden="true" />}
        </button>
        <button
          type="button"
          onClick={() => setMuted((value) => !value)}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-penta-action text-white shadow-lg hover:bg-[#ad3810]"
        >
          {muted ? <HiVolumeOff aria-hidden="true" /> : <HiVolumeUp aria-hidden="true" />}
        </button>
      </div>
      {failed && (
        <p
          role="status"
          className="absolute bottom-32 left-5 rounded-lg bg-black/70 p-3 text-sm text-white"
        >
          Video unavailable. Explore our logistics services below.
        </p>
      )}
    </section>
  )
}

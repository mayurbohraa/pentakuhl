import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 7, suffix: '+', label: 'Strategic Domestic Offices', countUp: true },
  { value: 'USA', label: 'Global presence', countUp: false },
  { value: 200, suffix: '+', label: 'Logistics Experts', countUp: true },
  { value: 50, suffix: '+', label: 'Awards & Accolades', countUp: true },
]

function useCountUp(target, active, duration = 1500) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active || typeof target !== 'number') return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const startTime = performance.now()
    let frame
    const animationDuration = reducedMotion ? 0 : duration
    const tick = (now) => {
      const progress =
        animationDuration === 0 ? 1 : Math.min((now - startTime) / animationDuration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target, duration])

  return count
}

function StatItem({ stat, active }) {
  const count = useCountUp(stat.value, active && stat.countUp)

  const display = typeof stat.value === 'string' ? stat.value : `${count}${stat.suffix || ''}`

  return (
    <div className="text-center lg:text-left">
      <p className="m-0 text-4xl font-bold text-white lg:text-5xl">{display}</p>
      <p className="mt-2 text-sm text-white/70">{stat.label}</p>
    </div>
  )
}

export default function Achievements() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-penta-teal px-5 py-16 lg:px-12 lg:py-20"
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0 200 Q360 100 720 200 T1440 200" fill="none" stroke="white" strokeWidth="2" />
        <path d="M0 260 Q360 160 720 260 T1440 260" fill="none" stroke="white" strokeWidth="1.5" />
        <path d="M0 320 Q360 220 720 320 T1440 320" fill="none" stroke="white" strokeWidth="1" />
      </svg>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="m-0 text-3xl font-bold text-penta-orange lg:text-4xl">Our Achievements</h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            Over 31+ years of excellence, trusted globally, delivering reliable logistics solutions
            with precision.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  )
}

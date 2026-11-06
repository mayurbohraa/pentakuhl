import { useState } from 'react'

const certifications = [
  { name: 'IATA', image: '/images/certifications/iata.png' },
  { name: 'ISO 9001:2015', image: '/images/certifications/iso.png' },
  { name: 'MTO', image: '/images/certifications/mto.png' },
  { name: 'PharmaAero', image: '/images/certifications/pharma-aero.png' },
  { name: 'Indo-Italian Chamber', image: '/images/certifications/indo-italian.png' },
]

function MarqueeTrack({ duplicate = false }) {
  return certifications.map((cert) => (
    <div
      key={cert.name}
      aria-hidden={duplicate || undefined}
      className={`mx-3 flex h-36 w-36 shrink-0 items-center justify-center rounded-xl bg-white p-4 sm:h-44 sm:w-44 md:h-50 md:w-50 ${duplicate ? 'certification-copy' : ''}`}
    >
      <img
        src={cert.image}
        alt={duplicate ? '' : cert.name}
        width="150"
        height="150"
        loading="lazy"
        decoding="async"
        className="max-h-full max-w-full object-contain"
      />
    </div>
  ))
}

export default function Certifications() {
  const [paused, setPaused] = useState(false)
  return (
    <section
      aria-labelledby="certifications-heading"
      className="overflow-hidden bg-penta-teal px-5 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2
          id="certifications-heading"
          className="m-0 text-3xl font-bold text-penta-orange lg:text-4xl"
        >
          Certifications
        </h2>
        <p className="mt-4 text-base text-white/80">
          Certified excellence, ensuring compliance, quality, and global logistics reliability.
        </p>
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
          className="mt-3 min-h-11 rounded-lg border border-white/60 px-4 py-2 text-sm text-white motion-reduce:hidden"
        >
          {paused ? 'Resume animation' : 'Pause animation'}
        </button>
      </div>
      <div className="relative mt-10 w-full overflow-hidden">
        <div
          className="certification-track flex w-max animate-marquee"
          style={{ animationPlayState: paused ? 'paused' : undefined }}
        >
          <MarqueeTrack />
          <MarqueeTrack duplicate />
        </div>
      </div>
    </section>
  )
}

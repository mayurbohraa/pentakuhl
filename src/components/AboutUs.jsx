export default function AboutUs() {
  return (
    <section id="about" className="bg-white">
      {/* Top text */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-3 md:gap-12 md:px-10 md:py-20 lg:px-16 lg:py-24">
        <div className="md:col-span-1">
          <p className="m-0 text-xs font-bold tracking-[0.2em] text-penta-orange uppercase md:text-sm">
            ABOUT US
          </p>
          <div className="mt-3 mb-5 h-[2px] w-12 bg-penta-orange" />
          <p className="m-0 text-xs font-bold tracking-[0.08em] text-penta-orange uppercase md:text-2xl lg:text-[28px]">
            PENTA FREIGHT
          </p>
        </div>

        <p className="m-0 text-base leading-[1.75] text-neutral-600 md:col-span-2 md:text-lg lg:max-w-3xl">
          Penta Freight provides reliable{' '}
          <strong className="font-bold text-neutral-800">logistics solutions</strong>, specializing
          in temperature-sensitive shipments. We ensure safe,{' '}
          <strong className="font-bold text-neutral-800">on-time delivery</strong> worldwide. Trust
          us for seamless supply chain management.
        </p>
      </div>

      {/* Airplane image with white fade from text section above */}
      <div className="relative">
        <img
          width="1024"
          height="574"
          loading="lazy"
          decoding="async"
          src="/images/about/about-plane.png"
          alt="Airplane flying through clouds at sunset"
          className="block h-56 w-full object-cover object-center sm:h-80 md:h-100 lg:h-140"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white via-white/70 to-transparent sm:h-36 md:h-44 lg:h-52"
          aria-hidden
        />
      </div>
    </section>
  )
}

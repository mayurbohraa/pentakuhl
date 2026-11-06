function WaveDecor() {
  return (
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
  )
}

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-penta-teal px-5 py-8 lg:py-10">
      <WaveDecor />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="m-0 text-3xl font-bold text-penta-orange lg:text-4xl">Our Philosophy</h2>
        <p className="mt-6 text-base leading-relaxed text-white/90 lg:text-lg">
          Customer satisfaction drives everything we do. Every shipment is a promise, and we deliver
          it with precision, care, and professionalism. With expert resources, we ensure safe,
          timely transport, building lasting partnerships founded on trust and excellence.
        </p>
        <button
          type="button"
          className="mt-8 cursor-pointer rounded-lg border-0 bg-penta-orange px-8 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#c94515]"
        >
          Read more
        </button>
      </div>
    </section>
  )
}

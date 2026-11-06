export default function GlobalFootprint() {
  return (
    <section className="bg-penta-teal px-5 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="m-0 text-3xl font-bold text-penta-orange lg:text-4xl">
          Our Global Footprint
        </h2>

        <div className="mt-10">
          <img
            width="1920"
            height="1055"
            loading="lazy"
            decoding="async"
            src="/images/global-footprint-map.webp"
            alt="Penta Freight global footprint world map with routes from India"
            className="mx-auto w-full max-w-5xl object-contain"
          />
        </div>
      </div>
    </section>
  )
}

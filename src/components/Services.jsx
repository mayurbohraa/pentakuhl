import { servicesList } from '../data/siteContent'
import SectionLabel from './ui/SectionLabel'
import SplitHeading from './ui/SplitHeading'

const CARD_BG = '#FAF9F6'

function ServiceCard({ service, index }) {
  const imageOnLeft = index % 2 === 0

  return (
    <article
      id={service.id}
      className={`mb-6 flex min-h-0 flex-col overflow-hidden rounded-3xl shadow-sm min-[1025px]:sticky min-[1025px]:mb-10 min-[1025px]:min-h-[480px] min-[1025px]:flex-row min-[1025px]:rounded-[2.5rem] ${
        imageOnLeft ? '' : 'min-[1025px]:flex-row-reverse'
      }`}
      style={{
        backgroundColor: CARD_BG,
        top: `${72 + index * 12}px`,
        zIndex: index + 1,
      }}
    >
      {/* Image */}
      <div className="relative h-48 shrink-0 sm:h-56 min-[1025px]:h-auto min-[1025px]:min-h-[480px] min-[1025px]:w-1/2">
        <img
          src={service.image}
          alt={service.title}
          width={service.width}
          height={service.height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        {/* Fade image into card background on the inner edge */}
        <div
          className={`pointer-events-none absolute inset-y-0 hidden w-2/5 min-[1025px]:block ${
            imageOnLeft ? 'right-0' : 'left-0'
          }`}
          style={{
            backgroundImage: imageOnLeft
              ? `linear-gradient(to right, transparent, ${CARD_BG})`
              : `linear-gradient(to left, transparent, ${CARD_BG})`,
          }}
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center p-6 lg:p-10 lg:py-12">
        <h3 className="m-0 text-2xl font-bold text-neutral-900 lg:text-3xl">{service.title}</h3>
        {service.paragraphs.map((p) => (
          <p
            key={p.slice(0, 24)}
            className="mt-3 text-sm leading-relaxed text-neutral-600 lg:text-base"
          >
            {p}
          </p>
        ))}
        <div className="mt-5 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-300 bg-white px-4 py-1.5 text-xs text-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          type="button"
          className="mt-6 w-fit cursor-pointer rounded-lg border-0 bg-penta-orange px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#c94515]"
        >
          Read More
        </button>
      </div>
    </article>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-white px-5 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto mb-12 grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-end">
        <div>
          <SectionLabel>Services</SectionLabel>
          <div className="mt-5">
            <SplitHeading
              line1="Seamless Solutions for"
              line2="Every Logistics Need"
              className="lg:text-5xl"
            />
          </div>
        </div>
        <p className="m-0 text-sm leading-relaxed text-neutral-500 lg:text-base">
          Tailored logistics solutions for timely, cost-effective deliveries across air, sea, and
          multimodal transport.
        </p>
      </div>

      <div className="mx-auto max-w-7xl">
        {servicesList.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
        <div className="hidden h-24 min-[1025px]:block" aria-hidden />
      </div>
    </section>
  )
}

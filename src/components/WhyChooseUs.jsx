import { whyChooseReasons } from '../data/siteContent'
import SectionLabel from './ui/SectionLabel'
import SplitHeading from './ui/SplitHeading'

export default function WhyChooseUs() {
  return (
    <section className="border-t border-gray-200 bg-white px-5 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-4">
        <div className="mb-10 lg:mb-0 lg:pr-8">
          <SectionLabel>Why us</SectionLabel>
          <div className="mt-5">
            <SplitHeading line1="Why choose" line2="Penta Freight." />
          </div>
        </div>

        {whyChooseReasons.map((item, index) => (
          <div
            key={item.title}
            className={`py-6 lg:px-8 lg:py-0 ${index > 0 ? 'border-t border-gray-200 lg:border-t-0 lg:border-l' : ''}`}
          >
            <img
              width="128"
              height="128"
              loading="lazy"
              decoding="async"
              src={item.icon}
              alt=""
              className="mb-5 h-14 w-14 object-contain"
            />
            <h3 className="m-0 text-lg font-bold text-neutral-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

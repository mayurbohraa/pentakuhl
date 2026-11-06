import { reviewColumns } from '../data/siteContent'
import SectionLabel from './ui/SectionLabel'
import SplitHeading from './ui/SplitHeading'

function CompanyLogo({ review }) {
  if (review.id === 'lufthansa' || review.id === 'lufthansa-2') {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-2">
          <span
            className="text-left text-2xl leading-tight font-semibold text-neutral-800"
            style={{ color: review.color }}
          >
            Lufthansa Cargo
          </span>
        </div>
        {review.tagline && <p className="m-0 text-xs text-neutral-500">{review.tagline}</p>}
      </div>
    )
  }

  if (review.id === 'sun-pharma') {
    return (
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold tracking-wide text-neutral-900 uppercase">
          Sun <span style={{ color: review.color }}>Pharma</span>
        </span>
      </div>
    )
  }

  return (
    <p className="m-0 text-2xl font-bold" style={{ color: review.color }}>
      {review.company}
    </p>
  )
}

function ReviewCard({ review }) {
  return (
    <article className="w-full max-w-sm rounded-[20px] bg-white px-7 py-9 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:px-8 sm:py-10">
      <div className="mb-5 flex justify-center sm:mb-6">
        <CompanyLogo review={review} />
      </div>

      <p className="m-0 text-left text-sm leading-[1.85] text-neutral-600 sm:text-center">
        &ldquo;{review.text}&rdquo;
      </p>

      <p className="mt-7 mb-1 text-base font-bold text-neutral-900 sm:mt-8">{review.author}</p>
      <p className="m-0 text-sm text-neutral-500">{review.role}</p>
    </article>
  )
}

function ReviewMasonry() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5">
      {/* Left column */}
      <div className="flex flex-col gap-5 sm:gap-6">
        {reviewColumns.left.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Right column — offset down for stagger */}
      <div className="flex flex-col gap-5 sm:mt-16 sm:gap-6 lg:mt-20">
        {reviewColumns.right.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="bg-[#fafafa] px-5 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-14 xl:gap-20">
        {/* Left — heading (sticky on large screens) */}
        <div className="min-[1025px]:sticky min-[1025px]:top-[calc(var(--header-height)+2rem)] min-[1025px]:self-start">
          <SectionLabel>Reviews</SectionLabel>
          <div className="mt-5">
            <SplitHeading line1="Hear From Our Satisfied" line2="Clients Worldwide." />
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500">
            Explore what industry leaders and long-term partners say about our commitment to
            excellence and innovation.
          </p>
        </div>

        {/* Right — 4 cards in staggered 2-column masonry */}
        <ReviewMasonry />
      </div>
    </section>
  )
}

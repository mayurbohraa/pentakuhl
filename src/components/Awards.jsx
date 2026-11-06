import SectionLabel from './ui/SectionLabel'
import SplitHeading from './ui/SplitHeading'

const awards = [
  {
    company: 'Emirates SkyCargo',
    color: '#CC0000',
    lines: ['Top Cargo Agents, 2016/17', 'Top Cargo Agents, 2005/06'],
  },
  { company: 'Delta Air Lines', color: '#003A7B', lines: ['Top Revenue Performance, 2002'] },
  { company: 'MASKargo', color: '#CC0000', lines: ['Mega Tonners, 2006/07'] },
  { company: 'CONCOR', color: '#1A3A6B', lines: ['CONCOR Exim Star, 2003/04'] },
  { company: 'Air France', color: '#00205B', lines: ['Best Performance Award'] },
  { company: 'Finnair Cargo', color: '#003580', lines: ['Top Agent Award'] },
  { company: 'IAG Cargo', color: '#1C1C1C', lines: ['Excellence Award'] },
  { company: 'STAT Trade Times', color: '#E8531F', lines: ['Industry Recognition Award'] },
]

export default function Awards() {
  return (
    <section className="bg-white px-5 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Awards</SectionLabel>
        <div className="mt-5">
          <SplitHeading line1="Proudly Recognized with Prestigious" line2="Awards and Accolades." />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {awards.map((award) => (
            <article
              key={award.company}
              className="flex flex-col items-center min-w-0 rounded-2xl border border-gray-200 p-5 text-center transition-shadow hover:shadow-md"
            >
              <p
                className="m-0 mb-5 break-words text-xl font-bold sm:text-2xl xl:text-3xl"
                style={{ color: award.color }}
              >
                {award.company}
              </p>
              {award.lines.map((line) => (
                <p key={line} className="mt-2 mb-0 text-xs text-neutral-500">
                  {line}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

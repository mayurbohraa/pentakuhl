import { FaLinkedinIn } from 'react-icons/fa'
import { indiaOffices } from '../data/siteContent'

function OfficeBlock({ city, address, phone }) {
  return (
    <div>
      <h3 className="m-0 text-lg font-bold text-neutral-900">{city}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{address}</p>
      <p className="mt-2 text-sm text-neutral-400">{phone}</p>
    </div>
  )
}

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-12">
        {/* India offices — 4-column grid, first col = heading */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="m-0 text-2xl font-bold lg:text-[28px]">
              Our <span className="text-penta-orange">India</span> Offices
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              Penta Freight delivers seamless logistics across India, with branches in key cities
              for your convenience.
            </p>
          </div>
          {indiaOffices.map((office) => (
            <OfficeBlock key={office.city} {...office} />
          ))}
        </div>

        {/* USA office */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-4">
          <div>
            <h2 className="m-0 text-2xl font-bold lg:text-[28px]">
              Our <span className="text-penta-orange">USA</span> Office
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              Penta Freight has expanded its operations globally, beginning with the USA, to offer
              continuous support across continents.
            </p>
          </div>
          <OfficeBlock
            city="Chicago"
            address="Penta Freight Pvt.Ltd 5100 Newport Dr. Suite 4, Rolling Meadows, IL 60008 USA"
            phone="+040 234 6559 / +224 434 2154"
          />
        </div>

        <hr className="mt-14 mb-10 border-gray-200" />

        <div className="flex flex-col items-center justify-between gap-6 text-sm text-neutral-600 md:flex-row">
          <p className="m-0">© 2026 Penta Freight. All Rights Reserved</p>

          <a
            href="#"
            data-inactive
            onClick={(event) => event.preventDefault()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 no-underline transition-colors hover:border-[#0077b5] hover:bg-[#0077b5] hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <p className="m-0 flex items-center gap-2">
            <a
              href="#"
              data-inactive
              onClick={(event) => event.preventDefault()}
              className="text-neutral-600 no-underline hover:text-penta-orange"
            >
              Privacy Policy
            </a>
            <span className="text-penta-orange">•</span>
            <a
              href="#"
              data-inactive
              onClick={(event) => event.preventDefault()}
              className="text-neutral-600 no-underline hover:text-penta-orange"
            >
              Terms and Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

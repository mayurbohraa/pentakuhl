import { useEffect, useRef, useState } from 'react'
import { IoChevronDown, IoChevronForward, IoClose } from 'react-icons/io5'
import { HiMenu } from 'react-icons/hi'
import Logo from '../assets/logo.png'
import { indiaOffices, servicesList } from '../data/siteContent'

const servicesLinks = [
  'Air Freight',
  'Sea Freight',
  'Multi Modal Transport',
  'Project Cargo',
  'Custom Broking',
  'Transit Warehouse And Fleet',
]

const pentaLinks = ['Parcel Shippers', 'Pallet Shippers']

const mumbaiOffice = indiaOffices[0]

const navLink =
  'text-sm font-bold uppercase tracking-[0.14em] text-neutral-700 transition-colors hover:text-penta-orange'

function MobileNavRow({ children, className = '' }) {
  return <li className={`border-b border-gray-200 ${className}`}>{children}</li>
}

export default function Navbar() {
  const dialogRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [pentaOpen, setPentaOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    const desktop = window.matchMedia('(min-width: 1025px)')
    const onResize = () => {
      if (desktop.matches) setMobileOpen(false)
    }
    const onPointerDown = (event) => {
      document.querySelectorAll('[data-desktop-dropdown]').forEach((menu) => {
        if (!menu.contains(event.target)) menu.open = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    desktop.addEventListener('change', onResize)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      window.removeEventListener('scroll', onScroll)
      desktop.removeEventListener('change', onResize)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!mobileOpen) {
      dialog.close()
      return
    }
    // Preserve the original menu layout while containing focus and background interaction.
    dialog.showModal()
    dialog.querySelector('[aria-label="Close menu"]').focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
      dialog.close()
    }
  }, [mobileOpen])

  const closeMobile = () => {
    setMobileOpen(false)
    setServicesOpen(false)
    setPentaOpen(false)
  }

  const dropdownEvents = {
    onMouseEnter: (event) => {
      event.currentTarget.open = true
    },
    onMouseLeave: (event) => {
      if (!event.currentTarget.contains(document.activeElement)) event.currentTarget.open = false
    },
    onBlur: (event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false
    },
    onKeyDown: (event) => {
      if (event.key === 'Escape') {
        event.currentTarget.open = false
        event.currentTarget.querySelector('summary').focus()
      }
    },
  }

  const mobileLogo = (
    <a
      href="#home"
      onClick={closeMobile}
      aria-label="Penta Freight home"
      className="relative block h-11 w-[166px] shrink-0"
    >
      <img
        src={Logo}
        alt="Penta Freight"
        width="56"
        height="358"
        className="absolute top-1/2 left-1/2 h-[166px] w-[26px] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90"
      />
    </a>
  )

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-[100] bg-white transition-shadow ${
        scrolled ? 'shadow-md' : 'shadow-[0_1px_0_rgba(0,0,0,0.06)]'
      }`}
    >
      {/* Bar: mobile/tablet ≤1024px */}
      <div className="mx-auto flex h-[var(--header-height)] max-w-[1400px] items-center justify-between px-5 min-[1025px]:hidden">
        {mobileLogo}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border-0 bg-transparent p-0"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-haspopup="dialog"
          onClick={() => setMobileOpen(true)}
        >
          <HiMenu className="h-7 w-7 text-neutral-900" />
        </button>
      </div>

      {/* Bar: desktop ≥1025px */}
      <div className="mx-auto hidden h-[var(--header-height)] max-w-[1400px] items-center justify-center px-8 min-[1025px]:flex">
        <nav className="flex items-center gap-9" aria-label="Main">
          <a href="#home" className={`${navLink} text-penta-orange`}>
            HOME
          </a>
          <a href="#about" className={navLink}>
            ABOUT US
          </a>

          <details data-desktop-dropdown className="group relative" {...dropdownEvents}>
            <summary
              onClick={(event) => {
                event.preventDefault()
                event.currentTarget.parentElement.open = true
              }}
              className={`${navLink} inline-flex min-h-11 cursor-pointer list-none items-center gap-1 [&::-webkit-details-marker]:hidden`}
            >
              SERVICES
              <IoChevronDown className="h-2.5 w-2.5" />
            </summary>
            <div className="pointer-events-none absolute top-full left-1/2 z-[110] min-w-[280px] -translate-x-1/2 pt-7 opacity-0 transition-opacity group-open:pointer-events-auto group-open:opacity-100">
              <ul className="m-0 list-none rounded-xl border border-gray-100 bg-white p-5 shadow-xl">
                {servicesLinks.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${servicesList.find((service) => service.title === item).id}`}
                      className="block py-2 text-[15px] font-normal text-neutral-800 no-underline hover:text-penta-orange"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </details>

          <details data-desktop-dropdown className="group relative" {...dropdownEvents}>
            <summary
              onClick={(event) => {
                event.preventDefault()
                event.currentTarget.parentElement.open = true
              }}
              className="inline-flex min-h-11 cursor-pointer list-none items-center border-0 bg-transparent p-0 text-[19px] font-bold [&::-webkit-details-marker]:hidden"
            >
              <span className="text-neutral-800">Penta</span>
              <span className="text-penta-kuhl">KÜHL</span>
              <IoChevronDown className="ml-1.5 h-3 w-3 text-neutral-800" />
            </summary>
            <div className="pointer-events-none absolute top-full left-1/2 z-[110] min-w-[220px] -translate-x-1/2 pt-7 opacity-0 transition-opacity group-open:pointer-events-auto group-open:opacity-100">
              <ul className="m-0 list-none rounded-xl border border-gray-100 bg-white p-6 shadow-xl">
                {pentaLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      data-inactive
                      onClick={(event) => event.preventDefault()}
                      className="block py-2 text-[15px] font-normal text-neutral-800 no-underline hover:text-penta-orange"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </details>

          <a href="#" data-inactive onClick={(event) => event.preventDefault()} className={navLink}>
            INDUSTRIES
          </a>
          <a href="#" data-inactive onClick={(event) => event.preventDefault()} className={navLink}>
            CAREERS
          </a>
          <a href="#footer" className={navLink}>
            CONTACT
          </a>
        </nav>
      </div>

      {/* Full-screen mobile menu */}
      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        onCancel={closeMobile}
        onClose={() => setMobileOpen(false)}
        onKeyDown={(event) => {
          if (event.key !== 'Tab') return
          const items = [...event.currentTarget.querySelectorAll('a[href], button')].filter(
            (item) => item.checkVisibility(),
          )
          if (event.shiftKey && document.activeElement === items[0]) {
            event.preventDefault()
            items.at(-1).focus()
          } else if (!event.shiftKey && document.activeElement === items.at(-1)) {
            event.preventDefault()
            items[0].focus()
          }
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-white p-0 text-neutral-900 open:flex open:flex-col"
        aria-label="Navigation menu"
      >
        <div className="flex h-[var(--header-height)] shrink-0 items-center justify-between border-b border-gray-100 px-5">
          {mobileLogo}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border-0 bg-transparent p-0"
            aria-label="Close menu"
            onClick={closeMobile}
          >
            <IoClose className="h-8 w-8 text-neutral-900" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5" aria-label="Mobile">
          <ul className="m-0 list-none p-0">
            <MobileNavRow>
              <a
                href="#home"
                className="flex py-4 text-sm font-bold tracking-[0.12em] text-penta-orange no-underline uppercase"
                onClick={closeMobile}
              >
                HOME
              </a>
            </MobileNavRow>

            <MobileNavRow>
              <a
                href="#about"
                className="flex py-4 text-sm font-bold tracking-[0.12em] text-neutral-900 no-underline uppercase"
                onClick={closeMobile}
              >
                ABOUT US
              </a>
            </MobileNavRow>

            <MobileNavRow>
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-between border-0 bg-transparent py-4 text-sm font-bold tracking-[0.12em] text-neutral-900 uppercase"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((open) => !open)}
              >
                SERVICES
                <IoChevronForward
                  className={`h-4 w-4 shrink-0 text-neutral-900 transition-transform ${servicesOpen ? 'rotate-90' : ''}`}
                />
              </button>
              {servicesOpen && (
                <ul className="m-0 list-none border-t border-gray-100 pb-3 pl-0">
                  {servicesLinks.map((item) => (
                    <li key={item}>
                      <a
                        href={`#${servicesList.find((service) => service.title === item).id}`}
                        className="block py-2.5 text-sm text-neutral-600 no-underline hover:text-penta-orange"
                        onClick={closeMobile}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </MobileNavRow>

            <MobileNavRow>
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-between border-0 bg-transparent py-4 text-[17px] font-bold"
                aria-expanded={pentaOpen}
                onClick={() => setPentaOpen((open) => !open)}
              >
                <span>
                  <span className="text-neutral-500">Penta</span>
                  <span className="text-penta-kuhl">KÜHL</span>
                </span>
                <IoChevronForward
                  className={`h-4 w-4 shrink-0 text-neutral-900 transition-transform ${pentaOpen ? 'rotate-90' : ''}`}
                />
              </button>
              {pentaOpen && (
                <ul className="m-0 list-none border-t border-gray-100 pb-3 pl-0">
                  {pentaLinks.map((label) => (
                    <li key={label}>
                      <a
                        href="#"
                        data-inactive
                        className="block py-2.5 text-sm text-neutral-600 no-underline hover:text-penta-orange"
                        onClick={(event) => event.preventDefault()}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </MobileNavRow>

            <MobileNavRow>
              <a
                href="#"
                data-inactive
                className="flex py-4 text-sm font-bold tracking-[0.12em] text-neutral-900 no-underline uppercase"
                onClick={(event) => event.preventDefault()}
              >
                INDUSTRIES
              </a>
            </MobileNavRow>

            <MobileNavRow>
              <a
                href="#"
                data-inactive
                className="flex py-4 text-sm font-bold tracking-[0.12em] text-neutral-900 no-underline uppercase"
                onClick={(event) => event.preventDefault()}
              >
                CAREERS
              </a>
            </MobileNavRow>

            <MobileNavRow className="border-b-0">
              <a
                href="#footer"
                className="flex py-4 text-sm font-bold tracking-[0.12em] text-neutral-900 no-underline uppercase"
                onClick={closeMobile}
              >
                CONTACT
              </a>
            </MobileNavRow>
          </ul>

          <div className="mt-10 pb-10">
            <h3 className="m-0 text-base font-bold text-neutral-900">Contact Info</h3>
            <a
              href={`tel:${mumbaiOffice.phone.replace(/\s/g, '')}`}
              className="mt-3 block text-sm text-neutral-900 underline"
            >
              {mumbaiOffice.phone}
            </a>
            <a
              href="#footer"
              className="mt-2 block text-sm leading-relaxed text-neutral-900 underline"
              onClick={closeMobile}
            >
              {mumbaiOffice.address}
            </a>
          </div>
        </nav>
      </dialog>
    </header>
  )
}

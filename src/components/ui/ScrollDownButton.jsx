export default function ScrollDownButton({ onClick, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Scroll down"
      className={`group absolute left-1/2 z-10 -translate-x-1/2 cursor-pointer border-0 bg-transparent p-0 ${className}`}
    >
      <span className="relative flex items-end justify-center overflow-hidden h-[38px] w-[76px] lg:h-[125px] lg:w-[250px]">
        <span
          className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full border border-white h-[76px] w-[76px] lg:h-[250px] lg:w-[250px]"
          aria-hidden
        />
        <svg
          className="relative z-[1] mb-3 animate-bounce lg:mb-8"
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          aria-hidden
        >
          <path
            d="M1 1.5L7 6.5L13 1.5"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  )
}

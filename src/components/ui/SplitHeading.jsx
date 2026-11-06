/** Two-line heading: bold dark + light gray second line */
export default function SplitHeading({ line1, line2, className = '' }) {
  return (
    <h2 className={`m-0 text-3xl leading-tight font-bold lg:text-4xl ${className}`}>
      <span className="block text-neutral-900">{line1}</span>
      <span className="block font-light text-neutral-500">{line2}</span>
    </h2>
  )
}

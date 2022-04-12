import Link from 'next/link'

export function Button (props) {
  const {
    text,
    icon,
    target,
    className,
    secondary,
    teritary,
    disabled,
  } =  props

  const btnType = function () {
    //if (teritary) {return `bg-white/10 text-white`} else
    if (disabled) return `bg-accent`
    if (secondary) return `bg-white/10 hover:bg-white/30 text-white`
    return `bg-accent hover:bg-zinc-200 text-black`
  }
  const btnClass = `block flex gap-4 lg:gap-1 p-3.5 ${btnType()} ${className}`

  if (disabled) return (
    <div className={btnClass}>
      {text && <span className="text-sm text-sans">{text}</span>}
      {icon && icon}
    </div>
  )

  return (
    <Link href={target}>
      <button className={btnClass}>
        {text && <span className="text-sm text-sans">{text}</span>}
        {icon && icon}
      </button>
    </Link>
  )
}
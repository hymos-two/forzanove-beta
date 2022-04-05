import Image from 'next/image'

export function Button (props) {
  const {
    text,
    icon,
    rotateIcon,
    className,
    secondary,
    teritary,
  } =  props

  const btnType = function () {
    //if (teritary) {return `bg-white/10 text-white`} else
    if (secondary) return `bg-white/10 hover:bg-white/30 text-white`
    return `bg-accent hover:bg-zinc-200 text-black`
  }
  const btnClass = `block flex gap-4 lg:gap-1 p-3.5 ${btnType()} ${className}`
  return (
    <button className={btnClass}>
      {text && 
      <span className="text-sm text-sans">
        {text}
      </span>
      }
      {icon && 
      <div className="w-5 h-5" style={{transform:`rotate(${rotateIcon}deg)`}}>
        <Image src={icon} alt="icon"/>
      </div>
      }
    </button>
  )
}
import Image from 'next/image'

export function Button (props) {
  const {text,icon,rotateIcon,className} =  props

  const btnClass = `block flex gap-4 lg:gap-1 p-3.5 bg-accent hover:bg-zinc-200 ${className}`
  return (
    <button className={btnClass}>
      {text && 
      <span className="text-sm text-sans text-black">
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
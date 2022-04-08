import Image from 'next/image'
import logo from '../public/images/forzanove-logo.png'

export function Logo (props) {
  const {className,imgClass,iconOnly} = props

  if (iconOnly) return (
    <div className={`w-9 h-9 ${imgClass}`}>
      <Image src={logo} alt="logo" placeholder="empty"/>
    </div>
  )

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`w-9 h-9 mr-0.5 ${imgClass}`}>
        <Image src={logo} alt="logo"/>
      </div>
      <span className="font-mono-m text-base text-white">ForzaNove</span>
    </div>
  )
}
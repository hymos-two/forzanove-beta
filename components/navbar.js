import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Logo} from './molecule'
import {useWindowSize} from '../hooks/useWindowSize'

import menu from '../public/icons/menu.svg'
import close from '../public/icons/close.svg'

export default function Navbar (props) {
  const {active} = props
  const size = useWindowSize()

  // Mobile Navbar
  const [isOpen,setOpen] = useState(false)
  const isMobile = size.width < 640 ;

  if (isMobile) return (
    <nav className="fixed w-full bg-black-0/70 backdrop-blur z-40 transition-all duration-500 ease-in-out" style={{height:!isOpen?56:size.height}}>
      <div className="flex justify-between items-center px-5 sm:px-8 md:px-12 w-full h-14">
        <Logo iconOnly className="opacity-70" />
        <div className="w-9 h-9 opacity-70" onClick={()=>setOpen(()=>!isOpen)}>
          <Image src={!isOpen?menu:close}  alt="menu" placeholder="empty"/>
        </div>
      </div>
      
      {isOpen && (
      <div className="grid w-full h-full place-items-center">
        <div className="flex flex-col pb-20 animate-fadeIn delay-600">
          <NavMenu active={active} />
        </div>
      </div>
      )}
      
    </nav>
  )

  // Desktop Navbar
  return (
    <nav className="fixed w-full h-auto bg-black-0/70 backdrop-blur z-40">
      <div className="flex justify-between items-center px-5 sm:px-8 md:px-12 w-full h-14">
        <Logo className="opacity-70" />
        <div className="flex">
          <NavMenu active={active} />
        </div>
      </div>
    </nav>
  )
}


function NavMenu (props) {
  const {active} = props
  const navItems = [
    {
      name: 'Home',
      target: '/',
      isActive: active == 'Home',
    },
    {
      name: 'Events',
      target: '/events',
      isActive: active == 'Events',
    },
    {
      name: 'Member',
      target: '/member',
      isActive: active == 'Member',
    },
    {
      name: 'Snapshot',
      target: '/snapshot',
      isActive: active == 'Snapshot',
    },
  ]
  return (
    <>
    {navItems.map((value,i)=>(
      <Link href={value.target} key={i}>
        <a className="h-14 px-4 group hover:bg-white/10 relative grid place-items-center">
          <span className="font-mono-r text-base sm:text-sm text-white/70 group-hover:text-white">{value.name}</span>
          {value.isActive && <span className="absolute block h-0.5 w-[70%] bg-accent/60"></span>}
        </a>
      </Link>
    ))}
    </>
  )
}



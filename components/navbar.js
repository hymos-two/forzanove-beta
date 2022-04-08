import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import hamburgerMenu from '../public/images/hamburger-menu.svg'
import {Logo} from './molecule'
import {useWindowSize} from '../hooks/useWindowSize'

export default function Navbar (props) {
  const {active} = props
  
  const isMobile = useWindowSize().width < 640 ;
  return (
    <nav className="flex justify-between items-center px-5 sm:px-8 md:px-12 fixed w-full h-14 bg-black-0/70 backdrop-blur z-40">
      {isMobile ? (
        <>
        <Logo iconOnly imgClass="opacity-70"/>
        <div className="w-9 h-9">
        {/* <Image src={hamburgerMenu} alt="menu" placeholder="empty" /> */}
        </div>
        </>
      ):(
        <>
        <Logo className="opacity-70"/>
        <div className="flex gap-6">
          <NavMenu active={active}/>
        </div>
        </>
      )}
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
      name: 'Event',
      target: '/event',
      isActive: active == 'Event',
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
        <a className="font-mono-r text-sm text-white/70 hover:text-white text-center relative">
          {value.name}
          {value.isActive && <span className="absolute block h-px w-full bg-accent"></span>}
        </a>
      </Link>
    ))}
    </>
  )
}
import {useState,useEffect,useRef} from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import HTMLHead from '../../components/htmlHead'
import Navbar from '../../components/navbar'
import PageCover from '../../components/pageCover'
import Footer from '../../components/footer'
import {Grid,Container,Section} from '../../components/grid'
import {Button} from '../../components/button'
import {Tile} from '../../components/tile'

import wisudaImg from '../../public/images/events/wisuda.jpg'
import {ArrowIcon} from '../../components/icons'


// STUCK AT CLASS NAVIGATION STATE :(
// FUCK THIS PROBLEM

export default function Member () {
  const classes = ['MIPA-1','MIPA-2','MIPA-3','IPS-1','IPS-2']

  return (
    <>
      <HTMLHead title="Member | Forzanove 09"/>
      <Navbar active="Member" />
      <Section1Cover />
      <ClassNavigation classes={classes} />
      <Section2Content classes={classes} />
      <Footer min />
    </>
  )
}

function Section1Cover (props) {
  return (
    <PageCover sideText="<< Scroll Down ⸻">
      <div className="w-full h-full relative flex flex-col justify-end items-end md:block">

        <div className="md:absolute md:w-1/3 md:h-full md:left-0 md:flex md:items-center md:z-10">
          <div className="flex">
            <div className="w-1/4 md:w-1/2">
              <span className="block w-5/6 h-1 bg-accent mt-3"></span>
            </div>
            <div className="w-7/12 md:w-1/2">
              <h1 className="text-mono-m text-2xl md:text-[28px] text-white/90">
                Member
              </h1>
              <p className="text-sans text-sm leading-6 text-white/80 text-left tracking-wide mt-2 md:mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt
              </p>
            </div>
          </div>
        </div>


        <div className="w-3/4 h-1/2 mt-10 md:absolute md:h-full md:mt-0 md:right-0 md:flex md:items-center">

          <div className="w-full h-4/5 md:w-[175%] md:h-full relative bg-red-100 grayscale-[80%]">
            <div className="absolute w-full h-full bg-gradient-to-r from-black-0/70 z-10"></div>
            <Image src={wisudaImg} layout="fill" objectFit="cover" placeholder="blur" />
          </div>

          <div className="w-full relative mt-16">
            
          </div>
        </div>
      </div>
    </PageCover>
  )
}

function ClassNavigation (props) {
  const {classes} = props
  return (
    <nav className="sticky top-14 bg-white/10 backdrop-blur flex justify-evenly mt-20 z-20">
      {classes.map((value,i)=>(
        <a href={`#${value}`} className="h-12 lg:h-9 px-3 lg:px-2 relative grid place-items-center lg:hover:bg-white/10 cursor-pointer" key={i}>
          <span className="font-mono-r text-sm text-white/60">{value}</span>
          {/* {isActive == value && <span className="block absolute w-full h-[2px] bg-accent/60"></span>} */}
        </a>
      ))}
    </nav>
  )
}


function Section2Content (props) {
  const {classes} = props

  return (
    <>
    {classes.map((value,i)=>(
      // <Wrapper setActive={setActive} id={value}>
      <Section id={value} className="bg-black-200 pt-24 lg:pt-36 scroll-smooth">
      <Container>
        <Grid>
          <div className="col-span-4 md:col-span-3 lg:col-span-3 pb-12">
            <h1 className="font-mono-m text-white/90 text-2xl  md:text-[28px] mt-8">12 {value.split('-').join(' ')}</h1>
            <p className="font-sans text-white/80 text-sm mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud 
            </p>
          </div>

          <div className="col-span-4 sm:col-span-3 md:col-span-5 lg:col-start-5 lg:col-span-8 mt-8 md:mt-0">
            <div className="relative w-screen -left-4 sm:static sm:w-full aspect-[16/9] bg-slate-500">
              {/* <Image src={bgCover} alt="cover" placeholder="blur" /> */}
            </div>
          </div>

          <div className="col-span-4 md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-10 pt-4">
            {[1,2,3,4,5,6].map((value,i)=>(
              <div className={`w-4/5 sm:w-3/5 ${i % 2 != 0 ? 'float-right':'float-left'}`} key={i}>
                <div className="w-full aspect-[4/3] bg-slate-500 mt-4 sm:mt-6"></div>
              </div>
            ))}      
          </div>
        </Grid>
      </Container>
    </Section>
    // </Wrapper>
    ))}
    <div className="bg-black-200 py-10"></div>
    </>
  )
}

// function Wrapper (props) {
//   const {children,setActive,id} = props
//   const ref = useRef()

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   },[])

//   function handleScroll () {
//     // console.log(window.pageYOffset >= ref.current.offsetTop && window.pageYOffset <= ref.current.offsetBottom)
//     // if (window.pageYOffset >= ref.current.offsetTop && window.pageYOffset <= ref.current.offsetBottom ) return console.log(id)
//     if (window.pageYOffset >= ref.current.offsetTop ) return console.log(ref.current.style)

//   }

//   return (
//     <div ref={ref}>{children}</div>
//   )
// }
import {useState,useEffect} from 'react'
import Image from 'next/image'
import HTMLHead from '../components/htmlHead'
import PageCover from '../components/pageCover'
import {Grid,Container,Section} from '../components/grid'
import {Button} from '../components/button'

import background from '../public/images/forzanove-bg.png'
import logo from '../public/images/forzanove-logo.png'
import arrow from '../public/icons/arrow-up.svg'

import {useWindowSize} from '../hooks/useWindowSize'

export default function Home() {
  return (
    <>
    <HTMLHead title="Forzanove 09"/>
    <Section1Cover />
    <Section2Quote />
    <Section3Events />
    <Section4Member />
    <Section5Snapshot />
    <Section6Yearbook />
    </>
  )
}


// ========================================
// ========== Section 1 Cover
// ========================================
function Section1Cover () {
  return (
    <PageCover bg={background} sideText=" ⸻ Angkatan IX SMA Muhammadiyah Boarding School Yogyakarta ⸻⸻" >
      <div className="w-full h-full flex flex-col justify-center">
        <div className="grid grid-cols-8 md:grid-cols-12">
          <div className="flex col-span-6 col-start-2 md:col-start-3">
            <div className="w-[76px] h-[76px] md:w-[136px] md:h-[136px]">
              <Image src={logo} />
            </div>
            <h1 className="font-mono-m font-medium text-white text-xl md:text-4xl mt-2 md:mt-6">
              Forza
              <br />
              Nove ⸻
            </h1>
          </div>
        </div>
      </div>
      <Button icon={arrow} rotateIcon={180} className="absolute right-4 -bottom-6"/>
    </PageCover>
  )
}


// ========================================
// ========== Section 2 Quote
// ========================================
function Section2Quote () {
  return (
    <Section className="bg-black-300 grid place-items-center">
      <Container>
        <Grid cols={1}>
          <div className="col-span-1 px-4 sm:px-12 lg:px-24">
            <p className="font-mono-r text-center text-base leading-7 md:text-lg md:leading-9 text-white/80">
            “You want to wake up in the morning and think the future is going to be great - 
            and thats what being a spacefaring civilization is all about.
            It’s about believing in the future and thinking that the future will be better than the past”
            <br /><br />
            - Elon Musk -
            </p>
          </div>
        </Grid>
      </Container>
    </Section>
  )
}

// ========================================
// ========== Section 3 Events 
// ========================================
function Section3Events () {
  const size = useWindowSize();
  return (
    <>
    <Section className="bg-black-100 pt-20 lg:pt-24" height="100%">
      <Container>
        <Grid cols={1}>
          <div className="col-span-1 flex gap-2">
            <h1 className="text-mono-m text-2xl md:text-[28px] text-white/90">
              Events
            </h1>
            <span className="block flex justify-start items-center">
              <span className="block w-12 lg:w-24 h-0.5 bg-accent"></span>
            </span>
          </div>
        </Grid>
      </Container>

      <Container>
        <Grid>
          <EventsImage width={size.width} className="col-span-4 md:col-span-8 lg:col-span-8 mt-14 mb-14 lg:mt-14 lg:mb-20 relative -left-4 w-screen h-full sm:static sm:w-full"/>
          <div className="grid place-items-center bg-black/0 lg:bg-black-300 col-span-4 md:col-span-8 lg:col-span-4 lg:p-7 lg:pr-16">
            <div className="grid place-items-center px-3 sm:px-12 lg:px-0 lg:block">
              <p className="text-sans text-sm leading-6 text-white/80 text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud 
              </p>
              <Button text="Lihat Selengkapnya" icon={arrow} rotateIcon={90} className="mt-16"/>
            </div>
          </div>
        </Grid>
      </Container>
    </Section>
    </>
  )
}

function EventsImage (props) {
  const {className,width} = props
  const [widthSize,setWidthSize] = useState(0)

  useEffect(()=>{
    setWidthSize(()=>{
      if (width == undefined) { return 0 } else
      if (width >= 1280) { return (1140 - 36) * 8 / 12 / 4 } else 
      if (width >= 1024) { return (960 - 36) * 8 / 12 / 4 } else 
      { return width / 4 }
    })
  },[width])

  const divImgStyle = (offsetTop) => ({
    width:widthSize,
    height:widthSize*3/2,
    top:widthSize*3/2*offsetTop/100,
  })
  const containerClass = `flex gap-2 sm:gap-3 ${className}`
  return (
    <div className={containerClass} style={{height:widthSize*3/2*130/100}}>
      {[5,30,0,15].map((value,i) => (
        <div className="relative" style={divImgStyle(value)} key={i}>
          <Image src={background} layout="fill" objectFit="cover" placeholder="blur"/>
        </div>
      ))
      }
    </div>
  )
}


// ========================================
// ========== Section 4 Member 
// ========================================

function Section4Member (props) {
  return (
    <Section className="bg-black-200 pt-20 lg:py-24" height="100%">
      <Container>
        <Grid cols={1}>
          <div className="col-span-1 flex gap-2">
            <h1 className="text-mono-m text-2xl md:text-[28px] text-white/90">
              Member
            </h1>
            <span className="block flex justify-start items-center">
              <span className="block w-12 lg:w-24 h-0.5 bg-accent"></span>
            </span>
          </div>
        </Grid>
      </Container>

      <Container>
        <Grid className="lg:grid-flow-col-dense">
          <div className="bg-gray-300 col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-6">
            <div className="h-[180px] lg:h-[360px] w-full bg-red-200"></div>
          </div>

          <div className="grid place-items-center col-span-4 md:col-span-8 lg:col-span-4 lg:pr-16">
            <div className="grid place-items-center px-3 sm:px-12 lg:px-0 lg:block">
              <p className="text-sans text-sm leading-6 text-white/80 text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud 
              </p>
              <Button text="Lihat Selengkapnya" icon={arrow} rotateIcon={90} className="mt-16"/>
            </div>
          </div>
        </Grid>
      </Container>
    </Section>
  )
}

// ========================================
// ========== Section 5 Snapshot 
// ========================================

function Section5Snapshot (props) {
  return (
    <Section className="bg-black-300 pt-20 lg:py-24" height="100%">
      <Container>
        <Grid cols={1}>
          <div className="col-span-1 flex gap-2">
            <h1 className="text-mono-m text-2xl md:text-[28px] text-white/90">
              Snapshot
            </h1>
            <span className="block flex justify-start items-center">
              <span className="block w-12 lg:w-24 h-0.5 bg-accent"></span>
            </span>
          </div>
        </Grid>
      </Container>

      <Container>
        <Grid className="lg:grid-flow-col-dense">
          <div className="bg-gray-300 col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-6">
            <div className="h-[180px] lg:h-[360px] w-full bg-red-200"></div>
          </div>

          <div className="grid place-items-center col-span-4 md:col-span-8 lg:col-span-4 lg:pr-16">
            <div className="grid place-items-center px-3 sm:px-12 lg:px-0 lg:block">
              <p className="text-sans text-sm leading-6 text-white/80 text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud 
              </p>
              <Button text="Lihat Selengkapnya" icon={arrow} rotateIcon={90} className="mt-16"/>
            </div>
          </div>
        </Grid>
      </Container>
    </Section>
  )
}

// ========================================
// ========== Section 6 Yearbook
// ========================================

function Section6Yearbook (props) {
  return (
    <Section className="bg-black-200 pt-20 lg:py-24" height="100%">
      <Container>
        <Grid cols={1}>
          <div className="col-span-1 flex gap-2">
            <h1 className="text-mono-m text-2xl md:text-[28px] text-white/90">
              Yearbook
            </h1>
            <span className="block flex justify-start items-center">
              <span className="block w-12 lg:w-24 h-0.5 bg-accent"></span>
            </span>
          </div>
        </Grid>
      </Container>

      <Container>
        <Grid className="lg:grid-flow-col-dense">
          <div className="bg-gray-300 col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-6">
            <div className="h-[180px] lg:h-[360px] w-full bg-red-200"></div>
          </div>

          <div className="grid place-items-center col-span-4 md:col-span-8 lg:col-span-4 lg:pr-16">
            <div className="grid place-items-center px-3 sm:px-12 lg:px-0 lg:block">
              <p className="text-sans text-sm leading-6 text-white/80 text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud 
              </p>
              <Button text="Lihat Selengkapnya" icon={arrow} rotateIcon={90} className="mt-16"/>
            </div>
          </div>
        </Grid>
      </Container>
    </Section>
  )
}

import Image from 'next/image'
import HTMLHead from '../components/htmlHead'
import Navbar from '../components/navbar'
import PageCover from '../components/pageCover'
import Footer from '../components/footer'
import {Grid,Container,Section} from '../components/grid'
import {Button} from '../components/button'

import background from '../public/images/forzanove-bg.png'
import logo from '../public/images/forzanove-logo.png'
import yearbook from '../public/images/yearbook.png'

import {
  ArrowIcon,
  DownloadIcon,
} from '../components/icons'

export default function Home() {
  return (
    <>
      <HTMLHead title="Forzanove 09"/>
      <Navbar active="Home" />
      <Section1Cover />
      <Section2Quote />
      <Section3Events />
      <Section4Member />
      <Section5Snapshot />
      <Section6Yearbook />
      <Footer />
    </>
  )
}


// ========================================
// ========== Section 1 Cover
// ========================================
function Section1Cover () {
  return (
    <PageCover bgImage={background} sideText=" ⸻ Angkatan IX SMA Muhammadiyah Boarding School Yogyakarta ⸻⸻" isHome >
      <div className="w-full h-full flex flex-col justify-center">
        <div className="grid grid-cols-8 md:grid-cols-12">
          <div className="flex col-span-6 col-start-2 md:col-start-3">
            <div className="w-[76px] h-[76px] md:w-[136px] md:h-[136px]">
              <Image src={logo} placeholder="empty"/>
            </div>
            <h1 className="font-mono-m font-medium text-white text-xl md:text-4xl mt-2 md:mt-6">
              Forza
              <br />
              Nove ⸻
            </h1>
          </div>
        </div>
      </div>
      <Button disabled 
        icon={<ArrowIcon down />} 
        className="absolute right-4 -bottom-6"
      />
    </PageCover>
  )
}


// ========================================
// ========== Section 2 Quote
// ========================================
function Section2Quote () {
  return (
    <Section className="bg-black-300 grid place-items-center" height="100vh">
      <Container>
        <Grid cols={1}>
          <div className="col-span-1 px-4 sm:px-12 lg:px-24">
            <p className="font-mono-r text-center text-base leading-7 md:text-lg md:leading-9 text-white/60">
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
  return (
    <>
    <Section className="bg-black-100 pt-20 lg:pt-24" height="100%">
      <Container>
      <SectionTitle title="Events" />
      </Container>

      <Container>
        <Grid gap={false}>

          <div className="col-span-4 md:col-span-8 lg:col-span-8 my-14 lg:mt-14 lg:mb-20 grid grid-flow-col gap-2 sm:gap-3 relative -left-4 w-screen sm:static sm:w-full">
            {["5%","30%","0%","15%"].map((value,i)=>(
              <div className="relative w-full aspect-[3/5] bg-gray-500" style={{marginTop:value}} key={i}>
                <Image src={background} layout="fill" objectFit="cover" placeholder="blur"/>
              </div>
            ))}
          </div>
          
          <div className="grid place-items-center bg-black/0 lg:bg-black-300 col-span-4 md:col-span-8 lg:col-span-4 lg:p-7 lg:pr-16">
            <div className="grid place-items-center px-3 sm:px-12 lg:px-0 lg:block">
              <p className="text-sans text-sm leading-6 text-white/80 text-center tracking-wide lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud 
              </p>
              <Button
                target="/events" 
                text="Lihat Selengkapnya" 
                icon={<ArrowIcon right/>} 
                className="mt-16"
              />
            </div>
          </div>
        </Grid>
      </Container>
    </Section>
    </>
  )
}


// ========================================
// ========== Section 4 Member 
// ========================================

function Section4Member () {
  return (
    <Section className="bg-black-200 pt-20 lg:py-24" height="100%">
      <Container>
      <SectionTitle title="Member" />
      </Container>

      <Container>
        <Grid className="lg:grid-flow-col-dense">
          <div className="col-span-4 md:col-span-6 md:col-start-2 lg:col-span-6 lg:col-start-7 relative my-14 lg:my-0 -left-4 sm:left-0 w-screen sm:w-full">
            <div className="absolute right-0 -bottom-4 border-2 border-accent border-r-0 lg:border-r-2 lg:-right-8 h-12 w-36 lg:w-48"></div>
            <div className="w-full bg-gray-400 aspect-[16/10]"></div>
          </div>

          <div className="grid place-items-center col-span-4 md:col-span-8 lg:col-span-4 lg:pr-16">
            <div className="grid place-items-center px-3 sm:px-12 lg:px-0 lg:block">
              <p className="text-sans text-sm leading-6 text-white/80 text-center tracking-wide lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud 
              </p>
              <Button 
                target="/" 
                text="Lihat Selengkapnya" 
                icon={<ArrowIcon right/>} 
                className="mt-16"
              />
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

function Section5Snapshot () {
  return (
    <Section className="bg-black-300 pt-20 lg:py-24" height="100%">
      <Container>
      <SectionTitle title="Snapshot" />
      </Container>

      <Container>
        <Grid className="lg:grid-flow-col-dense">
          
          <div className="col-span-4 md:col-span-6 md:col-start-2 lg:col-span-6 lg:col-start-7 relative my-14 lg:m-0 grid place-items-center">
            <div className="absolute flex justify-center w-4/5 sm:w-2/3 lg:w-full h-[110%]" >
              <div className="w-[70%] bg-black-100"></div>
            </div>
            <div className="relative w-4/5 sm:w-2/3 lg:w-full aspect-[4/3] grid grid-rows-6 grid-flow-col gap-2 sm:gap-2.5 lg:gap-3" >
              <div className="row-span-2 row-start-2">
                <div className="bg-gray-400 h-full w-full"></div>
              </div>
              <div className="row-span-3 pl-[20%]">
                <div className="bg-gray-400 h-full w-full"></div>
              </div>
              <div className="row-span-5">
                <div className="bg-gray-400 h-full w-full"></div>
              </div>
            </div>
          </div>
          
          <div className="grid place-items-center col-span-4 md:col-span-8 lg:col-span-4 lg:pr-16">
            <div className="grid place-items-center px-3 sm:px-12 lg:px-0 lg:block">
              <p className="text-sans text-sm leading-6 text-white/80 text-center tracking-wide lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud 
              </p>
              <Button 
                target="/" 
                text="Lihat Selengkapnya" 
                icon={<ArrowIcon right/>} 
                className="mt-16"/>
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

function Section6Yearbook () {
  return (
    <Section className="bg-black-200 pt-20 lg:py-24" height="100%">
      <Container>
      <SectionTitle title="Yearbook" />
      </Container>

      <Container>
        <Grid className="lg:grid-flow-col-dense">
          <div className="col-span-4 md:col-span-6 md:col-start-2 lg:col-span-6 lg:col-start-7 relative my-14 lg:m-0 sm:p-4 grid place-items-center">
            <div className="w-4/5 sm:w-2/3 lg:w-full">
              <Image src={yearbook} alt="yearbook" placeholder="blur"/>
            </div>
          </div>

          <div className="grid place-items-center col-span-4 md:col-span-8 lg:col-span-4 lg:pr-16">
            <div className="grid place-items-center px-3 sm:px-12 lg:px-0 lg:block">
              <p className="text-sans text-sm leading-6 text-white/80 text-center tracking-wide lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud 
              </p>
              <Button secondary 
                target="/" 
                text="Download E-Book" 
                icon={<DownloadIcon/>} 
                className="mt-16"
              />
            </div>
          </div>
        </Grid>
      </Container>
    </Section>
  )
}





// ========================================
// ========== LOCAL COMPONENTS
// ========================================

function SectionTitle (props) {
  const {title} = props
  return (
    <Grid cols={1}>
      <div className="col-span-1 flex justify-start items-center gap-2">
        <h1 className="text-mono-m text-2xl md:text-[28px] text-white/90">
          {title}
        </h1>
        <span className="block w-12 lg:w-24 h-0.5 bg-accent"></span>
      </div>
    </Grid>
  )
}
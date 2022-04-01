import Image from 'next/image'
import HTMLHead from '../components/htmlHead'
import PageCover from '../components/pageCover'
import {Grid,Container} from '../components/grid'

import background from '../public/images/forzanove-bg.png'
import logo from '../public/images/forzanove-logo.png'
import arrow from '../public/icons/arrow-up.svg'

export default function Home() {
  return (
    <>
    <HTMLHead title="Forzanove 09"/>
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
      <button className="w-12 h-12 rotate-180 bg-accent hover:bg-zinc-100 absolute right-4 -bottom-6 grid place-items-center">
        <Image src={arrow} className="m-auto" />
      </button>
    </PageCover>
    <Container bgColor="bg-black-400">
      <Grid cols={1}>
        <p className="font-mono-r text-center text-base text-white/90">
        “You want to wake up in the morning and think the future is going to be great - and thats what being a spacefaring civilization is all about.”
        </p>
      </Grid>
    </Container>

    
    {/* <section className="w-screen h-screen bg-black-400 grid place-items-center px-8"> 
      <p className="font-mono-r text-center text-base text-white/90">
      “You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about.”
      </p>
    </section> */}
    </>
  )
}
 
function Section (props) {
  return (
    <section>
      {props.children}
    </section>
  )
}



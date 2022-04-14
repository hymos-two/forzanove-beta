
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import HTMLHead from '../../components/htmlHead'
import Navbar from '../../components/navbar'
import PageCover from '../../components/pageCover'
import Footer from '../../components/footer'
import {Grid,Container,Section} from '../../components/grid'
import {Button} from '../../components/button'
import {Tile} from '../../components/tile'

import {Logo} from '../../components/molecule'
import {CloseIcon,LaunchIcon,ArrowIcon} from '../../components/icons'

export default function EventPage () {
  const router = useRouter()
  const { slug } = router.query

  console.log(router)

  return (
    <>
    <HTMLHead title={slug} />
    <div className="w-full bg-black-0/70 backdrop-blur fixed z-20">
      <Link href="/events">
        <a className="w-14 h-14 lg:w-10 lg:h-10 grid place-items-center text-white hover:text-black-0 lg:bg-white/10 hover:bg-accent">
          <ArrowIcon left className="w-8 h-8" />
        </a>
      </Link>
    </div>
    <Section className="bg-black-200 py-20 sm:py-28">
      <Container>
        <Grid>
          <div className="col-span-4 md:col-span-3 lg:col-span-3 pb-12">
            <Logo iconOnly />
            <h1 className="font-mono-m text-white/90 text-2xl  md:text-[28px] mt-8">Wisuda Angkatan IX</h1>
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

          <div className="col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-3 mt-4 sm:mt-8 md:mt-0">
            <div className="w-full aspect-[1/1] bg-slate-500"></div>
          </div>

          <div className="col-span-4 md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-10 pt-4">

            {[1,2,3,4,5,6].map((value,i)=>(
              <div className={`w-4/5 sm:w-3/5 ${i % 2 == 0 ? 'float-right':'float-left'}`} key={i}>
                <div className="w-full aspect-[4/3] bg-slate-500 mt-4 sm:mt-6"></div>
              </div>
            ))}
            
          </div>
        </Grid>
      </Container>
    </Section>
    <Section className="bg-black-300">
      <Container>
        <Grid gap={false}>
          <div className="col-span-2 col-start-3 md:col-span-3 md:col-start-6 lg:col-start-10">
            <Tile 
              title="Lihat Lebih Banyak"
              target="/"
              btnText="Google Drive"
              className="h-36"
              icon={<LaunchIcon />}
            />
          </div>
        </Grid>
      </Container>
    </Section>
    <Section className="bg-black-200 py-28">
      <Container>
        <Grid>
          <div className="col-span-4 sm:col-span-8 lg:col-span-10 grid grid-cols-2 sm:grid-cols-4 lg:col-start-2 gap-x-4 gap-y-16 sm:gap-x-3.5">
            {[
              {title:"Bakti Sosial"},
              {title:"Outbond Kelas 12"},
              {title:"Bakti Sosial"},
              {title:"Outbond Kelas 12"},
            ].map((value,i)=>(
              <Tile 
                title={value.title}
                image={true}
                target="/events/hello-world"
                btnText="lihat foto"
                icon={<ArrowIcon right/>} 
                className={i % 2 == 0 ? "" : "mt-[16%]" }
                key={i}
              />
            ))}
          </div>
        </Grid>
      </Container>
    </Section>
    <Footer min/>
    </>
  )
}





// <div className="w-4/5 sm:w-3/5 float-left">
//   <div className="w-full aspect-[4/3] bg-slate-500 mt-8"></div>
//   <div className="w-full flex gap-2 sm:gap-4 mt-2 sm:mt-4">
//     <div className="aspect-[1/1] w-full bg-slate-500"></div>
//     <div className="aspect-[1/1] w-full bg-slate-500"></div>
//   </div>  
// </div>

// <div className="w-4/5 sm:w-3/5 float-right">
//   <div className="w-full aspect-[4/3] bg-slate-500 mt-8"></div>
//   <div className="w-full flex gap-2 sm:gap-4 mt-2 sm:mt-4">
//     <div className="aspect-[1/1] w-full bg-slate-500"></div>
//     <div className="aspect-[1/1] w-full bg-slate-500"></div>
//   </div>  
// </div>
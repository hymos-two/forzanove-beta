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
import {LaunchIcon} from '../../components/icons'


export default function Snapshot () {
  return (
    <>
      <HTMLHead title="Snapshot | Forzanove 09"/>
      <Navbar active="Snapshot" />
      <Section1Cover />
      <Section2Content />
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
                Snapshot
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

function Section2Content () {
  return (
    <>
    <Section className="bg-black-200 py-28">
      <Container>
        <Grid>
            
            {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((value,i)=>(
              <div className="col-span-4 sm:col-span-2 md:col-span-4">
                <div className={`w-4/5 sm:w-full relative ${i % 2 != 0 ? 'float-right sm:top-10 lg:top-0':'float-left'} ${i % 3 == 1 ? 'lg:top-10':''}`} key={i}>
                  <div className="w-full aspect-[4/3] bg-slate-500 mt-4 sm:mt-6">
                    {/* image */}
                  </div>
                </div>
              </div>
            ))} 
            
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
    </>
  )
}
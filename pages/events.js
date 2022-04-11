import {useState,useEffect} from 'react'
import Image from 'next/image'
import HTMLHead from '../components/htmlHead'
import Navbar from '../components/navbar'
import PageCover from '../components/pageCover'
import Footer from '../components/footer'
import {Grid,Container,Section} from '../components/grid'
import {Button} from '../components/button'

import wisudaImg from '../public/images/events/wisuda.jpg'
import arrow from '../public/icons/arrow-up.svg'


export default function Events () {
  return (
    <>
      <HTMLHead title="Events | Forzanove 09"/>
      <Navbar active="Events" />
      <Section1Cover />
      <Footer min />
    </>
  )
}

//md:absolute md:h-full w-full md:w-1/3 left-0 md:flex md:items-center

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
                Events
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
            <Image src={wisudaImg} layout="fill" objectFit="cover" />
          </div>

          <div className="w-full relative -mt-16 md:mt-0">
            <h2 className="text-mono-r text-xl text-white/80 ml-3 z-20">Wisuda <br/>Angkatan IX</h2>
            <Button text="Lihat Foto" icon={arrow} rotateIcon={90} className="mt-6"/>
          </div>
          
        </div>




        {/* <div className="grid grid-cols-8 md:grid-cols-12">

          <div className="relative col-span-7 md:col-span-4 grid grid-flow-col grid-cols-7 md:grid-cols-4">
            <span className="block col-span-2 w-[85%] h-1 bg-accent mt-3"></span>
            <div className="col-span-5 lg:col-span-3">
              <h1 className="text-mono-m text-2xl md:text-[28px] text-white/90">
                Events
              </h1>
              <p className="text-sans text-sm leading-6 text-white/80 text-left tracking-wide mt-2 md:mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt
              </p>
            </div>
          </div>

          <div className="col-span-6 md:col-span-9 md:col-start-4 h-20 bg-red-100"></div>
        </div> */}
      </div>
    </PageCover>
  )
}
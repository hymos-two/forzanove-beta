import {useState,useEffect} from 'react'
import Image from 'next/image'
import HTMLHead from '../components/htmlHead'
import Navbar from '../components/navbar'
import PageCover from '../components/pageCover'
import Footer from '../components/footer'
import {Grid,Container,Section} from '../components/grid'
import {Button} from '../components/button'


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

function Section1Cover (props) {
  return (
    <PageCover>
      
    </PageCover>
  )
}

import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import HTMLHead from '../../components/htmlHead'
import Navbar from '../../components/navbar'
import PageCover from '../../components/pageCover'
import Footer from '../../components/footer'
import {Grid,Container,Section} from '../../components/grid'
import {Button} from '../../components/button'

import {CloseIcon} from '../../components/icons'

export default function EventPage () {
  const router = useRouter()
  const { slug } = router.query

  console.log(router)

  return (
    <>
    <div className="w-full h-7 flex justify-end bg-white/10 backdrop-blur fixed">
      <Link href="/events">
        <a className="w-7 h-7 grid place-items-center text-white hover:bg-white/20">
          <CloseIcon />
        </a>
      </Link>
    </div>
    <Section className="bg-black-200 py-28">
      <Container>
        <Grid>
          <div className="col-span-4 lg:col-span-3">
            <h1 className="font-mono-m text-white/90 text-2xl  md:text-[28px]">Wisuda Angkatan IX</h1>
            <p className="font-sans text-white/80 text-sm pt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud 
            </p>
          </div>

          <div className="col-span-4 lg:col-start-5 lg:col-span-8 bg-slate-100 my-8 md:my-0">
            <div className="w-full aspect-[16/9] bg-black-500">
              {/* <Image src={bgCover} alt="cover" placeholder="blur" /> */}
            </div>
          </div>

          <div className="col-span-3">
            <div className="w-full aspect-[1/1] bg-slate-100"></div>
          </div>

        </Grid>
      </Container>
    </Section>
    </>
  )
}
import Image from 'next/image'
import HTMLHead from '../components/htmlHead'
import PageCover from '../components/pageCover'

import background from '../public/images/forzanove-bg.png'
import logo from '../public/images/forzanove-logo.png'

export default function Home() {
  return (
    <>
    <HTMLHead title="Forzanove 09"/>
    <PageCover bg={background} >
      <div className="w-full h-full flex flex-col justify-center">
        <div className="grid grid-cols 8">
          <div className="flex col-span-6 col-start-3">
            <div style={{width:76,height:76,}}>
              <Image src={logo} />
            </div>
            <h1 className="font-mono-m font-medium text-xl text-white/90 mt-2">
              Forza
              <br />
              Nove ⸻
            </h1>
          </div>
        </div>
      </div>
    </PageCover>
    </>
  )
}



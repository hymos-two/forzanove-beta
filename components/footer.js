import Image from 'next/image'
import {Section,Container} from './grid'
import logo from '../public/images/forzanove-logo.png'

function Footer (props) {
  if (props.min) {
    return (
      <Section height="100%">
      <Container fluid className="bg-black-0 py-4 flex justify-center">
        <div className="w-9 h-9 grayscale opacity-50"><Image src={logo} alt="logo" placeholder="empty" /></div>
      </Container>
      </Section>
    )
  }
  return (
    <Section height="100%">
    <Container fluid className="bg-black-0 text-white py-16">
      <div className="grid grid-cols-8 lg:grid-cols-12 place-items-start">

        <div className="col-span-6 col-start-2 sm:col-span-2 sm:col-start-2 flex items-center opacity-80">
          <div className="w-9 h-9 grayscale mr-0.5">
            <Image src={logo} alt="logo"/>
          </div>
          <span className="text-base font-mono-m">ForzaNove</span>
        </div>
        
        <div className="col-span-2 col-start-3 pt-6 sm:col-span-1 sm:col-start-5 sm:pt-0">
          <span className="text-sm font-mono-m leading-8 text-white/80 inline-block">Sosial</span>
          <ul className="text-sm font-sans">
            <li className="leading-8 text-white/60 hover:underline">
              <a href="https://www.instagram.com/forzanove.09/" target="_blank">Instagram</a>
            </li>
            <li className="leading-8 text-white/60 hover:underline">
              <a href="">Youtube</a>
            </li>
          </ul>
        </div>
        
        <div className="col-span-3 pt-6 lg:col-span-2 sm:pt-0">
          <span className="text-sm font-mono-m leading-8 text-white/80 inline-block">Kontak</span>
          <ul className="text-sm font-sans">
            <li className="leading-8 text-white/60 hover:underline"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=forzanove.09@gmail.com" target="_blank">forzanove.09@gmail.com</a></li>
          </ul>
        </div>
        
        <div className="col-span-5 col-start-3 pt-6 sm:col-span-3 sm:col-start-5 sm:pt-5 lg:col-span-4 lg:col-start-8 lg:pt-0">
          <span className="text-sm font-mono-m leading-8 text-white/80 inline-block">Alamat</span>
          <ul className="text-sm font-sans mt-1">
            <li className="leading-6 text-white/60 hover:underline">
              <a href="https://goo.gl/maps/iLimKWGxsiGcbUpH6" target="_blank">
              Muhammadiyah Boarding School Yogyakarta
              <br/>
              Jalan Piyungan KM. 2, Marangan, Bokoharjo, Prambanan, Sleman, Daerah Istimewa Yogyakarta 55572
              </a>
            </li>
          </ul>
        </div>
        
      </div>
      <div></div>
    </Container>
    <Container fluid className="bg-black-100 text-center py-4">
      <span className="font-mono-r text-xs text-white/30">Copyrights © 2022 -- ForzaNove</span>
    </Container>
    </Section>
  )
}

export default Footer;
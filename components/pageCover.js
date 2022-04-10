import Image from 'next/image';
import {useWindowSize} from '../hooks/useWindowSize'

export default function PageCover (props) {
  const {
    bgImage,
    children,
    blackWidthLg,
    sideText,
  } = props

  const size = useWindowSize()

  return (
    <section 
      className="relative bg-black-100 w-full"
      style={{height:size.height*0.9}}
    >
      {/* background image */}
      <div className="absolute w-full h-full bg-black-200">
        {bgImage && <Image src={bgImage} layout="fill" objectFit="cover"/>}
      </div>

      {/* black background area */}
      <div className={`absolute bg-black-100 h-[108%] w-[37.5%] lg:w-${blackWidthLg?blackWidthLg:'1/3'}`}>
        <div className="absolute bottom-6 left-2 md:left-6 w-4 h-4 -rotate-90">
          <span className="inline-block w-max text-mono-r text-xs text-white/20 tracking-wide">
            {sideText}
          </span>
        </div>
      </div>

      {/* content */}
      <div className="relative w-full h-full z-10">
        {children}
      </div>

    </section>
  )
}

/* <video autoplay muted loop className="object-cover">         
  <source src="./video-1.mp4" type="video/mp4"/>       
</video> */
import Image from 'next/image';
import {useWindowSize} from '../hooks/useWindowSize'

function PageCover (props) {
  const size = useWindowSize()
  return (
    <section 
      className="relative bg-gray-800"
      style={{
        width: size.width,
        height: size.height * 0.9,
      }}
    >
      {/* background container */}
      <div 
        className="absolute overflow-hidden grid place-items-end"
        style={{
          width: size.width,
          height: size.height * 0.9,
        }}
      >
        {/* set window ratio */}
        {1920/1136*0.9 >= size.width/size.height*0.9
        ? <div 
          className="bg-black"
          style={{
            width: size.height * 0.9 * (1920 / 1136),
            height: size.height * 0.9,
          }}><Image src={props.bg} alt="background"/>
          </div>
        : <div 
          className="bg-black"
          style={{
            width: size.width,
            height: size.width * (1136 / 1920),
          }}><Image src={props.bg} alt="background"/>
          </div>
        }
      </div>
      
      {/* black background area */}
      <div 
        className="absolute bg-black-100 lg:hidden"
        style={{
          width: size.width * (3 / 8),
          height: size.height * 0.98,
        }}
      ></div>
      <div 
        className="absolute bg-black-100 hidden lg:block"
        style={{
          width: size.width * (7 / 24),
          height: size.height * 0.98,
        }}
      ></div>
      <div className="absolute -bottom-4 left-2 md:left-6 w-4 h-4 -rotate-90">
      <span className="inline-block w-max text-mono-r text-xs text-white/20 tracking-wide">
        {props.sideText}
      </span>
      </div>
      

      {/* content area */}
      <div 
        className="relative"
        style={{
          width: size.width,
          height: size.height * 0.9,
        }}
      >{props.children}</div>
    </section>
  )
}

export default PageCover;
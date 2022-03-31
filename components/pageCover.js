import Image from 'next/image';
import {useWindowSize} from '../hooks/useWindowSize'

function PageCover (props) {
  const size = useWindowSize()
  return (
    <div 
      className="relative bg-gray-800"
      style={{
        width: size.width,
        height: size.height * 0.9,
      }}
    >

      <div 
        className="absolute overflow-hidden"
        style={{
          width: size.width,
          height: size.height * 0.9,
        }}
      >
        <div 
          className="bg-black"
          style={{
            width: size.height * 0.9 * (1920 / 1136),
            height: size.height * 0.9,
          }}><Image src={props.bg} alt="background"/></div>
      </div>

      <div 
        className="absolute bg-black-100"
        style={{
          width: size.width * (3 / 8),
          height: size.height,
        }}
      ></div>

      

      <div 
        className="relative"
        style={{
          width: size.width,
          height: size.height * 0.9,
        }}
      >{props.children}</div>
    </div>
  )
}

export default PageCover;
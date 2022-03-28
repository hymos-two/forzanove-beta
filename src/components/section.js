import Image from 'next/image';
import { useWindowSize } from '../hooks/useWindowSize';

export default function (props) {
   const size = useWindowSize();
    return (
      <div className="relative bg-red-500 w-screen h-screen" style={{width: size.width,height: size.height * 0.88}} >
        <div className=" bg-red-500 "></div>
        {/* {props.children} */}
      </div>
    );
  }
import { useWindowSize } from '../hooks/useWindowSize';

export default function (props) {
    const size = useWindowSize();
  
    return (
      <div 
        className="relative bg-blue-400"
        style={{
          width: size.width,
          height: size.height * 0.9,
        }}
      >
      
        <div className="bg-red-500 absolute w-full h-full">
          {/* background */}
        </div>
        <div
          className="bg-black-300 absolute "
          style={{
            width: size.width * (3 / 8),
            height: size.height,
          }}
        ></div>
  
        {props.children}
        
      </div>
    );
  }
import Link from 'next/link'
import Image from 'next/image'

export function Tile (props) {
  const {
    title,
    image,
    target,
    btnText,
    icon,
    className  
  } = props

  return (
    <Link href={target}>
      <div className={`group bg-black-400 hover:bg-accent hover:cursor-pointer ${image?'aspect-[6/13]':'w-full'} ${className}`}>
        
        {image && (
          <div className="relative w-full aspect-[6/8] bg-gray-200">
            <div className="absolute w-full h-full group-hover:bg-black-0/50"></div>
            {/* <Image src={image} alt="cover" placeholder="blur" /> */}
          </div>
        )}
        
        <div className={`${image?'w-full aspect-[6/5]':'w-full h-full'} px-2 sm:px-3.5 pt-5 flex flex-col justify-between text-white group-hover:text-black-0/90`}>
          <div className="w-5/6">
            <h3 className="font-mono-r text-base">{title}</h3>
          </div>
          <div className="w-full flex justify-between opacity-40 group-hover:opacity-90 py-3.5 lg:py-6 ">
            <span className="text-sans text-sm">{btnText}</span>
            {icon && icon}
          </div>
        </div>
        
      </div>
    </Link>
  )
}
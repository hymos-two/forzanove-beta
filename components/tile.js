import Link from 'next/link'

export function Tile (props) {
  const {title,image,target,className} = props

  return (
    <Link href="">
      <div className={`flex flex-col hover:cursor-pointer ${className}`}>
        <div className="w-full aspect-[3/4] bg-gray-200"></div>
        <div className="w-full aspect-[2/1] bg-black-400 px-2 pt-5">
          <div className="w-5/6">
          <h3 className="font-mono-r text-base text-white/80">
            {title}
          </h3>
          </div>
          
        </div>
      </div>
    </Link>
  )
}
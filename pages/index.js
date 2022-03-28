import Image from 'next/image';
import HTMLHead from '../src/components/htmlHead';
import PageCover from '../src/components/pageCover';

import logo from '../public/images/forzanove-logo.png';


export default function Home() {
  return (
    <>
    <HTMLHead title="Forzanove 09" preload />
    <PageCover title="Forzanove 09">
      <div className="relative flex flex-col justify-center w-full h-full">
      <div className="grid grid-cols-8">
        <div className="col-start-2 col-span-6 z-10 flex">

          <div style={{width:76, height:76}}>
          <Image src={logo} alt="logo forzanove" />
          </div>

          <h1 className="text-mono text-20 text-white mt-4">
            Forza
            <br />
            Nove ⸻
          </h1>

        </div>
      </div>
      </div>
    </PageCover>
    </>
  );
}




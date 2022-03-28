//components
import Image from 'next/image';
import Header from '../src/components/header';
import Section from '../src/components/section';
import logo from '../public/images/forzanove-logo.png';
import background from '../public/images/forzanove-bg.png';

export default function Home() {
  return (
    <>
    {/* <Header title="Forzanove 09" preload={false} /> */}
    <Section>
      <div className="flex flex-col justify-center bg-red-500 w-full h-full">
        <div className="grid grid-cols-8">
          <div className="col-start-2 col-span-6 flex">
            <div style={{width:76,height:76}}>
              <Image src={logo} alt="logo" />
            </div>
            <div className="pt-4" >
              <h1 className="text-mono text-20 text-white">
                Forza
                <br />
                Nove ⸻
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Section>
    </>
  );
}




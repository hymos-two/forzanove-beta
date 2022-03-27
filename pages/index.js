//components
import Head from 'next/head';
import Image from 'next/image';

import logo from '../public/images/forzanove-logo.png';
//hooks
import { useWindowSize } from '../src/hooks/useWindowSize';

export default function Home() {
  return (
    <Container title="Forzanove 09">
      <div className="grid grid-cols-8 ">
        <div className="col-start-2 col-span-6 z-10 flex">
          <Image src={logo} height={76} width={76} />
          <h1 className="text-lg text-white">
            Forza
            <br />
            Nove ⸻ok
          </h1>
        </div>
      </div>
    </Container>
  );
}

function Container(props) {
  const size = useWindowSize();

  return (
    <div
      className="font-sans text-white bg-black-100 w-full overflow-scroll"
      style={{ height: size.height - 1 }}
    >
      <Head>
        {/* <link
          rel="preload"
          href="../public/fonts/IBMPlexSans-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="../public/fonts/IBMPlexMono-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="../public/fonts/IBMPlexMono-Medium.ttf"
          as="font"
          crossOrigin=""
        /> */}
        <title>{props.title}</title>
      </Head>

      {/* background */}
      <div className="w-full h-screen absolute bg-[url('../public/images/forzanove-bg.png')] bg-cover bg-center"></div>
      <div
        className="bg-black-100 absolute"
        style={{
          width: (3 / 8) * size.width,
          height: size.height,
        }}
      ></div>

      {props.children}
    </div>
  );
}
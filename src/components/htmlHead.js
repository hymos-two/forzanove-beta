import Head from 'next/head';

export default function (props) {
    const preloadLinks = [
      "../public/fonts/IBMPlexSans-Regular.ttf",
      "../public/fonts/IBMPlexMono-Regular.ttf",
      "../public/fonts/IBMPlexMono-Medium.ttf",
    ]
    return (
      <Head>
        {props.preload && preloadLinks.map((link,i) => (
            <link
              rel="preload"
              href={link}
              as="font"
              crossOrigin=""
              key={i}
            />
          ))
        }
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
        <title>{props.title}</title>
      </Head>
    )
  }
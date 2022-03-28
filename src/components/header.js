import Head from 'next/head';

export default function (props) {
    const links = [
      "../public/fonts/IBMPlexMono-Regular.ttf",
      "../public/fonts/IBMPlexMono-Regular.ttf",
      "../public/fonts/IBMPlexMono-Medium.ttf",
    ]
    return(
      <Head>
        {props.preload && 
          links.map((link,i)=>(
            <link
              rel="preload"
              href={link}
              as="font"
              crossOrigin=""
              key={i}
            />
          ))
        }
        
        <title>{props.title}</title>
      </Head>
    )
  }
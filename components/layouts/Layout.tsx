import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'
import { Navbar } from '../ui';

interface Props {
  title?: string;
}

const origin = (typeof window === 'undefined' ? '' : window.location.origin)

//Similar a hacer FC<PropsWithChildren<Props>>
//porque lo definimos en la interface Props

export const Layout: FC<PropsWithChildren<Props>> = ({children, title}) => {

  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App'}</title>
        <meta name="author" content="cristian gacitua"/>
        <meta name="description" content={`Informacion sobre el pokemon ${title}`}/>
        <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar/>

      <main style={{
        padding: '0 20px'
      }}>
        {children}
      </main>
    </>
  )
}

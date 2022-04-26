import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import About from '../components/about'
import Skills from '../components/skills'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Orr Goren - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <About />
      <Skills />
    </div>
  )
}

export default Home

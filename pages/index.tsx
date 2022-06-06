import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation'

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <div className='text-5xl text-center'><span className='text-themeOrange'>Welcome!</span><br />Glad you're here.</div>
      <div className='flex'>
        <div>I'm Jonathan Maskew.</div>
      </div>
    </div>
  )
}

export default Home

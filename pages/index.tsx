import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation'

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <p className='text-3xl'><span className='text-themeOrange'>Welcome!</span> Glad you're here.</p>
    </div>
  )
}

export default Home

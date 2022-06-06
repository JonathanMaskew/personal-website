import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation'
import headshotImage from '../images/Headshot.jpeg'

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <div className='text-5xl text-center mb-20'>
        <span className='text-themeOrange'>Welcome!</span>
        <br />
        Glad you're here.
      </div>
      <div className='flex'>
        <Image src={headshotImage} alt='Picture of Jonathan Maskew' className='rounded-full' width={363.3} height={363.6}></Image>
        <div>
          <span className='text-themeOrange text-2xl'>I'm Jonathan Maskew.</span>
          <br />
          I'm a junior at Purdue University majoring in Computer Science. This is my personal website to showcase and document stuff about me
          <br />
          Any current or recent Projects, Involvement, Achievements, Courses, etc. will be featured right here on the homepage. Navigating to the respective pages will include everything.
        </div>
      </div>
    </div>
  )
}

export default Home

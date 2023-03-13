import type { NextPage } from 'next'
import Image from 'next/image'
import headshotImage from '../images/Headshot.jpeg'
import Link from 'next/link'
import TimelineEntry from '../components/timelineEntry'

const Home: NextPage = () => {
  return (
    <div className='mx-32'>
      <div className='flex flex-col text-5xl text-center my-20'>
        <span className='text-themeOrange'>Welcome!</span>
        Glad you're here.
      </div>
      <div className='flex gap-x-0 rounded-full p-4 bg-backgroundOrange mb-20'>
        <div className='my-auto p-0 max-w-[178px]'><Image src={headshotImage} alt='Picture of Jonathan Maskew' className='rounded-full'></Image></div>
        <div className='flex flex-col gap-y-4 mr-24 ml-10 w-[4000px]'>
          <div className='flex flex-col'>
            <span className='text-themeOrange text-2xl'><span className='text-black'>My name is</span> Jonathan Maskew<span className='text-black'>.</span></span>
            <span className='text-themeOrange text-2xl'><span className='text-black'>I'm a</span> Computer Science <span className='text-black'> major at</span> Purdue University<span className='text-black'>.</span></span>
          </div>
          <div>
            This is my personal website to showcase and document stuff about me.
            This site is meant to serve as a timeline of my life and can be filtered by time or event.
          </div>
          <button className='bg-themeOrange text-backgroundOrange py-2 rounded-full w-56'><Link href='/about'>Learn more about me...</Link></button>
        </div>
      </div>

      <TimelineEntry />
    </div>
  )
}

export default Home

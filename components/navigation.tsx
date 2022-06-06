import Link from 'next/link'
import React, { Component } from 'react'

type Props = {}

type State = {}

export default class Navigation extends Component<Props, State> {
    state = {}

    render() {
        return (
            <nav className='py-4 border-b-2 border-themeOrange mx-8 mb-20'>
                <div className='flex flex-wrap items-end justify-between mx-6'>
                    <div>Jonathan Maskew</div>

                    <div className='flex flex-wrap'>
                        <span className='mx-4'><Link href='/about'>About</Link></span>
                        <span className='mx-4'><Link href='/projects'>Projects</Link></span>
                        <span className='mx-4'><Link href='/involvement'>Involvement</Link></span>
                        <span className='mx-4'><Link href='/achievements'>Achievements</Link></span>
                        <span className='ml-4'><Link href='/courses'>Courses</Link></span>
                    </div>
                </div>
            </nav>
        )
    }
}
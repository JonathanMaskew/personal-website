import Link from 'next/link'
import React, { Component } from 'react'

type Props = {}

type State = {}

export default class TimelineEntry extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className='bg-backgroundOrange rounded-full py-4 px-10'>
                <div className='flex flex-row'>
                    <div className='basis-1/6'>date</div>
                    <div className='basis-1/2'>title</div>
                    <div className='basis-1/6 text-right'>location</div>
                    <button className='basis-1/6 text-right'>learn more...</button>
                </div>
            </div>
        )
    }
}
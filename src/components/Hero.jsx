import React from 'react'
import video from '../videos/bg.mp4'

const Hero = () => {
    return (
        <>
            <video className='block fixed w-screen min-h-screen min-w-full h-auto object-cover top-0 left-0' autoPlay playsinline loop muted src={video} type='video/mp4'></video>
            <div className='fixed top-0 bottom-0 right-0 left-0 bg-black opacity-60'>
            </div>
        </>
    )
}

export default Hero
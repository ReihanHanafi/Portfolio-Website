import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaGithub, FaInstagram, FaLinkedinIn, FaYoutube} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-center' src="/public/img/Background.png" alt="" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/30">
                <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Halo, Saya Reihan Hanafi</h1>
            <h2 className='flex sm:text-3xl text-2xl text-gray-800'>Saya seorang
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Videographer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Editor',
        1000,
        'Penggemar Teknologi',
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
      repeat={Infinity}
    />
    </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <FaInstagram className='cursor-pointer' size={20}/>
                <FaLinkedinIn className='cursor-pointer' size={20}/>
                <FaYoutube className='cursor-pointer' size={20}/>
                <FaGithub className='cursor-pointer' size={20}/>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Main
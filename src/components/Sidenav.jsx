import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject} from 'react-icons/ai'
import { FaSpotify } from 'react-icons/fa'
const Sidenav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
        {
            nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home</span>
                    </a>
                    <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineProject size={20} />
                        <span className='pl-4'>My Projects</span>
                    </a>
                    <a onClick={handleNav} href="#spotify" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FaSpotify size={20} />
                        <span className='pl-4'>My Spotify Lists</span>
                    </a>
                </div>
            )
            : (
                ''
            )
        }
        <div className="md:block hidden fixed top-[25%] z-10">
            <div className="flex flex-col">
                <a onClick={handleNav} href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineHome size={20}/>
                </a>
                <a onClick={handleNav} href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineProject size={20}/>
                </a>
                <a onClick={handleNav} href="#spotify" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaSpotify size={20}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Sidenav
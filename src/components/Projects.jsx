import React from 'react'
import Projectitem from './Projectitem'
import YoutubeImg from '../assets/Youtube.png'
import InstagramImg from '../assets/Instagram.png'
import PodcastImg from '../assets/Podcast.png'
import AnimasiImg from '../assets/Animasi.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'> Projects</h1>
        <p className='text-center py-8'>
            Sebuah proyek  yang telah saya kerjakan melalui media seperti YouTube, Instagram, Podcast, dan Animasi, Tunggu hasil proyek saya yang akan mendatang! Berikut ini adalah beberapa proyek yang telah saya kerjakan.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <Projectitem img={YoutubeImg} title='YouTube' />
            <Projectitem img={InstagramImg} title='Instagram' />
            <Projectitem img={PodcastImg} title='TRI-PODCAST' />
            <Projectitem img={AnimasiImg} title='Animasi Asa Usua Namo Minangkabau' />

        </div>
    </div>
  )
}

export default Projects
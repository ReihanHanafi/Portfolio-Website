import React from 'react'

const Spotify = () => {
  return (
    <div id='spotify' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Playlist Favoritku</h1>
        <p className='text-center py-5'>
            
        </p>
        <div className='flex justify-center'>
        <iframe title='spotify-playlist' src='https://open.spotify.com/embed/playlist/6q5ohabUsVXTApOgX6du9J?utm_source=generator' width="100%" height="352" frameborder='0' allowfullscreen="" allow="autoplay clipboard-white encrypted-media fullscreen picture-in-picture" loading='lazy'></iframe>
      </div>
    </div>
  )
}

export default Spotify
import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-44 mx-20 flex flex-col gap-10 absolute'>
        <div className='flex flex-col gap-10'>
        <h1 className='font-extrabold text-5xl text-white'>{title}</h1>
        <p className='font-semibold text-2xl w-3/6 text-white'>{overview}</p>
        </div>
        <div className='flex gap-5'>
            <button className='py-3 w-32 bg-gray-600 text-xl text-white font-semibold bg-opacity-50'> Play</button>
            <button className='py-3 w-32 bg-gray-600 text-xl text-white font-semibold bg-opacity-50'>More</button>
        </div>
        
    </div>
  )
}

export default VideoTitle
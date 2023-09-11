import React from 'react'
import { CDN_IMAGE_URL } from '../utils/constants'

const SuggestedMovieCard = ({posterPath}) => {
  return (
    <div className='p-3 w-40'>
        <div className=''>
        <img src={CDN_IMAGE_URL+posterPath} alt="" className='w-48'/>
    </div>
    </div>
  )
}

export default SuggestedMovieCard
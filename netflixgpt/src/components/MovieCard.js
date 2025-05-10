import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-24'>
      <img src={IMG_CDN+poster_path} alt="movie logo" />
    </div>
  )
}

export default MovieCard

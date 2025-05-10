import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import {addMovieTrailer} from "../utils/movieSlice";
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {

  const trailerKey = useSelector(store=>store.movies?.trailerVideo)
 useMovieTrailer(movieId);

  return (
    <div><iframe  
    className='w-screen h-screen aspect-video'
    src={`https://www.youtube.com/embed/${trailerKey?.key}?&autoplay=1&mute=1&controls=0&modestbranding=0&rel=0&showinfo=0`}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin"></iframe></div>
  )
}

export default VideoBackground

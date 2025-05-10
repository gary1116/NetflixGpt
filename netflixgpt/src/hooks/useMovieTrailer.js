import React from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { addMovieTrailer } from '../utils/movieSlice';

//fetch movie trailer and update the store with trailer video data
const useMovieTrailer = (movieId) => {

     const dispatch = useDispatch();
    
      const getMovieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
        const json = await data.json();
        const filterData = json.results.filter(video => video.type === "Trailer");
        const trailer = filterData.length == 0 ? filterData[0] : json.results[0];
         dispatch(addMovieTrailer(trailer));
      }
      //to call the api once when its reloaded
      useEffect(() => {
        getMovieVideo();
      }, [])
}

export default useMovieTrailer;

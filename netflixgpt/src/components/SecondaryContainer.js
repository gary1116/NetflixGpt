import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies);
  if(movies==null)return;
  // console.log(movies);

  return (
    <div className=' bg-black'>
      <div className="-mt-40 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>

      </div>
    </div>
  )
}

export default SecondaryContainer

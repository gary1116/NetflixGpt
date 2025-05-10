import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    if(movies==null)return;
    // console.log(movies)
  return (
    <div className="bg-black">
            <h1 className=' text-white text-3xl'>{title}</h1>
        <div className="flex overflow-x-scroll p-6 bg-black scrollbar-hide">
            <div className="flex gap-3">
            {movies.map(movie=> <MovieCard key={movie.id} poster_path={movie.poster_path}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList

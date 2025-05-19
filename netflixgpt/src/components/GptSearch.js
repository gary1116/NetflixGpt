import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import background from "../utils/images/background.jpg"


const GptSearch = () => {
  return (
    <div>
      <div className="absolute h-screen w-screen">
        <img src={background} alt="background image" className='h-full w-full object-cover' />   
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch

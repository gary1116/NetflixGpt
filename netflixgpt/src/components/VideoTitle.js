import React from 'react'
import info from  "../utils/images/info.png";
import Play from "../utils/images/play-button.png";

const VideoTitle = ({original_title, overview}) => {
  return (
    <div className='absolute w-screen pt-[10%] px-18'>
      <div className="flex flex-col pt-36 px-12">
      <h1 className='text-5xl font-bold text-white'>{original_title}</h1>
      <p className='py-5 text-lg w-1/2 text-white'>{overview}</p>
      </div>
      <div className=" flex gap-3 px-12 p-4">
      <button className='flex items-center gap-1 border-2 p-2 hover:bg-opacity-20 hover:text-white bg-white text-xs rounded-md'><img className='w-6' src={Play} alt="Play image" /> Play</button>
      <button className='flex items-center gap-1 border-2 p-2 bg-gray-400 hover:bg-opacity-40 hover:text-black text-white text-xs rounded-md max-w-28'><img className='w-6' src={info} alt="info image" /> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle

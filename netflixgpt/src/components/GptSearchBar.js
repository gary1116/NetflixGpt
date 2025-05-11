import React from 'react'
import Search from "../utils/images/search.png";

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center items-center h-screen relative'>
      <form className="w-1/2 grid grid-cols-12 bg-zinc-600 absolute">
        <input type="text" className='p-4 col-span-8 rounded-lg m-4'  placeholder='what do you want to see today?' />
        <button className='flex items-center gap-1 border-2 rounded-lg col-span-4 bg-rose-600 p-2 m-4 text-white'><img className='w-4' src={Search} alt="search logo" />Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar

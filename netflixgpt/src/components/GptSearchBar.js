import React from 'react'
import Search from "../utils/images/search.png";
import { lang } from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langKey = useSelector(store=>store.config.lang);

    console.log(lang[langKey]?.placeholder);
    console.log(lang[langKey]?.search);

  return (
    <div className='pt-[10%] flex justify-center items-center h-screen relative'>
      <form className="w-1/2 flex backdrop-blur-md rounded-md absolute">
        <input type="text" className=' w-[75%] p-4  rounded-lg m-4'  placeholder={lang[langKey]?.gptSearchPlaceHolder || "Search..."} />
        <button className='flex items-center border-2 rounded-lg w-[25%] bg-rose-600 p-2 m-4 text-white'><img className='w-4' src={Search} alt="search logo" />{lang[langKey]?.search || "Search"}</button>
      </form>
    </div>
  )
}

export default GptSearchBar

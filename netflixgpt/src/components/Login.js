import React from 'react'
import Header from './Header'
import background from '../utils/images/background.jpg'
const Login = () => {
  return (
    <div className="">
    <div className='h-screen relative'>
      <Header />
      <img src={background} alt="background image" className='h-full w-full object-cover'/>
    </div>
    <form action="" method="get" className='flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-8 border-double border-gray-400 hover:border-gray-600  bg-black bg-opacity-70 p-10'>
        <h1 className='font-bold text-white'>Sign-In</h1>
        <input type="text" placeholder='Email Address' className=' p-2 m-2  w-64 rounded-lg'/>
        <input type="password" placeholder='password' className='p-2 m-2  w-64 rounded-lg'/>
        <button className='p-2 m-2 bg-red-600 text-white rounded-lg'>Sign-In</button>
        <p className='text-white p-5'>New to netflixGpt? Sign Up Now</p>
    </form>
    </div>
  ) 
}

export default Login

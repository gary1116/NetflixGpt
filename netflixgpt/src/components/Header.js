import React from 'react'
import Logo from '../utils/images/Logo.png';

const Header = () => {
  return (
    <div className='absolute px-8 py-2'>
      <img src={Logo} alt="Logo" className='w-44'/>
    </div>
  )
}

export default Header

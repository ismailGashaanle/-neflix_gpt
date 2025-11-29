

import React from 'react'

import { neflix_logo } from '../utils/Constant'
const Header = () => {
  return (
    <div className='px-8 py-2 absolute w-full bg-gradient-to-b from-black z-50'>
     <div className=''>  <img className="bg-opacity-85 w-40"   src={neflix_logo} /></div>
    </div>
  )
}

export default Header

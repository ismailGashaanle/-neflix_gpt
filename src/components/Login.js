

import React, { useState } from 'react'
 
import Header from './Header'
import { neflix_bg } from '../utils/Constant'

const Login = () => {
    const [isSignInForm, setisSignInForm]=useState(true);

    const ToggleSignInForm=()=>{
          setisSignInForm(!isSignInForm);
    }
  return (
    <div className="relative">
        <Header/>
  

      <img className='h-full object-cover w-full' src={neflix_bg} />


  
          <form className='bg-black  p-8 bg-opacity-85  rounded-lg  absolute top-40 mx-auto left-0 right-0 w-11/12 xl:w-4/12 lg:w-4/12 md:w-6/12 sm:w-6/12 flex flex-col gap-4  text-white'>
        <span className='font-bold text-3xl my-4  font-serif'> {isSignInForm?"Sign In":"Sign Up"}   </span>

      {
        !isSignInForm&&(
              <input className='py-4 w-full px-4 rounded-sm bg-transparent text-white border-gray-400  border' type='text' placeholder='Fullname'/>
        )
      }

        <input className='py-4 w-full px-4 rounded-sm bg-transparent text-white border-gray-400  border' type='text' placeholder='Enter Email or mobile number'/>
        <input className='py-4 w-full px-4  rounded-sm bg-transparent text-white border-gray-400  border' type='password' placeholder='password'/>
        <button type='button' w-full className='bg-red-600 cursor-pointer  text-white py-3 px-4 rounded-lg font-bold'>  {isSignInForm?"Sign in":"Sign Up"} </button>
        
        
      {isSignInForm?(
          <p className='my-6'> <span className='text-gray-300'>New to Netflix?  </span>


         <span className='font-bold cursor-pointer text-lg hover:underline'
         onClick={ToggleSignInForm}
         
         > Sign In now</span>.
         </p>
      ):(
          <p className='my-6'> <span className='text-gray-300'>All Ready Registered  </span>


         <span className='font-bold cursor-pointer text-lg hover:underline'
         onClick={ToggleSignInForm}
         
         > Sign up now</span>.
         </p>
      )}
      </form>
    </div>
   
    
  )
}

export default Login

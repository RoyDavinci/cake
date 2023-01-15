import React from 'react';
import {FaEye} from "react-icons/fa";
import google from '../image/google.png';
import { Link } from 'react-router-dom';


function Logindetails() {
  return (
    
        <div className='flex md:justify-between bg-rose-200 w-full h-screen '>
          
          <div className='md:p-18 md:m-20 pt-32 mr-10'>
            <h1 className='text-center -mt-24 font-sans text-3xl text-[#203990] ml-24 font-bold'>Welcome to Happy Taste Bakery</h1>
            <p className='text-sm ml-14 text-center text-[#203990] mt-4 pb-24'>We create tastes that make happy moments and experiences</p>
          
              <img src={google} alt='' className='relative md:ml-72 ml-44 -mt-6 -mb-7 w-5'/>
            <input type='text' className='w-72 h-10 md:ml-96 ml-24 border-solid border-2 bg-gray-300 rounded-md   mr-8'/>
            <p className='text-xs md:ml-96 ml-52 font-medium -mt-8'>Login with Google</p>
            <hr className='bg-gray-500 relative w-32 md:ml-44 ml-24 mt-14'></hr>
            <p className='text-gray-400 pt-14 text-xs text-center -mt-16 md:-ml-3 ml-10 '>or</p>
            <hr className='bg-gray-500 relative w-32 md:ml-80 ml-64 -mt-2 '></hr>
            <input className='w-72 h-10 md:ml-44 ml-24 border-solid border-2 mt-12 rounded-md px-4 text-xs  'type='text' placeholder='Enter email address'/>
            <input className='w-72 h-10 md:ml-44 ml-24 border-solid border-2 mt-8 rounded-md px-4 text-xs  'type='text' placeholder='Enter password'/>
            <FaEye className='relative md:ml-96 ml-80  -mt-7 text-gray-400'/>
            <input type='text' className='w-72 h-10 md:ml-44 ml-24 border-solid border-2 bg-[#053161] rounded-md mt-12  mr-4'/>
            <p className='text-xs md:ml-72 ml-56 font-medium -mt-8 text-white'>Login</p>
            <p className='mt-14 md:mr-8 ml-14 text-center text-xs text-gray-500'>Don't have an account?<Link to= '/signup'className='text-[#FF6A34] font-bold text-xs ml-1'>Create Account</Link></p>
          </div>
          </div>
        
    
  )
}

export default Logindetails

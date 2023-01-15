import React from 'react'
import {FaLocationArrow} from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function contactmain() {
  return (
    <div className=' h-screen w-full'>
      
        <h1 className='text-center text-4xl font-semibold italic p-10 mb-6 font-serif border-2 text-rose-500 border-black bg-white border-dashed w-full h-32'>Contact Us</h1>
        <h1 className='text-center text-4xl font-semibold italic p-5 m-3 font-mono text-rose-500'>Our Branches</h1>
        <div className='flex justify-evenly mx-14'>
        <div>
          <FaLocationArrow className='m-6 text-rose-500 '/>
        <p className='ml-6 text-black text-lg font-bold italic font-serif'>Osogbo, Osun State</p>
        <p className='ml-6 text-black text-lg font-bold italic font-serif'>30, Ajibade street,</p>
        <p className='ml-6 text-black text-lg font-bold italic font-serif'>Olonkoro, Osogbo</p>
        <p className='ml-6 text-black text-lg font-bold italic font-serif'>Osun State.</p>
        </div>
        <div>
          <FaLocationArrow className='m-6 text-rose-500'/>
        <p className='ml-6 text-black text-lg font-bold italic font-serif'>Surulere, Lagos State</p>
        <p className='ml-6 text-black text-lg font-bold italic font-serif'>8, Associaton street,</p>
        <p className='ml-6 text-black text-lg font-bold italic font-serif'>Ijeshatedo, Surulere</p>
        <p className='ml-6 text-black text-lg font-bold italic font-serif'>Lagos State.</p>
        </div>
        <div>
          <FaLocationArrow className='m-6 text-rose-500 '/>
        <p className='ml-6 text-black text-lg font-bold italic font-serif'>Ota, Ogun State</p>
        <p className='ml-6 text-black text-lg font-bold italic font-serif'>Destiny Avenue,</p>
        <p className='ml-6 text-black text-lg font-bold italic font-serif'>Attan, Ota</p>
        <p className='ml-6 text-blacktext-lg font-bold italic font-serif'>Ogun State.</p>
        </div>
        </div>
        <div className='flex mt-6 p-10 justify-evenly text-4xl '>
        <Link to= '/twitter.happytastebakery'><FaTwitter className='m-6 text-rose-500 hover:text-black'/></Link>
        <Link to= '/fb.happytastebakery'><FaFacebook className='m-6 text-rose-500 hover:text-black'/></Link>
<Link to= '/ig.happytastebakery'><FaInstagram className='m-6 text-rose-500 hover:text-black'/></Link>
<Link to= '/youtube.happytastebakery'><FaYoutube className='m-6 text-rose-500 hover:text-black'/></Link>
</div>
    </div>
  )
}

export default contactmain
import React from 'react';
import founder from '../image/founder.jpg';

function Aboutmain() {
  return (
<div className='h-vh w-full'>
<h1 className='text-center text-4xl font-semibold italic p-10 font-serif border-2 text-rose-500 border-black bg-white border-dashed w-full h-32'>About</h1>
<h2 className='text-3xl font-medium mt-8 ml-6 font-mono'>We are Happy Taste Bakery, The Best Bakery in Nigeria</h2>
<p className='mt-6 text-justify font-serif text-sm font-medium ml-6 mr-6'>Happy Taste Bakery has been making great bakery products for many years. We make tasty cakes, mouth-watering pastries, and a variety of bread. Our products are made fresh daily, crafted by hand, and made with love. Exceptional customer service is at the heart of what we do which is why our lovely customers refer to us as the best bakery in Nigeria.
We are a bakery manufacturing company with a chain of retail bakery shops. Our growth is attributed to the hard work and dedication of each member of the Happy Taste Bakery family.</p>
  <p className='font-medium text-justify font-serif  text-sm m-6'><span className='font-bold text-justify italic text-lg text-rose-500'>Our Vision:</span> To be the first choice of consumers in Africa and create a benchmark in quality standards in the bakery industry.</p>
<p className='font-medium text-justify font-serif  text-sm m-6'><span className='font-bold text-justify italic text-lg text-rose-500'>Our Mission:</span> We create tastes that make happy moments and experiences.</p>
<h1 className='text-justify text-xl font-semibold mt-6 ml-6 italic text-rose-500 font-serif '>Positioning Statement</h1>
<p className='font-medium text-justify font-serif text-sm mt-3 ml-6 mr-6'>For quality-conscious individuals who need dependable service and bakery products. Happy Taste Bakery is a one-stop shop that provides a variety of premium products that create memorable moments and experiences. Unlike other bakeries, we offer quality products and excellent customer services at affordable prices, and we remain the best bakery in Nigeria.</p> 
 <h1 className='text-justify text-xl font-semibold mt-6 ml-6 italic text-rose-500 font-serif '>The Founder</h1>
 <img className="w-40 mt-3 ml-6"src ={founder} alt='owner'/>
 <p className='font-medium text-justify font-serif  text-sm m-6'>Happy Taste Bakery was founded in 2019 when Oluwatosin Oladele turned her passion for baking into a business. Over the years, the business has grown from a bakery with just a few products, to one producing a wide variety of products, and has still been able to hold on to its original ethos of using only the finest ingredients in baking. Thus, whether you’re looking for an extra special birthday or wedding cake, a cheesecake to top off a dinner party, or just fancy some office treats, we’re ready to spice up your day.</p>
 <h1 className='text-justify text-2xl font-semibold mt-6 ml-6 mb-10 italic text-rose-500 font-serif'>Happy Taste Bakery is your  number one shop for bakery products on the go.</h1>
 </div>
  )
}

export default Aboutmain
import React from 'react';
import cake from '../cake';
import drink from '../drink';
import pastries from '../pastries';
import { FaCartPlus } from 'react-icons/fa';



function Main () {
  
  return (
    <div className="block bg-rose-300 h-vh w-full">
       <h1 className="font-bold text-[#203990] text-center font-serif text-4xl mt-6 mb-2 ">Welcome to Happy Taste Bakery</h1>
       <p className="font-semibold text-[#203990] text-center font-mono text-lg ">Days: Mondays - Saturdays</p>
       <p className="font-semibold text-[#203990] text-center font-mono text-sm">Hours:8:00a.m - 6:00p.m</p>
       <p className="font-semibold text-[#203990] text-center font-mono text-xs">Nigeria</p>
       <div className='-mt-10'>
                <h3 className='font-bold text-2xl mt-10 ml-6 mb-2 text-[#203990] font-mono'>Pastries </h3>
                <div className=' flex justify-around'>{pastries.map((pastries) =>{
                    return (
                      <div className='bg-white border solid rounded-md border-white m-2 p-1 w-44'>
                        <img src={pastries.url} alt={pastries.name} className='hover:translate-y-4 mb-3'/>
                        <p className='text-black text-center font-mono text-sm font-semibold mb-1'>{pastries.name}</p>
                        <p className='text-base text-center font-bold font-mono mb-1'>{pastries.price}</p>
                       <button className='bg-[#203990] text-white border solid rounded-md text-xs ml-2 px-10 py-3 cursor-pointer'>Add to Cart</button>
                        <FaCartPlus className='ml-28 -mt-7 mb-5 text-white'/>
                      </div>
                    )    
                })}
			</div>
      <h3 className='font-bold text-2xl mt-5 ml-6 mb-2 text-[#203990] font-mono'>Cakes</h3>
      <div className=' flex justify-around'>{cake.map((cake) =>{
                    return (
                      <div className='bg-white border solid rounded-md border-white m-2 p-1 w-44'>
                        <img src={cake.url} alt={cake.name} className='hover:translate-y-2 mb-5'/>
                        <p className='text-black text-center font-mono text-sm font-semibold'>{cake.name}</p>
                        <p className='text-base text-center font-bold font-mono'>{cake.price}</p>
                        <button className='bg-[#203990] text-white border solid rounded-md text-xs text-left ml-2 px-10 py-3 cursor-pointer'>Add to Cart</button>
                        <FaCartPlus className='ml-28 -mt-7 mb-5 text-white'/>
                      </div>
                    )    
                })}
			</div>
      <h3 className='font-bold text-2xl mt-5 ml-6 mb-2 text-[#203990] font-mono'>Drinks</h3>
      <div className=' flex justify-around mb-10'>{drink.map((drink) =>{
                    return (
                      <div className='bg-white border solid rounded-md border-white m-2 p-1 w-44'>
                        <img src={drink.url} alt={drink.name} className='hover:translate-y-2 mb-5'/>
                        <p className='text-black text-center font-mono text-sm font-semibold'>{drink.name}</p>
                        <p className='text-base text-center font-bold font-mono'>{drink.price}</p>
                        <button className='bg-[#203990] text-white border solid rounded-md text-xs text-left ml-2 px-10 py-3  cursor-pointer'>Add to Cart</button>
                        <FaCartPlus className='ml-28 -mt-7 mb-5 text-white'/>
                      </div>
                    )    
                    
                })}
              </div>
    </div>
  
    </div>
  )
}


export default Main
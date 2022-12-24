import React from 'react';
import pastries from "../pastries";
import cake from '../cake';
import drink from '../drink';

function Main() {
  return (
    <div className="block bg-rose-500 h-vh w-full">
       <h1 className="font-bold text-[#203990] text-center font-serif text-4xl mt-6 mb-2 ">Welcome to Happy Taste Bakery</h1>
       <p className="font-semibold text-[#203990] text-center font-mono text-lg ">Days: Mondays - Saturdays</p>
       <p className="font-semibold text-[#203990] text-center font-mono text-sm">Hours:8:00a.m - 6:00p.m</p>
       <p className="font-semibold text-[#203990] text-center font-mono text-xs">Nigeria</p>
       <div className='-mt-10'>
                <h3 className='font-bold text-xl mt-10 ml-6 mb-2 text-[#203990] font-mono'>Pastries </h3>
                <div className=' flex justify-around'>{pastries.map((item) =>{
                    return <img src={item.url} key={item.id}  alt={item.name} name={item.name} price={item.price}/>
                })}
			</div>
      <h3 className='font-bold text-xl mt-3 ml-6 mb-2 text-[#203990] font-mono'>Cakes</h3>
      <div className=' flex justify-around'>{cake.map((item) =>{
                    return <img src={item.url} key={item.id}  alt={item.name} name={item.name} price={item.price}/>
                })}
			</div>
      <h3 className='font-bold text-xl mt-3 ml-6 mb-2 text-[#203990] font-mono'>Drinks</h3>
      <div className=' flex justify-around'>{drink.map((item) =>{
                    return <img src={item.url} key={item.id}  alt={item.name} name={item.name} price={item.price}/>
                })}
			</div>
    </div>
  
    </div>
  )
}


export default Main
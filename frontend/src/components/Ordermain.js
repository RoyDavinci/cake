import React from 'react'
import cake from '../image/cake1.png';
import pastrry from '../image/cookies.png';
import pastry from '../image/pie.png';
import cakes from '../image/cake4.png';
import caake from '../image/cake2.png';

function ordermain() {
  return (
    <div className=' h-vh w-full'>
        <h1 className='font-black ml-20 mt-5 text-2xl font-serif border-b-2 w-20 border-rose-500 border-solid'>CART</h1>
        <div className='flex'>
            <div className='bg-rose-500 w-3/6 h-4/5 mt-8 ml-20'><br></br>
            <p className=' ml-40 mt-6 text-black font-bold'>Butter Cream <span className='ml-10'>$20.00</span><button className='ml-8'> - </button><button className='w-10 bg-white text-black ml-4'> 0</button><button className='ml-6'>+</button><button className='ml-20'>X</button></p>
            <img className='w-20 -mt-12 ml-4 rounded-full' src={cake} alt="cake"/>
            <p className=' ml-40 mt-8 text-black font-bold'>French Roll <span className='ml-14'>$10.00</span><button className='ml-8'> - </button><button className='w-10 bg-white text-black ml-4'> 0</button><button className='ml-6'>+</button><button className='ml-20'>X</button></p>
            <img className='w-20 -mt-8 ml-4 rounded-full' src={pastry} alt="cake"/>
            <p className=' ml-40 mt-6 text-black font-bold'>Choco Cream <span className='ml-10'>$20.00</span><button className='ml-8'> - </button><button className='w-10 bg-white text-black ml-4'> 0</button><button className='ml-6'>+</button><button className='ml-20'>X</button></p>
            <img className='w-20 -mt-8 ml-4 rounded-full' src={cakes} alt="cake"/>
            <p className=' ml-40 mt-6 text-black font-bold'>Cookies <span className='ml-20'>$10.00</span><button className='ml-8'> - </button><button className='w-10 bg-white text-black ml-4'> 0</button><button className='ml-6'>+</button><button className='ml-20'>X</button></p>
            <img className='w-20 -mt-8 ml-4 rounded-full' src={pastrry} alt="cake"/>
            <p className=' ml-40 mt-6 text-black font-bold'>Strawberry <span className='ml-14'>$20.00</span><button className='ml-8'> - </button><button className='w-10 bg-white text-black ml-4'> 0</button><button className='ml-6'>+</button><button className='ml-20'>X</button></p>
            <img className='w-20 -mt-8 ml-4 rounded-full' src={caake} alt="cake"/>
            </div>
            <div className='inline w-96 h-4/5'>
            <div className='bg-rose-500  mt-8 ml-14'><br></br>
                <h1 className="font-black text-2xl font-serif -mb-6 ml-5">Your Subtotal</h1>
                <h3 className='mt-10 ml-5 font-semibold text-lg mb-2'>Subtotal <span className='ml-5 text-base'>$80.00</span></h3>
                <button className="bg-black text-white text-center mt-5 px-16 py-2 ml-7 text-lg mb-5">Confrim Order</button>
                </div>
                <div className='bg-white ml-14 border-solid border-rose-500 border-2'>
                    <h1 className="mt-4 ml-5 text-2xl font-semibold">Promo Code</h1>
                    <button  className="bg-white text-black border-solid border-2 mt-5 border-rose-500 text-center px-16 py-2 ml-5 text-md mb-2" >enter promo code</button>
                    <button className="bg-white text-black border-solid border-2 mt-5 border-rose-500 text-center px-14 py-2 ml-5 text-md mb-7">re-enter promo code</button>
                    <button className="bg-black text-white text-center px-6 py-3 mt-4 ml-5 text-md mb-6">Apply</button>
                </div>
            </div>
            </div>
        </div>
    
  )
}

export default ordermain
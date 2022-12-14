import React from 'react'
import logo from "../image/logo.png";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="block  bg-black w-40 h-vh ">
        <img className="m-auto mt-6 p-6 "src={logo} alt="logo"/>
        <ul className="list-none mt-6 p-3 w-40  ">
            <li> <Link to= '/' className="text-sm ml-6 text-white font-bold p-4 hover:text-rose-500">HOME</Link></li><br></br>
            <li> <Link to= '/order' className="text-sm ml-6 text-white font-bold p-4 hover:text-rose-500">ORDER</Link></li><br></br>
            <li> <Link to= '/aboutus' className="text-sm ml-4 text-white text-center font-bold p-4 hover:text-rose-500">ABOUT US</Link></li><br></br>
            <li> <Link to= 'contactus' className="text-sm ml-2 text-white text-center font-bold p-3 hover:text-rose-500">CONTACT US</Link></li>
        </ul>

    </div>
  )
}

export default Nav
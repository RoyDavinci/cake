import React, {useState} from 'react'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import cake from './cake';


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const handleAddCake = (cake) => {
    const cakeExist = cartItems.find((cake) => cake.id === cake.id);
    if(cakeExist){
      setCartItems(cartItems.map((cake) => cake.id === cake.id ?
      {...cakeExist, quantity: cakeExist.quantity + 1}: cake)
    );
  } else{
    setCartItems([...cartItems, {cake: 1 }])

  }
  }
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<cartItems Cart/>} handleAddCake={handleAddCake}/>
      <Route path='/aboutus' element={<About Us/>}/>
      <Route path='/contactus' element={<Contact Us/>}/>
      <Route path='/ig.happytastebakery'element={<FaInstagram/>}/>
      <Route path='/twitter.happytastebakery'element={<FaTwitter/>}/>
      <Route path='/youtube.happytastebakery'element={<FaYoutube/>}/>
      <Route path='/fb.happytastebakery'element={<FaFacebook/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
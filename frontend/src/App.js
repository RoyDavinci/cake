import React from 'react'
import Home from './Pages/Home';
import Order from './Pages/Order';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/aboutus' element={<About Us/>}/>
      <Route path='/contactus' element={<Contact Us/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
import React from 'react'
import Nav from '../components/Nav';
import Main from '../components/Main';


function Home() {
  return (
    <div className="flex overflow-hidden">
        <Nav/>
        <Main/>
    </div>
  )
}

export default Home
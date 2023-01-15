import React from 'react'
import Nav from '../components/Nav'
import Logindetails from '../components/Logindetails'

function Login() {
  return (
    <div className="flex overflow-hidden">
        <Nav/>
        <Logindetails/>
    </div>
  )
}

export default Login
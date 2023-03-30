import React from 'react'
import NavBar  from './NavBar';

function AboutUs() {
  return (
    <div>
        <NavBar/>
    <div className="App">
      <h1>Welcome to About Us page</h1>
    </div>
    </div>
  )
}

function Login() {
  return (
    <div>
    <NavBar/>
<div className="App">
  <h1>Welcome to Login page</h1>
</div>
</div>
  )
}

function Register() {
    return (
      <div>
          <NavBar/>
      <div className="App">
        <h1>Welcome to Registration page</h1>
      </div>
      </div>
    )
  }

export {AboutUs, Register, Login}

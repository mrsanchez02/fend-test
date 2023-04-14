import React from 'react'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <nav className='px-14 flex flex-row justify-between border-b-2 fixed w-screen'>
      <div className='navbar__logo'>
        <img src={logo} alt="logo" width={250}/>
      </div>
      <div className='navbar__navigation flex items-center'>
        <div className='navbar__links text-white border-r-2 px-4'>
          <a href="#Home" className='px-2'>Home</a>
          <a href="#Home" className='px-2'>About us</a>
          <a href="#Home" className='px-2'>Services</a>
          <a href="#Home" className='px-2'>Contact</a>
        </div>
        <div className='navbar__buttons flex justify-between px-4'>
          <button className='text-white px-2 py-1 border-2 rounded-md bg-blue-400 m-4'>Sign In</button>
          <button className='text-white px-2 py-1 border-2 rounded-md bg-transparent m-4'>Sing Up</button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
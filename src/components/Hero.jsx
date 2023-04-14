import React from 'react'
import heroImage from '../assets/react.svg'
// import heroImage from '../assets/Mask Group 134.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='flex justify-end items-center h-screen hero-custom px-4'>
      <div className='hero_right w-1/5 mr-48'>
        <h1 className='text-white text-3xl border-b-2 border-yellow-600'>Buying Bitcoin has never been easier</h1>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet placeat sapiente quidem repudiandae pariatur laborum autem eligendi corporis accusantium debitis nostrum magni aperiam, eaque sint!</p>
      </div>
    </div>
  )
}

export default Hero
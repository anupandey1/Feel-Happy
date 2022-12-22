import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import bmi from '../assets/bmi.png';
import weather from '../assets/weather.png';
import giggles from '../assets/giggles.png';
function landing() {
  return (
    <div className=' home font-sans md:font-bold '>
        <div className='flex flex-col'>
          <div className='flex md:flex-row flex-col'>
            <img src={bmi} className='ml-20'/>
            <div className='m-28 text-4xl '>
            <p className='my-3'>Sad! thinking</p>
            <p> you are Overweight :'?</p>
            <p className='do text-xl font-normal my-10'>_have a quick <Link to='/bmi'><span className='text-cyan-600'>BMI</span></Link> check_</p>
            </div>
          </div>
          <div className='flex md:flex-row flex-col'>
          <div className='m-24 text-4xl '>
            <p className='my-3'>Wanna Go</p>
            <p>for A trip out of city ;)</p>
            <p className='do text-xl font-normal my-10'>_click <a href="https://anupandey1.github.io/Atmos/"><span className='text-cyan-600'>ATMOS</span></a> for weather info_</p>
          </div>
            <img src={weather} className='ml-20 md:ml-48 w-72 h-64'/>
          </div>
          <div className='flex md:flex-row flex-col'>
            <img src={giggles} className='ml-10 md:ml-20 w-80 h-80'/>
            <div className='m-28 ml-24 md:ml-56 text-4xl'>
            <p className='my-3'>Come!</p>
            <p>Let’s LAUGH together :)</p>
            <p className='do text-xl font-normal my-10'>_click <Link to='/jokes'><span className='text-cyan-600'>GIGGLES</span></Link> ,haha.._</p>
            </div>
          </div>
          </div>
    </div>
  )
}

export default landing
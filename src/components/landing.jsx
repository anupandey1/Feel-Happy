import React from 'react'
import '../App.css';
function landing() {
  return (
    <div>
      {/* <ul>
       <li><a href="#">Home</a></li>
       <li> <a href="/">BMI</a></li>
       <li> <a href="#">ATMOS</a></li>
       <li> <a href="#">GIGGLES</a></li>
       </ul> */}
        <p>Hola friends! </p>
        <p> You are on my Feel-Happy website:) </p>
        <div className='text-pink-700 md:text-5xl text-3xl text-center'>Are U sad cuz u think u r overweight :'?</div>
        <div className='sol'>_have a quick BMI check_</div>
        <div className='text-pink-700 md:text-5xl text-3xl text-center'>Wanna go for a trip out of city ;)</div>
        <div className='sol'>_check ATMOS fr weather info_</div>
        <div className='text-pink-700 md:text-5xl text-3xl text-center'>Have a good laugh </div>
        <div className='sol'>_giggles_</div>
    </div>
  )
}

export default landing
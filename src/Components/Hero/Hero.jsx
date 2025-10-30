import React from 'react'
import "./Hero.css"
import darkarrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
   <>
   <div className='hero container'>
    <div className="herotext">
        <h1>We ensure Better Education forr a better world </h1>
        <p>Our cutting-edge curriculum is designed to empower student with the knowledge ,skills and experience needed to excel in then dynamic field of education </p>
        
        <button className='btn'>Explore more <img src={darkarrow}  /></button>
    </div>

   </div>
   
   
   </>
  )
}

export default Hero

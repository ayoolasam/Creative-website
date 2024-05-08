import React from 'react'
import './Hero.css'
import hero from '../../Assets/Frame 1000007988.jpg'

const Hero = () => {
  return (
    <div class="herobox">
<img class="hero-image" src={hero} alt="hero-image"/>
    </div>
  )
}

export default Hero
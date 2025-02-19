import React from 'react'
import HeroSection from '../components/Shop/HeroSection'
import About from '../components/AboutUs/About'
import JoinUs from '../components/AboutUs/JoinUs'

const Aboutus = () => {
  return (
    <div>
        <HeroSection title="ABOUT US" subtitle="HOME > ABOUT US" />
        <About />
        <JoinUs />
        
    </div>
  )
}

export default Aboutus
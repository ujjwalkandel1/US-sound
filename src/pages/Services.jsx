import React from 'react'
import ServicesSection from '../components/Services/ServicesSection'
import FeatureSection from '../components/Services/FeactureSection'
import HeroSection from '../components/Shop/HeroSection'

const Services = () => {
  return (
    <div>
      <HeroSection title="OUR SERVICES" subtitle="HOME > SERVICES" />
      <ServicesSection />
      <FeatureSection />
    </div>
  )
}

export default Services
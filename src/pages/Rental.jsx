import React from 'react'
import HeroSection from '../components/Shop/HeroSection'
import EventPackages from '../components/Rental/EventPackages'
import EquipmentRental from '../components/Rental/Equipment/EquipmentRental'
import EquipmentImage from '../components/Rental/Equipment/EquipmemtImage'

const Rental = () => {
  return (
    <div>
        <HeroSection title="PACKAGES" subtitle="PACKAGES > SHOP" />
        {/* <EventPackages /> */}
        <EquipmentRental />
        <EquipmentImage />
    </div>
  )
}

export default Rental
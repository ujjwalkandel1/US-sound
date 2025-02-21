import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Shops from '../pages/Shops'
import Rental from '../pages/Rental'
import Services from '../pages/Services'
import Aboutus from '../pages/Aboutus'
import Contactus from '../pages/Contactus'




const Router = () => {
  return (
    <Routes>
         <Route path="/" element={<Home/>}/>/
         <Route path="/shop" element={<Shops/>}/> 
         <Route path="/rental" element={<Rental/>}/> 
         <Route path="/services" element={<Services/>}/> 
         <Route path="/aboutus" element={<Aboutus/>}/>
         <Route path="/contactus" element={<Contactus/>}/>
      </Routes>
  )
}

export default Router
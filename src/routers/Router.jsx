import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Aboutus from '../components/Aboutus/Aboutus'
import Contactus from '../components/Contactus/Contactus'


const Router = () => {
  return (
    <Routes >
        <Route path='' element={<Aboutus/>}/>
        <Route path='' element={<Contactus/>}/>
        <Route path='' element={<Aboutus/>}/>
    </Routes>
  )
}

export default Router
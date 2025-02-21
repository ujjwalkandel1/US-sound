import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'
import Shops from '../pages/Shops'
import Rental from '../pages/Rental'
import Aboutus from '../pages/Aboutus'
import Router from '../routers/Router'


const Layout = () => {
  return (
<>
<Header />
<Router/>
<Footer />
</>

)
}

export default Layout
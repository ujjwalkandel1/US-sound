import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Image from './components/Image'
import CollectionSection from './components/CollectionSection'
import Products from './components/Products'
import ProductLayout from './components/ProductLayout'
import TendingProducts from './components/TrendingProducts'
import ImageOverlay from './components/ImageLayout'
import Logo from './components/Logo'
import Footer from './components/Footer'
import Hero from './components/Image'
import HeroSection from './components/HeroSection'
import ProductPage from './components/ProductPage'


function App() {

  return (
    <div>
      <Header />
      {/* <Image />
      <CollectionSection />
      <Products />
      <ProductLayout />
      <Products />
      <TendingProducts />
      <ImageOverlay />
      <Footer />
      <Logo /> */}
      <HeroSection />
      <ProductPage />
      <Footer />
    </div>
  )
}

export default App

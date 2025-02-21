import React from 'react'
import CollectionSection from '../components/Home/CollectionSection'
import Hero from '../components/Home/Home'
import ProductFilter from '../components/Home/Products'
import TendingProducts from '../components/Home/TrendingProducts'
import Logo from '../components/Home/Logo'
import Div from '../components/Home/Div'
import ImageOverlay from '../components/Home/ImageLayout'

const Home = () => {
  return (
    <div>
        <Hero />
        <CollectionSection />
        <ProductFilter />
        <TendingProducts />
        <ProductFilter />
        <TendingProducts />
        <ImageOverlay />
        <Logo />
        <Div />
    </div>
  )
}

export default Home
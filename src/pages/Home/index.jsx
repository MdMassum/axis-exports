import React from 'react'
import HeroSection from './components/HeroSection'
import ProductCategory from './components/ProductCategory'
import ChooseUs from './components/ChooseUs'
import Contact from './components/Contact'
import AboutUs from './components/AboutUs'

function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutUs/>
      <ProductCategory/>
      <ChooseUs/>
      <Contact/>
    </div>
  )
}

export default Home
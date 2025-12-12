import React from 'react'
import './Home.css'

// Components
import HeroCarousel from '../../components/Home/HeroCarousel'
import PopularProducts from '../../components/Home/PopularProducts'
import HomeCatSlider from '../../components/Home/HomeCatSlider'
import BigSavingDaysSale from '../../components/Home/BigSavingDaysSale'
import FreeDeliverySection from '../../components/Home/FreeDeliverySection'



export default function Home() {
  return (
    <div className='py-6 '>
      <div className='container'>
        <HeroCarousel />
        <HomeCatSlider />

      </div>

      <div className='w-full bg-white'>
        <PopularProducts />
        <BigSavingDaysSale />
        <FreeDeliverySection />
      </div>

    </div>
  )
}

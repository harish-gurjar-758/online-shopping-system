import React from 'react'
import HeroCarousel from '../../components/Home/HeroCarousel'
import PopularProducts from '../../components/Home/PopularProducts'
import HomeCatSlider from '../../components/Home/HomeCatSlider'
import './Home.css'
import BigSavingDaysSale from '../../components/Home/BigSavingDaysSale'

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
      </div>

    </div>
  )
}

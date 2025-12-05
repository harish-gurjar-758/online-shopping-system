import React from 'react'
import HeroCarousel from './HeroCarousel'
import PopularProducts from './PopularProducts'

export default function Home() {
  return (
    <div className='py-6'>
      <div className='container'>
        <HeroCarousel />
        <div className='w-full flex items-center justify-between py-6'>
          <div className='w-[150px] h-[150px] gap-2 cursor-pointer item py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col'>
            <img
              className='w-[40px] lg:w-[60px] transition-all'
              src="https://serviceapi.spicezgold.com/download/1763965324754_4819.png" alt=""
            />
            <h3>Fashion</h3>
          </div>

          <div className='w-[150px] h-[150px] gap-2 cursor-pointer item py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col'>
            <img
              className='w-[40px] lg:w-[60px] transition-all'
              src="https://serviceapi.spicezgold.com/download/1761905929738_file_1734525218436_ele.png" alt="" />
            <h3>Electronics</h3>
          </div>

          <div className='w-[150px] h-[150px] gap-2 cursor-pointer item py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col'>
            <img
              className='w-[40px] lg:w-[60px] transition-all'
              src="https://serviceapi.spicezgold.com/download/1761905971086_file_1734525231018_bag.png" alt="" />
            <h3>Bags</h3>
          </div>

          <div className='w-[150px] h-[150px] gap-2 cursor-pointer item py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col'>
            <img
              className='w-[40px] lg:w-[60px] transition-all'
              src="https://serviceapi.spicezgold.com/download/1761905982766_file_1734525239704_foot.png" alt="" />
            <h3>Footwear</h3>
          </div>

          <div className='w-[150px] h-[150px] gap-2 cursor-pointer item py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col'>
            <img
              className='w-[40px] lg:w-[60px] transition-all'
              src="https://serviceapi.spicezgold.com/download/1761905996339_file_1734525248057_gro.png" alt="" />
            <h3>Groceries</h3>
          </div>

          <div className='w-[150px] h-[150px] gap-2 cursor-pointer item py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col'>
            <img
              className='w-[40px] lg:w-[60px] transition-all'
              src="https://serviceapi.spicezgold.com/download/1761906005923_file_1734525255799_beauty(1).png" alt="" />
            <h3>Beauty</h3>
          </div>

          <div className='w-[150px] h-[150px] gap-2 cursor-pointer item py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col'>
            <img
              className='w-[40px] lg:w-[60px] transition-all'
              src="https://serviceapi.spicezgold.com/download/1761906015678_file_1734525275367_well.png" alt="" />
            <h3>Wellness</h3>
          </div>

          <div className='w-[150px] h-[150px] gap-2 cursor-pointer item py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col'>
            <img
              className='w-[40px] lg:w-[60px] transition-all'
              src="https://serviceapi.spicezgold.com/download/1761906025549_file_1734525286186_jw.png" alt=""
            />
            <h3>jewellery</h3>
          </div>
        </div>
      </div>

      <PopularProducts />
    </div>
  )
}

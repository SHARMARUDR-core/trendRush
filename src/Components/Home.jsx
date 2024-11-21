import React from 'react'
import Offers from './OffersSection/Offers'
import TopBrands from './topBrands/TopBrands'
import Trending from './trending/Trending'
import Slider from './slider/Slider'
import SignIn from './auth/SignIn'
export default function Home() {
  return (
    localStorage.getItem('userLogin') ? 
    <div>
      <Slider/>
      <Offers/>
      <TopBrands/>
      <Trending/>
    </div> : <SignIn/>
  )
}

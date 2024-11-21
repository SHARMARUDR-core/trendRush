import React, { useEffect, useState } from 'react'
import SectionHeading from '../../SectionHeading'
import TrendingCard from './TrendingCard'

export default function TrendingFootware() {
  const [footWear , setFootWear] = useState([])
  useEffect(() => {

    fetch('https://ecommerce-psi-blond.vercel.app/item')
    .then(res => res.json())
    .then(data => setFootWear(data))

  }, [])
  return (
    <>
      <SectionHeading heading='TRENDING IN FOOT WEARS' />
      <div className='w-screen flex flex-wrap items-center justify-center gap-x-10'>
        {
          footWear.map((ele) => {
            return ele.subCategory === 'Foot Wear'  ?  <TrendingCard company = {ele.company}
            name = {ele.name} url = {ele.url} subCategory={ele.subCategory} /> : ''
          })
        }
      </div>
    </>
  )
}

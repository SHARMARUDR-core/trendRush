import React, { useEffect, useState } from 'react'
import TrendingCard from './TrendingCard'
import SectionHeading from '../../SectionHeading'
import { useNavigate } from 'react-router-dom'

export default function TrendingIndian() {
  const [indianWear , setIndianWear] = useState([])
  let navigate = useNavigate()
  useEffect(() => {

    fetch('https://ecommerce-psi-blond.vercel.app/item')
      .then(res => res.json())
      .then(data => setIndianWear(data))
  }, [])

return (
  <>
    <SectionHeading heading='TRENDING IN INDIAN WEARS' />
    <div className='w-screen flex flex-wrap items-center justify-center gap-x-10' >
      {
        indianWear.map((ele) => {
          return ele.category === 'indian wear' ?  <TrendingCard url = {ele.url} company={ele.company} name={ele.name} subCategory={ele.subCategory} /> : '' ;
        })
      }
    </div>
  </>
)

}
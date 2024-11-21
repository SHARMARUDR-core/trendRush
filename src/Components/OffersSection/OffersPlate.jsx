import React, { useEffect, useState } from 'react'
import OfferCard from './OfferCard'

export default function OffersPlate() {
  const [offersData , setOffersData] = useState([])

  useEffect(() => {
    fetch('https://ecommerce-psi-blond.vercel.app/item')
    .then(res => res.json())
    .then(data => setOffersData(data))
  } , [])
  return (
    <div className='w-screen p-10 flex flex-wrap items-center justify-center gap-x-10'>
        {
          offersData.map((ele) => {
            return ele.offer !== '' ? <OfferCard  url = {ele.url} company ={ele.company} discount ={ele.offer} _id = {ele._id} />: ''
          })
        }
    </div>
  )
}

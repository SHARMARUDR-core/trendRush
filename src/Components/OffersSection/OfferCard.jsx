import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function OfferCard({url , company , discount , _id}) {
  let navigate = useNavigate()
  return (
    <div className='w-64 h-96  p-5 bg-gray-100 cursor-pointer' onClick= {() => navigate(`/exploreAll/${company}`)}>
        <img src={url} alt=""  className='w-64 h-60 rounded-lg'/>
        <h1 className='text-xl'>{company}</h1>
        {/* <img src= {logo} alt="" className='w-64 h-16' /> */}
        <h1 className='text-2xl text-center'>{discount}</h1>
    </div>
  )
}

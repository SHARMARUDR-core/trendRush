import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function TrendingCard({ name ,company , url , subCategory}) {
  let navigate = useNavigate()
  return (
    <div className='w-52 h-80 m-5 cursor-pointer' onClick={() => navigate(`/explore/${subCategory}`)}>
        <img src={url} alt="" className='w-full h-60' />
        <h1 className='text-xl '>{company}</h1>
        <p className='text-md'>{name}</p>
        <p className='text-xs'>Explore</p>
    </div>
  )
}

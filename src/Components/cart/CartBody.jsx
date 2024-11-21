import React, { useEffect, useState } from 'react'
import CartCard from './CartCard'
import { useNavigate } from 'react-router-dom'
export default function CartBody() {
  let [data , setData] = useState([])
  let userID = localStorage.getItem('userID')
  let navigate = useNavigate()
  useEffect( () => {
    fetch(`https://ecommerce-psi-blond.vercel.app/cart/${userID}`)
    .then(res => res.json())
    .then(data_ => setData(data_.products))
  } , [])
    
  return (
    <div className='w-screen h-screen flex gap-5 p-10 flex-col mb-20 justify-center items-center'>
      {
        data.map((ele , index) => {
          return <CartCard data ={ele} index ={index} />
        })
      }
      <button className='w-80 ring-purple-500 ring-1 text-purple-800'
      onClick={() => navigate('/checkout')} >Let's Confirm Your Order</button>
    </div>
  )
}

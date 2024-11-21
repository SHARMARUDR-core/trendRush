import React, { useEffect, useState } from 'react'
import { GiReturnArrow } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom'
export default function CartCart({ data , index }) {
  let [cartItemData , setCartItemData] = useState({})
  let userID = localStorage.getItem('userID')
  let navigate = useNavigate()
  useEffect(() => {
    try{
      fetch(`https://ecommerce-psi-blond.vercel.app/item/${data.Item}`)
    .then(res => res.json())
    .then(data => setCartItemData(data))
    } catch{
      console.log('getting difficulty in fetching item')
    }    
  } , [])

  function handleCartItemRemove() {
    console.log('handle remove user item')
    fetch(`https://ecommerce-psi-blond.vercel.app/cart/${userID}` , {
      method : 'DELETE',
      headers : { 'Content-Type' : 'application/json' } , 
      body : JSON.stringify({
        item_id : cartItemData._id
      })
    })
  }   
    

  return (
    <div className='w-96 sm:w-7/12 h-44 sm:h-72 ring-1 flex relative select-none '>
      <img src={cartItemData.url} alt="" onClick={() => navigate(`/page/${cartItemData._id}`)} className='sm:w-40,h-40 cursor-pointer'/> 
      <div className='flex flex-col gap-1 sm:gap-3 p-5 overflow-hidden'> 
        <h1 className='text-xl font-sans'>{cartItemData.company}</h1>
        <h1>{cartItemData.description}</h1>
        <p>₹ {cartItemData.price}</p>
        <p className='flex sm:gap-5 gap-3'><span className='w-2 h-2'><GiReturnArrow /></span> 7 day easy return </p>
      </div>
      <span className='w-8 h-8 flex justify-center items-center absolute top-2 sm:top-5 right-2 sm:right-5,bg-slate-100 rounded-full cursor-pointer' onClick={handleCartItemRemove}><RxCross1 />
      </span>
    </div>
  )
}

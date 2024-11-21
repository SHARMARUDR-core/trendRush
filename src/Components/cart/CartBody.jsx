import React, { useEffect, useState } from 'react'
import CartCard from './CartCard'
import { useNavigate } from 'react-router-dom'
export default function CartBody() {
  let [data , setData] = useState([])
  let userID = localStorage.getItem('userID')
  let [orderPrice , setOrderPrice] = useState(0)
  let navigate = useNavigate()
  // useEffect( () => {
  //   fetch(`https://ecommerce-psi-blond.vercel.app/cart/${userID}`)
  //   .then(res => res.json())
  //   .then(data_ => setData(data_.products))
  // } , [])

  useEffect(() => {
      const storedArrayString = localStorage.getItem("orderArray")
      const storedArray = JSON.parse(storedArrayString)
      setData(storedArray)
      handlePrice()
  } , [])

  function handlePrice() {
    let price = 0
    data.map((ele) => {
      price += ele.price
    })
    setOrderPrice(price)
  }


  return (
    <div className='w-screen  flex gap-5 p-10 flex-col mb-20 justify-center items-center'>
      {
        data.map((ele , index) => {
          return <CartCard data ={ele} index ={index} />
        })
      }

      <div className='w-screen border-dashed text-xl' onLoad={handlePrice}>
        <p className='text-center'>your total order cost is ₹ {orderPrice}</p>
      </div>

      <button className='w-80 ring-purple-500 ring-1 h-20 text-purple-800 text-lg hover:bg-purple-400 hover:text-white
      active:text-purple-400'
      onClick={() => navigate('/checkout')} 
      >Let's Confirm Your Order</button>
    </div>
  )
}

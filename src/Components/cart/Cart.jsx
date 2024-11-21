import React, { useState } from 'react'
import EmptyCart from './EmptyCart'
import CartBody from './CartBody'
export default function Cart() {
  let [data , setData] = useState(['sahil' , 'rudr' , 'nikita'])
  return (
    data.length ? <CartBody /> : <EmptyCart />
  )
}

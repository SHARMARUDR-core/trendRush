import React, { useState } from 'react'
import EmptyCart from './EmptyCart'
import CartBody from './CartBody'
export default function Cart() {
  let data = localStorage.getItem('orderArray')
  const storedArray = JSON.parse(data);

  return (
    storedArray.length === 0 ? <EmptyCart /> : <CartBody />
  )
}

import React from 'react'
import LogoutButton from '../LogoutButton'

export default function EmptyCart() {
  return (
    <div className='w-screen h-96 gap-10  flex flex-col justify-center items-center select-none'>
        <h1 className='text-blue font-light text-slate-700 text-lg sm:text-xl'>There is nothing in your cart. Let's add some items. </h1> 
        <LogoutButton name = 'ADD ITEMS FROM WISHLIST' redirect='wishlist'/>
    </div>
  )
}

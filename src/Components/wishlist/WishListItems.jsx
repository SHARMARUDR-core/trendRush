import React, { useEffect, useState } from 'react'
import WishlistCard from './WishlistCard'


export default function WishListItems() {
    let [wishlistItems , setWishlistItem] = useState([])

    useEffect(() => {
        const userID = localStorage.getItem('userID')
        fetch(`https://ecommerce-psi-blond.vercel.app/wishlist/${userID}`)
        .then(res => res.json())
        .then(data => setWishlistItem(data.wishlistItems))
    } , [])

    async function handleWishlistRemove (index) {
        console.log('remove')
        const userID = localStorage.getItem('userID')
        const result =  await fetch(`https://ecommerce-psi-blond.vercel.app/wishlist/${userID}` , {
            method : 'DELETE' , 
            headers : { 'Content-Type' : 'application/json' } , 
            body : JSON.stringify({
                wishlist_index : index
            })
        })
        console.log(result)
        if(result.ok) window.location.reload(true);
    }


    
  return (
    wishlistItems.length === 0 ? '' : 
    <div className='w-96 sm:w-screen pt-10 '>
        <h1 className='sm:ml-40 ml-5 mb-10 justify-center items-center font-sans text-lg font-medium flex gap-3'>MY WISHLIST  
            <span className='font-normal'> {wishlistItems.length} ITEMS</span> </h1>
        <div className='w-screen h-screen justify-start pl-20 pr-20 flex flex-wrap gap-20 gap-y-40'>
            {
                wishlistItems.map((ele , index) => {
                    return <WishlistCard data = {ele} onClick={() => handleWishlistRemove(index)} />
                })
            }
        </div>
    </div>
    
  )
}

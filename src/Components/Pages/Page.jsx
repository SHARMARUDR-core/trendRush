import React, { useEffect, useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { useParams } from 'react-router-dom';

export default function Page() {
  let [itemData, setItemData] = useState({})
  let [data, setData] = useState()
  let userID = localStorage.getItem('userID')
  console.log(userID)

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://ecommerce-psi-blond.vercel.app/item/${id}`)
      .then(res => res.json())
      .then(data => setItemData(data))
  }, [])

  function handleWishlist() {
    fetch('https://ecommerce-psi-blond.vercel.app/wishlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' } ,
      body: JSON.stringify({
        user: userID ,
        wishlistItems: data
      })
    })
  }
  async function fetchWishlist() {
    try {
      const response = await fetch(`https://ecommerce-psi-blond.vercel.app/wishlist/${userID}`).then(res => res.json())
      console.log(`responsefromUpdatingUserWihlist ${JSON.stringify({ response })}`)
      if (JSON.stringify({ response }) === null) { console.log('responsefromUpdatingUserWihlist null'); return null }
      else { return 'rudr' }
    } catch (error) {
      console.error('An error occurred:', error);
      handleWishlist();
      return
    }
  }

  async function updateWishlistItem() {
    try {
      const checkUserExistsInWishlist = await fetchWishlist();
      console.log(`checkUserExistsInWishlist: ${JSON.stringify(checkUserExistsInWishlist)}`);

      if (!checkUserExistsInWishlist) {
        console.log('User does not exist in wishlist. Creating a new one...');
        handleWishlist();
        return
      }

      else {
        console.log('Updating wishlist items...');
        console.log(userID)
        const response = await fetch(`https://ecommerce-psi-blond.vercel.app/wishlist/${userID}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user: userID,
            wishlistItems: itemData,
          }),
        });

        if (response.ok) {
          console.log('Wishlist updated successfully.');
        } else {
          console.error('Failed to update wishlist:', response.statusText);
        }
      }
    } catch (error) {
      console.error('Error in updating wishlist:', error);
    }
  }


  async function handleCart() {
    console.log(`userID and itemData in handle cart`)
    await fetch(`https://ecommerce-psi-blond.vercel.app/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: userID,
        cartItem: itemData
      })
    })
  }

  async function fetchCart() {
    try {
      const response = await fetch(`https://ecommerce-psi-blond.vercel.app/cart/${userID}`).then(res => res.json())
      console.log(`responsefromUpdatingUserCart ${JSON.stringify({ response })}`)
      if (JSON.stringify({ response }) === null) { console.log('responsefromUpdatingUserCart null'); return null }
      else { return 'rudr' }
    } catch (error) {
      console.error('An error occurred:', error);
      handleCart();
      return
    }
  }

  async function updateCartItem() {
    try {
      const checkUserExistsInCart = await fetchCart();
      console.log(`checkUserExistsInCart: ${JSON.stringify(checkUserExistsInCart)}`);

      if (!JSON.stringify(checkUserExistsInCart)) {
        console.log('User does not exist in wishlist. Creating a new one...');
        handleCart();
        return
      }

      else {
        console.log('Updating cart items...');
        console.log(userID)
        console.log(itemData)
        const response = await fetch(`https://ecommerce-psi-blond.vercel.app/cart/${userID}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user: userID,
            cartItem: { Item: itemData, quantity: 1 },
          }),
        });

        if (response.ok) {
          console.log('Wishlist updated successfully.');
        } else {
          console.error('Failed to update wishlist:', response.statusText);
        }
      }
    } catch (error) {
      console.error('Error in updating wishlist:', error);
    }
  }



  return (
    <div className='w-screen sm:flex justify-center items-center flex-col p-3'>

      <div className='w-96 h-96 rounded-lg'>
        <img src={itemData.url} alt="" className='w-96 h-96' />
      </div>
      <div className='flex flex-col'>
        <h1>{itemData.heading}</h1>
        <h4>Mrp - {itemData.price}</h4>
        <p className='w-96 flex flex-wrap'>{itemData.description}</p>
        <div className='w-96 h-20 flex justify-center items-center gap-5'>
          <button className='w-60 h-16 ring-2 rounded-xl flex justify-center text-xl items-center gap-2 active:bg-slate-300'
            onClick={updateWishlistItem}> <CiHeart />Wishlist </button>
          <button className='w-60 h-16 ring-2 gap-2 bg-red-500 rounded-xl text-white flex justify-center items-center
                active:bg-red-700' onClick={updateCartItem}> <IoBagOutline className='text-xl' />Add to Bag</button>
        </div>
      </div>

    </div>
  )
}

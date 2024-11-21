import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { useParams } from 'react-router-dom'


export default function ExploreCard({ url, exploreDataItem, company, price, subCategory }) {
  let navigate = useNavigate()
  let [mouseOver, setMouseOver] = useState(false)
  let userID = localStorage.getItem('userID')

  let [exploreData, setExploreData] = useState()
  console.log(userID)

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://ecommerce-psi-blond.vercel.app/item/${id}`)
      .then(res => res.json())
      .then(data => setExploreData(data))
  }, [])

  async function handleWishlist() {
    await fetch('https://ecommerce-bbo6.onrender.com/wishlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: userID,
        wishlistItems: exploreDataItem
      })
    })
  }

  async function fetchWishlist() {
    try {
      const response = await fetch(`https://ecommerce-bbo6.onrender.com/wishlist/${userID}`).then(res => res.json())
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
        const response = await fetch(`https://ecommerce-bbo6.onrender.com/wishlist/${userID}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user: userID,
            wishlistItems: exploreDataItem,
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
    <div className='flex w-72 h-96 flex-col justify-center items-center relative bg-slate-200 gap-2 select-none'
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <img src={url} alt="" className='w-72 h-72 rounded-md cursor-pointer'
        onClick={() => navigate(`/page/${exploreDataItem._id}`)}
      />
      {
        mouseOver ?
          <button className='w-64 h-14 absolute top-60 bg-white ring-1 ring-slate-300 flex justify-center gap-2 items-center active:bg-slate-50' onClick={updateWishlistItem}>
            <CiHeart className='text-xl' />WISHILIST</button>
          : ''
      }

      <div onClick={() => navigate(`/page/${exploreDataItem._id}`)} className='cursor-pointer'>
        <h1 className='text-lg font-normal font-serif '>{company}</h1>
        <p className='text-lg font-normal'>{subCategory}</p>
        <p className='text-base font-medium'>Mrp - {price}</p>
      </div>
    </div>
  )
}

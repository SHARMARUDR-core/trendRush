import React, { useEffect, useState } from 'react';
import wishlist from './wishlist.jpg';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../LogoutButton';
import WishListItems from './WishListItems';

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userID'); // Replace with dynamic ID retrieval logic
    fetch(`https://ecommerce-psi-blond.vercel.app/wishlist/${userId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch wishlist items');
        }
        return res.json();
      })
      .then((data) => {
        setWishlistItems(data.wishlistItems || []); // Ensure fallback to an empty array
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const isUserLoggedOut = localStorage.getItem('userLogin') === 'logout';

  if (!isUserLoggedOut) {
    return (
      <div className="flex justify-center items-center flex-col mt-16 gap-6 h-5/6">
        <h1 className="text-3xl">PLEASE LOG IN</h1>
        <p className="text-xl text-slate-500">
          Login to view items in your wishlist.
        </p>
        <img src={wishlist} alt="" className="w-40" />
        <LogoutButton name="LOGIN" redirect="login" />
      </div>
    );
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="flex justify-center items-center flex-col mt-16 gap-6 h-5/6 select-none">
        <h1 className="text-3xl">YOUR WISHLIST IS EMPTY</h1>
        <p className="text-xl text-slate-500">
          Add items that you like to your wishlist. Review them anytime and
          easily move them to the bag.
        </p>
        <img src={wishlist} alt="" className="w-40" />
        <LogoutButton name="CONTINUE SHOPPING" redirect="" />
      </div>
    );
  }

  return <WishListItems items={wishlistItems} />;
}

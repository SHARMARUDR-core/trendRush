import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

export default function WishlistCard({data , onClick }) {
  const userID = localStorage.getItem('userID');
  let navigate = useNavigate()

  // function handleCart() {
    // const result = fetch('https://ecommerce-psi-blond.vercel.app/cart', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     user: userID ,
    //     products: [
    //       {
    //         item: data._id , // Key `item` instead of `Item` for clarity
    //         quantity: 1
    //       }
    //     ]
    //   })
    // });
    // console.log('result')
  // }


  function handleOrderArray() {
    // Check if 'orderArray' already exists in localStorage
    if (!localStorage.getItem('orderArray')) {
      localStorage.setItem("orderArray", JSON.stringify([data]));
      return;
    }
    else {
      const storedArrayToUpdate = JSON.parse(localStorage.getItem("orderArray")) || [];
      // Add a new item to the array
      storedArrayToUpdate.push(data);

      // Save the updated array back to localStorage
      localStorage.setItem("orderArray", JSON.stringify(storedArrayToUpdate));
    }
  }



  
  return (
    <>
        <div className='w-72 h-96 relative ring-1 ring-slate-400 relative'>
            <div className='w-72'>
                <img src={data.url} alt="" className='w-72 h-96 cursor-pointer' onClick={() => navigate(`/page/${data._id}`)}/>
            <span className='w-8 h-8 bg-slate-200 rounded-full absolute top-5 right-5 flex justify-center items-center cursor-pointer' onClick={onClick}><RxCross1/></span>
            </div>
            <div className='flex flex-col justify-between items-center '>
                <h1 className='font-sans'>{data.company}</h1>
                <span className=' flex gap-2'>Rs - {data.price} <span className='text-orange-500'> {data.offer}</span></span>
                <button className='ring-1 ring-fuchsia-600 bg-slate-50 w-72 h-10 text-fuchsia-600 font-semibold cursor-pointer active:bg-slate-300' onClick={handleOrderArray}  >ADD TO BAG</button>
            </div>
        </div>
    </>
  )
}

import React from 'react'
import { MdNavigateNext } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
export default function MenuItems({ heading , redirect }) {
    let navigate = useNavigate()
  return (
    <div className='w-full mt-2 h-20 p-5 drop-shadow-lg bg-white  flex justify-between items-center text-sm cursor-pointer hover:bg-slate-50' 
        onClick={() => { navigate(redirect)}}>
        <h1>{heading}</h1>
        <span className='text-xl'><MdNavigateNext /></span>
    </div>
  )
}

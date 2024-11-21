import React from 'react'
import MenuItems from './MenuItems'
import { createPortal } from 'react-dom'

export default function Menu({display ,onClick , setDisplay}) {
  const userID = localStorage.getItem('userID')
  return createPortal(
    <div className={`w-screen h-screen absolute top-0 duration-500 ${ display ? 'flex bg-black' : 'hidden' }`} 
    onClick={onClick} onLoad={() => setDisplay(false)}>
        <div className='w-72  h-full bg-gray-100' onClick={(e) => e.stopPropagation()} >
          <MenuItems heading='HOME' redirect = '/'  />
          <MenuItems heading='CONTACT US' redirect = '/contact'/>
          <MenuItems heading='Cart' redirect = {`/cart/${userID}`} />
        </div>
    </div> , 
    document.body
  )
}

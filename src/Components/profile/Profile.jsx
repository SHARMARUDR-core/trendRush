import React, { useContext } from 'react'
import { MyContext } from '../Context-api'
import { createPortal } from 'react-dom';

import LogoutButton from '../LogoutButton'

export default function Profile({ state , onClick }) {
  return createPortal (
      <div className={`w-80  flex-col justify-center items-center gap-2 h-40 absolute top-20 right-10 bg-white drop-shadow-md ring-1 ${state ? 'flex' : 'hidden'}`} >
          <h1>WELCOME</h1>
          <p>To access account and manage orders</p>
          <span onClick={onClick}>
              <LogoutButton name = {'LogOut'} redirect = 'login'/>
          </span>
      </div> , 
      document.body
    )
}

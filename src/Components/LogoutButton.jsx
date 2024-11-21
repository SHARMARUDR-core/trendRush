import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LogoutButton({name , redirect}) {
    let navigate = useNavigate()
  return (
    <div>
        <button className='w-40 h-16 ring-1 ring-blue-600 text-blue-600 text-xl font-light'
        onClick={() => navigate(`/${redirect}`)}>{name}</button>
    </div>
  )
}

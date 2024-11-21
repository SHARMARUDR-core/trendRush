import React from 'react'

export default function Section({value , ele}) {
  return (
    <div className='w-72 p-5 h-96 bg-white ring-1'>
        <ul>
            <li>{value}</li>
        </ul>
    </div>
  )
}

import React, { useState } from 'react'

export default function Input({onChange , name , type , value }) {
    let [emptyInput , setEmptyInput] = useState(false)

  return (
    <>
    <div className='flex flex-col justify-center relative h-12 transition duration-1000'
      onFocus={() => setEmptyInput(true)}
    >
        <label htmlFor={name} className={`relative  w-0 z-0  ${emptyInput ? 'top-0 text-white left-2 duration-500 text-sm' : 'top-8 left-4' }`}
        >
          {name}
        </label>
        <input className={`w-72 h-10 p-2 rounded-md`} name={name} type={type} value={value} onChange={onChange} />
    </div>
    </>
  )
}

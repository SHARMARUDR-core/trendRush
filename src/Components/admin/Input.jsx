import React, { useState } from 'react'

export default function Input({name , value , onChange}) {
    let [input , setInput] = useState(false)
  return (
    <div className='h-12 w-96 relative flex flex-col mt-2 justify-end ' 
    onClick={() => setInput(true)}
    >
        <label htmlFor={name} className={`absolute text-black ${input ? 'top-0 text-sm duration-500' : 'top-7'}`}>{name}</label>
        <input className=" border-b-2 bg-transparent border-slate-700 w-96 h-10 outline-none text-lg font-medium" name = {name} type="text" value = {value} onChange={onChange} />
    </div>
  )
}
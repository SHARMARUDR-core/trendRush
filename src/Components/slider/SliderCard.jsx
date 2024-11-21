import React from 'react'

export default function SliderCard({ posterData}) {
  return (
    <div className='w-screen h-full flex  justify-center cursor-pointer relative overflow-hidden'>
        <img src={posterData.posterImg} alt="" className='h-96 w-auto'/>
        <div className='w-96 h-full flex flex-col justify-center items-center h-full gap-5 absolute right-0 bg-white'>
            <h1 className='text-4xl font-serif'>{posterData.heading}</h1>
            <p className='text-2xl font-sans'>{posterData.offer}</p>
            <p className='text-xl font-sans text-slate-900'>+EXPLORE</p>
        </div>
        <img src={posterData.logo} alt="" className='w-20 h-14 absolute top-5 left-5 drop-shadow-md'/>
    </div>
  )
}

import React, { useState } from 'react'

export default function OtpTaker() {
    let [otpValue , setOtpValue] = useState('')
  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center gap-10 '>
        <label htmlFor="otp" className='text-xl font-base'> Enter your four digit otp here </label>
        <input type="password" className='w-80 h-14 ring-1 ring-black p-4 font-extrabold' value={otpValue} onInput={(e) => setOtpValue(e.target.value)} name='otp'/>
        <p className='text-slate-700'>we just send you otp on your gmail account</p>
    </div>
  )
}

import React, { useState } from 'react'
import Input from './Input'

export default function AdminNamePage() {
    let [name , setName] = useState('')
    let [adminNameState , setAdminNameState] = useState(true)
    let [button , setButton] = useState(false)
    function handleChange(e) {
        setName(e.target.value)
    }
    async function handleAdmin() {
        try{
            let admins=  ['otpscam2022@1234']
            let name_ = admins.some((ele) => {
                return name === ele
            })
        } catch {
            console.log('first')
        }

        //     if (name_) {
        //         try {
        //             const res = await fetch('http://localhost:8080/admin', {
        //                 method: 'POST',
        //                 headers: { 'Content-Type': 'application/json' },
        //                 body: JSON.stringify({ adminName: name })
        //             });
        
        //             if (res.status === 201) {
        //                 setAdminNameState(false);
        //                 setButton(true)
        //             } else {
        //                 alert(`Request failed with status: ${res.status}`);
        //             }
        //         } catch (error) {
        //             alert("Error in fetching:", error);
        //         }
        //     }
        //     else alert(`LOOK LIKE YOU ARE NOT VALID ADMIN`);
        // } catch {
        //     alert('try some time later')
        // }
    }
    

  return (
    <div className= {`w-full h-full flex flex-col select-none text-white justify-center items-center bg-blue-400 fixed top-0 left-0 gap-10 overflow-y-hidden ${adminNameState ? 'flex' : 'hidden'}`}>
        <h1 className='text-2xl'>PLEASE ENTER YOUR NAME TO CONTINUE</h1>
        <Input name = 'Admin Name'  value = {name} onChange={handleChange} />
        <button className={`bg-blue-600 w-64 h-14 border-white border-2 ring-2 text-xl ring-blue-600 active:bg-blue-600
        ${button ? 'animate-spin' : ''} `}
        onClick = {handleAdmin} type='submit'>Submit</button>
    </div>
  )
}

import React, { useContext, useState } from 'react'
import Input from './Input'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../Context-api'

export default function Login() {
    let navigate = useNavigate()
    let { login, setLogin } = useContext(MyContext)
    let [formInput, setFormInput] = useState({
        eamil: '',
        password: ''
    })

    function handleFormInputs(e) {
        let { name, value } = e.target
        setFormInput({
            ...formInput,
            [name]: value
        })
    }

    function handleDelete(e) {
        let { name, value } = e.target
        setFormInput({
            ...formInput,
            [name]: value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        let data = {};
        formData.forEach((value, key) => (data[key] = value));
        console.log(data);

        try {
            const response = await fetch('https://ecommerce-psi-blond.vercel.app/user')
                .then(res => res.json())

            response.map(async (ele) => {
                if (ele.email === data.email && ele.password === data.password) {
                    const result = await fetch('https://ecommerce-psi-blond.vercel.app/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email: data.email,
                            password: data.password
                        })
                    })
                    if (result.ok) {
                        localStorage.setItem( 'userLogin' , 'logout')
                        alert('YOU ARE SUCCESSFULLY LOGGED IN NOW')
                        navigate('/');
                    } else {
                        alert('SOME ONE ALREADY LOGED IN WITH SAME EMAIL ID')
                    }
                }
            });

        } catch {
            alert('SERVER ERROR')
            res.state(500).json()
        }
    }

    return (
        <>
            <div className='w-screen h-screen bg-slate-800 flex items-center justify-center
            absolute top-0'>
                <div className='w-80 sm:w-96 h-96 p-10 bg-slate-700 rounded-lg ring-2 ring-white flex justify-between items-center flex-col'>
                    <form action="/login" method='post' onSubmit={handleSubmit}  className='flex flex-col gap-4'>
                        <h1 className='font-semibold text-white text-center'>LOG-IN</h1>
                        <Input type='text' name='email' value={formInput.email} onChange={handleFormInputs} />
                        <Input type='text' name='password' value={formInput.password} onChange={handleFormInputs} />
                        <button className='focus:ring-gray-100 focus:ring-2 h-8 active:bg-red-600 bg-red-500 mt-5 rounded-full' type="submit"> --SUBMIT-- </button>
                        <p className='text-slate-500 text-center font-normal'> IF YOU HAVE'NT SIGN-IN YET <span onClick={() => navigate('/signin')} className='text-blue-500 underline underline-offset-4 cursor-pointer'> SignIn here </span></p>
                    </form>
                </div>
            </div>
        </>
    )
}

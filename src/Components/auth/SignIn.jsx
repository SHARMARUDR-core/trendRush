import React, { useState } from 'react'
import Input from './Input';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    let navigate = useNavigate()
    let [formInput, setFormInput] = useState({
        name: '',
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

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        let data = {};
        formData.forEach((value, key) => (data[key] = value));
        console.log(data);

        try {
            const response = await fetch('https://ecommerce-psi-blond.vercel.app/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    password: data.password,
                }),
            });
            if (response.ok) {
                alert("SUCCESS");
                const result = await response.json()
                localStorage.setItem('userID' , result._id)
                console.log(result)
                await navigate('/login')
            } else if (response.status === 408) {
                alert("SOMETHING WENT WRONG");
                this.setState({ requestFailed: true });
            } else {
                alert("Request failed with status: " + response.status);
            }
        } catch (error) {
            console.error("Error during fetch:", error);
            alert("Network error");
        }
    }


    return (
        <div className='w-screen h-screen bg-gradient-to-tr from-slate-400 to-blue-500 flex justify-center items-center fixed top-0 '>
            <div className='w-80 sm:w-96 h-96 p-10 bg-slate-700 rounded-lg ring-2 ring-white flex justify-between items-center flex-col'>
                <h1 className='font-semibold text-white'>SIGN - IN</h1>
                <form action="/user" method='post' onSubmit={handleSubmit}  className='flex flex-col gap-4'>
                    <Input type="text" name="name" value={formInput.name} 
                    onChange={handleFormInputs} />

                    <Input type="text" name="email" value={formInput.email} 
                    onChange={handleFormInputs} />

                    <Input type="text" name="password" value={formInput.password} 
                    onChange={handleFormInputs} />

                    <button className='focus:ring-gray-100 focus:ring-2 h-8 active:bg-red-600 bg-red-500 mt-5 mb-2 rounded-full' type="submit" > --SUBMIT-- </button>
                </form>
                <p className='text-blue-300 underline underline-offset-4 cursor-pointer' onClick={() => navigate('/login')}>Login Here</p>
            </div>
        </div>
    )
}

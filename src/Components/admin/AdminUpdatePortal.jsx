import React, { useEffect, useState } from 'react'
import AdminView from './AdminView';
import Input from './Input';

export default function AdminUpdatePortal() {
    
    let [inputAddValue , setInputAddValue] = useState({
        name : '' , 
        stock : '' , 
        price : '' , 
        offer : '' , 
        description : '' , 
        url : '' ,
        category : '' ,
        company : '' ,
        subCategory : ''
    })
    
    let [removeAddValue , setRemoveAddValue] = useState('') 

    let [category , setCategory] = useState({
        name : '' , 
        subCategory : ''
    })

    useEffect(() => {
        fetch('https://ecommerce-psi-blond.vercel.app/item')
        .then(res => res.json())
        .then(console.log)
    } , [])


    function handleInputChange (e) {
        let {name , value} = e.target
        setInputAddValue({
            ...inputAddValue ,
            [name] : value 
        })
    }

    function handleRemoveChange (e) {
        setRemoveAddValue(e.target.value)
    }


    async function handleSubmit(e) {
    e.preventDefault()
        // Fetch request to send form data
        const result = await fetch('https://ecommerce-psi-blond.vercel.app/item/check', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name : inputAddValue.name , 
                stock : inputAddValue.stock , 
                price : inputAddValue.price , 
                offer : inputAddValue.offer , 
                description : inputAddValue.description , 
                url : inputAddValue.url ,
                category : inputAddValue.category,
                company : inputAddValue.company,
                subCategory : inputAddValue.subCategory
            }) , 
        })
        console.log(result)
    }

    function HandleRemove(e) {
        e.preventDefault()
        fetch('https://ecommerce-psi-blond.vercel.app/item/check' , {
            method : 'DELETE' , 
            headers : { 'Content-Type' : 'application/json' } ,
            body : JSON.stringify({
                name : inputAddValue.name , 
                subCategory : inputAddValue.subCategory
            })
        })
        .then(res => res.json())
        .then(console.log)
    }


    function handleCategory(e) {
        e.preventDefault() 
        fetch('https://ecommerce-psi-blond.vercel.app/product' , {
            method : 'POST' , 
            headers : { 'Content-Type' : 'application/json' } ,
            body : JSON.stringify({
                name : category.name , 
                subCategory : category.subCategory
            })
        })
        .then(res =>res.json())
        .then(console.log)
    }

    function handleCategoryChange (e) {
        let { name , value } = e.target 
        setCategory({
            ...category , 
            [name] : value
        })      
    }

  return (
    <div className='flex sm:flex-row flex-col p-5  sm:p-1 sm:pl-4 fixed top-0 overflow-auto'>
        <div className='grid grid-rows-3 gap-1 '>            
            <div className='flex justify-center items-center flex-col'>
                <h1 className="text-4xl text-slate-800 ">Admin</h1>
                <hr />
                <h2 className="text-black text-2xl">Add item</h2>
                <form action="/item"  method="POST" id ='form' onSubmit={handleSubmit}>

                    <Input name = 'name' type="text" value={inputAddValue.name} onChange={ handleInputChange }/>
                    <Input name = 'category' type="text" value={inputAddValue.category} onChange={ handleInputChange }/>
                    <Input name = 'price' type="Number" value={inputAddValue.price} onChange={ handleInputChange }/>
                    <Input name = 'offer' type="text" value={inputAddValue.offer} onChange={ handleInputChange }/>
                    <Input name = 'stock' type="Number" value={inputAddValue.stock} onChange={ handleInputChange }/>
                    <Input name = 'url' type="text" value={inputAddValue.url} onChange={ handleInputChange }/>
                    <Input name = 'description' type="text" value={inputAddValue.description} onChange={ handleInputChange }/>
                    <Input name = 'company' type="text" value={inputAddValue.company} onChange={ handleInputChange }/>
                    <Input name = 'subCategory' type="text" value={inputAddValue.subCategory} onChange={ handleInputChange }/>

                    <button className='bg-cyan-400 mt-10 w-96 border-white border-2 ring-2 ring-cyan-500 active:bg-cyan-500' type='submit'>Submit</button>

                </form>
            </div>

            <div className='h-96'>
                <hr/>
                <h2 className="text-black text-2xl">Remove item</h2>
                <form action="/item/check" method="POST" id  = 'form' className="flex h-48 flex-col" 
                onSubmit={HandleRemove}>
                    <Input name = 'name' type="text" value={removeAddValue} onChange={ handleRemoveChange }/>
                    <button  className="bg-red-500 w-96 mt-10 border-white border-2 ring-2 ring-red-700 active:bg-red-600"> Remove </button> 
                </form>
            </div>

            <div>
                <hr />
                <h1 className="text-black text-2xl"> Category </h1>
                <Input name = 'name' type="text" value={category.name} onChange={ handleCategoryChange }/>
                <Input name = 'subCategory' type="text" value={category.subCategory} onChange={ handleCategoryChange }/>

                <button  className="bg-green-500 w-96 mt-10 border-white border-2 ring-2 ring-green-700 active:bg-green-600"
                onClick={handleCategory}> Add New Category </button> 
            </div>
            
        </div>
        <AdminView/>
        {/* <AdminNamePage/> */}
    </div>
  )
}
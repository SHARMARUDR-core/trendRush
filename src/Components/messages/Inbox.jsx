import React, { useEffect, useState } from 'react'
import  { Th , Td , Te , Time} from './TableComponents'
import CompanyLogo from '../header/CompanyLogo.jpg'

export default function Inbox() {
    const [messages , setMeassages] = useState([])

    useEffect(() => {
        fetch('https://vistara-api-mm82.vercel.app/email')
        .then(res => res.json())
        .then(data => setMeassages(data))
    })

  return (
    <div className='w-screen p-5 h-full flex flex-col  items-center bg-black'>
        <abbr title="Company logo">
        <img src={CompanyLogo} className='w-20' alt="company logo" />
        </abbr>
        <table>
            <thead >
                <Th head = 'S.NO'/>
                <Th head = 'Name'/>
                <Th head = 'Email'/>
                <Th head = 'Time'/>
                <Th head = 'Message'/>
            </thead>
            <tbody>
                {
                    messages.map((ele , index) => {
                        return <tr>
                        <Td data = {index+1 + '.'} />   
                        <Td data = {ele.senderName.charAt(0).toUpperCase() + String(ele.senderName).slice(1)} />
                        <Te email = {ele.senderEmail} /> 
                        <Time time = {ele.createdAt} date = '' />    
                        <Td data = {ele.message} />  
                    </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

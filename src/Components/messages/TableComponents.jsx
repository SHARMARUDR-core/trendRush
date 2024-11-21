import React from 'react'
import ButtonMailto from './MailTo'

function Th (prop) {
  return  <th className='min-w-20 max-w-96  bg-slate-600 text-md font-normal text-white py-2 px-2 lg:px-10'>{prop.head}</th>
}
function Td(prop) {
  return <td className='min-w-30 max-w-96 bg-slate-700 font-normal text-md text-slate-200 px-2 py-2 lg:px-10'>{prop.data}</td>
}

function Te(prop) {
  return <td className='min-w-30 max-w-96 bg-slate-700 font-normal text-md hover:text-blue-400 hover:underline  text-slate-200 px-2 py-2 lg:px-10 cursor-pointer'><ButtonMailto label={prop.email} mailto={`mailto:${prop.email}`} /></td>
}

function Time(prop) {
  return <td className='min-w-20 max-w-96  bg-slate-700 font-normal text-slate-200 px-2 text-sm  lg:px-10'>
    <span className='block'>{prop.time}</span>
    <span>{prop.date}</span>
  </td>
}

export default function TableComponents () {
  return (
    <></>
  )
}
export { Th  , Td ,Te , Time}
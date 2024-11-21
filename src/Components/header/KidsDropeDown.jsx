import React from 'react'
import Section from './Section'
import { createPortal } from 'react-dom'

export default function KidsDropeDown({state ,setState}) {
  let KidsSection = ['TopWear' , 'BottomWear' , 'FootWear']

  return createPortal(
    <div className={`h-96 bg-black flex  absolute top-20 left-40 duration-500 ${state ? 'visible' : 'invisible'}`}
    onMouseEnter={() => setState(true)}
    onMouseLeave={() => setState(false)}
    >
        {
        KidsSection.map((ele) => {
          return <Section typeOf='kids' value = {ele}/>
        })
        }
    </div> , 
    document.body
  )
}

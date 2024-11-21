import React from 'react'
import Section from './Section'
import { createPortal } from 'react-dom'

export default function MenDropeDown({state ,setState}) {
  let MenSection = ['TopWear' , 'BottomWear' , 'FootWear']

  return  createPortal(
    <div className={`h-96 flex bg-black absolute top-20 left-8 duration-500 ${state ? 'visible ' : 'invisible'} `}
    onMouseEnter={() => setState(true)}
    onMouseLeave={() => setState(false)}
    >
      {
        MenSection.map((ele) => {
          return <Section value = {ele}  />
        })
      }
    </div> ,
    document.body
  )
}

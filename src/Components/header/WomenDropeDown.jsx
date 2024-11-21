import React from 'react'
import Section from './Section'
import { createPortal } from 'react-dom'

export default function WomenDropeDown({state , setState}) {
    let WomenSection = ['TopWear' , 'BottomWear' , 'FootWear']
  return createPortal(
    <div className={`h-96  flex bg-black absolute top-20 left-24 duration-500  ${state ? 'visible ' : 'invisible'}`}
    onMouseEnter={() => setState(true)}
    onMouseLeave={() => setState(false)}
    >
        {
            WomenSection.map((ele) => {
                return <Section typeOf='women' value = {ele}/>
            })
        }
    </div> ,
    document.body
  )
}

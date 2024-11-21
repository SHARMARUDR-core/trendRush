import React, { useEffect, useState } from 'react'
import TrendingCard from './TrendingCard'
import SectionHeading from '../../SectionHeading'

export default function TrendingSports() {
  const [sports , setSports] = useState([])
  useEffect(() => {
    fetch('https://ecommerce-psi-blond.vercel.app/item')
      .then(res => res.json())
      .then(data => {
        const uniqueOffers = data
        .filter(item => item.subCategory === 'Sport Shoes')
        .reduce((acc, current) => {
          const x = acc.find( item => item.company === current.company  )
          if (!x) {
            acc.push(current);
          }
          return acc;
        }, []);
        setSports(uniqueOffers);
      });
  }, []);
  return (
    <>
      <SectionHeading heading='TRENDING IN SPORTS WEAR' />
      <div className='w-screen flex flex-wrap items-center justify-center gap-x-10'>
      {
        sports.slice(0, 4).map((ele, index) => (
          <TrendingCard key={index} url={ele.url} company={ele.company} name={ele.name} 
          subCategory={ele.subCategory}/> 
        ))
      }
      </div>
    </>
  )
}


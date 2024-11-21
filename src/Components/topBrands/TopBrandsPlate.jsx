import React, { useEffect, useState } from 'react';
import OfferCard from '../OffersSection/OfferCard';

export default function TopBrandsPlate() {
  const [offersData, setOffersData] = useState([]);

  useEffect(() => {
    fetch('https://ecommerce-psi-blond.vercel.app/item')
      .then(res => res.json())
      .then(data => {
        const uniqueOffers = data.reduce((acc, current) => {
          const x = acc.find(item => item.company === current.company);
          if (!x) {
            acc.push(current);
          }
          return acc;
        }, []);
        setOffersData(uniqueOffers);
      });
  }, []);

  return (
    <div className='w-screen sm:p-10 flex flex-wrap items-center justify-center gap-x-10'>
      {
        offersData.slice(0, 8).map((ele, index) => (
          <OfferCard key={index} url={ele.url} company={ele.company} discount={ele.offer}  />
        ))
      }
    </div>
  );
}

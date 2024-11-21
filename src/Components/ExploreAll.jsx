import React, { useEffect, useState } from 'react';
import ExploreCard from './ExploreCard';
import { useParams } from 'react-router-dom';

export default function ExploreAll() {
  const [exploreData, setExploreData] = useState([]);
  const { company } = useParams();

  useEffect(() => {
    fetch(`https://ecommerce-psi-blond.vercel.app/item`)
      .then(res => res.json())
      .then(data => setExploreData(data));
  }, []);

  return (
    <div className="flex  w-screen h-screen p-10 gap-5 flex-wrap">
      {exploreData.map((ele , index) => (
        ele.company === company  ? 
        <ExploreCard
          exploreDataItem = {ele}
          key={ele._id}
          url={ele.url}
          company={ele.company}
          price={ele.price}
          subCategory = {ele.subCategory}
          _id={ele._id}
        /> : ''
      ))}
    </div>
  );
}

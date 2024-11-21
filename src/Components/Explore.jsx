import React, { useEffect, useState } from 'react';
import ExploreCard from './ExploreCard';
import { useParams } from 'react-router-dom';

export default function Explore() {
  const [exploreData, setExploreData] = useState([]);
  const { subCategory , company } = useParams();

  useEffect(() => {
    fetch(`https://ecommerce-psi-blond.vercel.app/item`)
      .then(res => res.json())
      .then(data => setExploreData(data));
  }, []);

  return (
    <div className="flex w-screen h-screen p-10 gap-5 flex-wrap">
      {exploreData.map((ele) => (
        ele.subCategory === subCategory  ? 
        <ExploreCard
          key={ele._id}
          url={ele.url}
          company={ele.company}
          price={ele.price}
          _id={ele._id}
        /> : ''
      ))}
    </div>
  );
}

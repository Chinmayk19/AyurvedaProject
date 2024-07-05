"use client"
import React from 'react';
import useSWR from 'swr';
import ProductCard from '../Components/ProductCard';
import Navbar from '../Components/Navbar';

const fetcher = url => fetch(url).then(res => res.json());

const Page = () => {
  const { data, error } = useSWR('https://ayurvedaproject-tepq.onrender.com/allproducts', fetcher);

  return (
    <div>
      <Navbar />
      <h2 className='font-bold ml-10 mt-5 mb-5 text-4xl'>Products</h2>
      {error && <div>Error fetching data at this moment</div>}
      {!data && <div>Loading...</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10 py-6">
        {data && data.map(product => (
          <div key={product._id} className="w-full">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

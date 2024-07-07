"use client";
import React from 'react';
import useSWR from 'swr';
import { useSession } from "next-auth/react";
import CartBox from '../Components/CartBox/index'; 


const fetcher = url => fetch(url).then(res => res.json());

const Page = () => {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;

  // Use SWR to fetch cart items
  const { data: cartItems, error } = useSWR('https://ayurvedaproject-tepq.onrender.com/getcart', fetcher);

  if (!userEmail) {
    return <div>Please log in to view your cart items.</div>;
  }

  if (error) {
    return <div>Failed to load cart items.</div>;
  }

  if (!cartItems) {
    return <div>Loading...</div>;
  }
  const userCartItems = cartItems.filter(item => item.email === userEmail);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Cart Items</h1>
     <div className='flex gap-4 flex-wrap justify-center md:justify-start'>
     {userCartItems.length > 0 ? (
        userCartItems.map((item, index) => (
            <>
          <CartBox
            key={index}
            name={item.productname}
            img={item.productimg}
            price={item.productprice}
          />
          </>
        ))
      ) : (
        <p>No items in your cart.</p>
      )}
     </div>
    </div>
  );
};

export default Page;

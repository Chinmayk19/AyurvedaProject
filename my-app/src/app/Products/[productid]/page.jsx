// page.jsx
"use client";
import Navbar from "@/app/Components/Navbar";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Page = () => {
  const path = usePathname();
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;

  const { data, error } = useSWR(
    "https://ayurvedaproject-tepq.onrender.com/allproducts",
    fetcher
  );
  const handleAddToCart = async (productname) => {
    if (!session) {
      alert("You need to be logged in to add items to the cart.");
      return;
    }
    try {
      const response = await fetch(
        "https://ayurvedaproject-tepq.onrender.com/addtocart",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
            productId: productname,
          }),
        }
      );
      console.log(response);
      if (response.ok) {
        alert("Added to cart");
      } else {
        alert("Failed to add");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while adding item to cart.");
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="p-4">
  {error && <div className="text-red-500">Product Not found.</div>}
  {!data && <div>Loading...</div>}
  {data && data.filter(product => path.includes(product._id)).map(product => (
    <div key={product._id} className="flex flex-col md:flex-row justify-center border border-gray-300 p-4 rounded-lg mb-4 max-w-full md:max-w-3xl m-auto">
      <img src={product.productImage} alt={product.productName} className="w-full md:w-1/3 h-80 object-cover rounded-md" />
      <div className="md:ml-4 mt-4 md:mt-0 w-full md:w-2/3">
        <h1 className="text-xl md:text-2xl font-bold">{product.productName}</h1>
        <p className="mt-2 text-sm md:text-base">{product.productInfo}</p>
        <p className="mt-2 text-lg font-semibold">{product.productPrice}</p>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full md:w-auto"
          onClick={() => handleAddToCart(product._id)}
        >
          Add to cart
        </button>
      </div>
    </div>
  ))}
</div>

    </>
  );
};

export default Page;

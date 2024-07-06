import React from 'react';

const CartBox = ({ name, img, price }) => {
  return (
    <div className="flex flex-col md:flex-row w-96 bg-white rounded-lg shadow-md p-4 mb-4">
      <img src={img} alt={name} className="w-full h-52 object-cover rounded-lg" />
      <div className="mt-4 md:mt-0 md:ml-4 flex flex-col w-full">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-700 mt-2">${price}</p>
      </div>
    </div>
  );
};

export default CartBox;

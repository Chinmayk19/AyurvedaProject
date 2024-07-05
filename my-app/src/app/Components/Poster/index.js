import React from "react";
import Link from "next/link";

const Poster = () => {
  return (
    <div className="relative bg-cover bg-center h-96	">
      <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-blue-800 opacity-80 h-96"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-8">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the World of Ayurveda
        </h1>
        <Link href={"/Products"}>
          {" "}
          <button className="bg-white text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 hover:text-gray-900 transition duration-300">
            Explore Our Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Poster;

"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { signIn, signOut, useSession} from 'next-auth/react';


const Navbar = () => {
  const path = usePathname();
  const status=useSession();
  return (
    <nav className="bg-green-900 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-xl sm:text-2xl font-semibold">
            <span className="font-cursive">Ayurveda</span>
          </div>
          
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
            <Link href="/Products" className="text-white hover:text-gray-300">Products</Link>
          </div>
          
          {path === "/Products" && (
            <div className="hidden md:flex items-center space-x-2">
              <input 
                type="text" 
                placeholder="Search..." 
                className="px-2 py-1 rounded-lg bg-gray-700 text-white focus:outline-none" 
              />
              <button className="px-3 py-1 bg-white text-black rounded-lg">Search</button>
            </div>
          )}
          
          <div>
            {status.status==="authenticated"?<button className="px-4 py-2 bg-white rounded-lg text-black" onClick={()=>signOut()}>
              <p>Sign out</p>
            </button>:<button className="px-4 py-2 bg-white rounded-lg text-black" onClick={()=>signIn("google")}>
              <p>Sign Up</p>
            </button>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client"
import React from 'react'
import { signIn, signOut, useSession} from 'next-auth/react';

const page = () => {
  return (
    <div><button onClick={()=>signIn("google")}>submit</button></div>
  )
}

export default page
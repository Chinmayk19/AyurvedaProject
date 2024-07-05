import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import AyurvedaUser from "../../../../models/user";

export async function POST(request){
    const {name,email}= await request.json();
    await connectMongoDB();
    await AyurvedaUser.create({name,email,cart:[]});
    return NextResponse.json({message:"User Registered"},{status:201})
}
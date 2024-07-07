// import { connectMongoDB } from '../../../../lib/mongodb';
// import AyurvedaUser from '../../../../models/user';
// import { NextResponse } from 'next/server';

// export async function POST(request) {
//   try {
//     const { phoneNumber, password } = await request.json();
    
//     // Connect to MongoDB
//     await connectMongoDB();

//     // Check if the user already exists
//     const existingUser = await AyurvedaUser.findOne({ phoneNumber });
//     if (existingUser) {
//       return NextResponse.json({ message: 'User already exists' }, { status: 409 });
//     }

//     // Create a new user
//     await AyurvedaUser.create({ phoneNumber, password });

//     // Return success response
//     return NextResponse.json({ message: 'User registered' }, { status: 201 });
//   } catch (error) {
//     console.error('Error creating user:', error);
//     return NextResponse.json({ message: 'Error creating user', error: error.message }, { status: 500 });
//   }
// }

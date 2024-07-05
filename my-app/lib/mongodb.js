import mongoose from "mongoose";
export const connectMongoDB =async()=>{
    try{
        await mongoose.connect("mongodb+srv://student1234:student1234567890@cluster0.tnajmkf.mongodb.net/onlinetutor");
        console.log("Connected to mongodb")
    }catch(error){
        console.log("error connecting",error)
    }
}
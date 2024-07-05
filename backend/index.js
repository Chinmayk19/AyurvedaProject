const port=4000;
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const multer=require("multer");
const path=require("path");
const cors=require("cors");
const { error } = require("console");
const { type } = require("os");

app.use(express.json());
app.use(cors());

//Database connection with mondodb
mongoose.connect("mongodb+srv://student1234:student1234567890@cluster0.tnajmkf.mongodb.net/onlinetutor");

// API Creation

app.get("/",(req,res)=>{
    res.send("Express app is running")
})

// Image Storage Engine


// Schema for Product result
const Product=mongoose.model("Products",{
    productName:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    productInfo:{
        type:String,
        required:true
    },
    productPrice:{
        type:String,
        required:true
    },
    isAvailable:{
     type:Boolean,   
    }

})
const AyurvedaUser=mongoose.model("AyurvedaUser",{
    email: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      cart:{
        type:Array,
        default:[],
      }
})
app.get("/allproducts",async (req,res)=>{
    let results1=await Product.find({});
    res.send(results1);
})
app.post("/addtocart",async(req,res)=>{
    const email=req.body.email;
    const product=req.body.productId;
    console.log(product)
    if(!email){
        res.json({success:false,message:"Please login"});
    }
    if(!product){
        res.json({success:false,message:"product not found"});
    }
    const user = await AyurvedaUser.findOne({ email });
    console.log(user);
    if (!user) {
        console.log(`User with email ${email} not found.`);
        return NextResponse.json({ message: "User not found" }, { status: 404 });
      }
      user.cart.push(product);
      await user.save();
      res.json({success:true,message:"Saved"});
})

  
app.listen(port,(error)=>{
    if (!error){
        console.log("Server running on port "+port)
    }
    else{
        console.log("Error :"+ error);
    }
})


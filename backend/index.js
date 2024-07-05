const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require("console");
const { type } = require("os");

app.use(express.json());
app.use(cors());

//Database connection with mondodb
mongoose.connect(
  "mongodb+srv://student1234:student1234567890@cluster0.tnajmkf.mongodb.net/onlinetutor"
);

// API Creation

app.get("/", (req, res) => {
  res.send("Express app is running");
});

// Image Storage Engine

// Schema for Product result
const Product = mongoose.model("Products", {
  productName: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  productInfo: {
    type: String,
    required: true,
  },
  productPrice: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
  },
});
const AyurvedaUser = mongoose.model("AyurvedaUser", {
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
const Cart = mongoose.model("Cart", {
  email: {
    type: String,
    reuired: true,
  },
  ProductId: {
    type: String,
    reuired: true,
  },
});
app.get("/allproducts", async (req, res) => {
  let results1 = await Product.find({});
  res.send(results1);
});
app.post("/addtocart", async (req, res) => {
    const { email, productId } = req.body;
    try {
      if (!email) {
        return res.status(400).json({ success: false, message: "Please login" });
      }
      if (!productId) {
        return res.status(400).json({ success: false, message: "Product not found" });
      }
  
      const user = await AyurvedaUser.findOne({ email });
      if (!user) {
        console.log(`User with email ${email} not found.`);
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      const cart = new Cart({
        email: user.email,
        ProductId: productId,
      });
  
      await cart.save();
      return res.status(200).json({ success: true, message: "Added to cart" });
    } catch (error) {
      console.error("Internal Server Error:", error);
      return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  });
  

app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on port " + port);
  } else {
    console.log("Error :" + error);
  }
});

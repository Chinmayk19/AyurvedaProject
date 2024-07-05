import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const AyurvedaUser = mongoose.models.AyurvedaUser || mongoose.model("AyurvedaUser", userSchema);

export default AyurvedaUser;

import dotenv from "dotenv"
import mongoose from "mongoose";
const url=process.env.MONGODBURL
//  dotenv.config()
const connectDB =  async (second) => { 
    try {
     await mongoose.connect(url);
        // console.log("Successfully connected");
    } catch (error) {
        console.log(error);
    }
 }

 export default connectDB;

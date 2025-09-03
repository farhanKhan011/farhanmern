// import dotenv from "dotenv"
// import mongoose from "mongoose";
// const url=process.env.MONGODBURL
// //  dotenv.config()
// const connectDB =  async (second) => { 
//     try {
//      await mongoose.connect(url);
//         // console.log("Successfully connected");
//     } catch (error) {
//         console.log(error);
//     }
//  }

//  export default connectDB;


import mongoose from "mongoose";

const url = process.env.MONGO_URL; // Make sure Render env has MONGO_URL set

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
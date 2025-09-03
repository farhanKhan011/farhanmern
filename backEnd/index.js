// import express from 'express'
// import router from './router/auth_router.js' 
// //Cors
// import cors from 'cors';


// import error_middleware from './middlewares/error_middleware.js';
// // import mongoose from 'mongoose';
// import 'dotenv/config' ;
// import connectDB from './utils/db.js';
// const app = express()
// // cors configuration
// var corsOptions = {
//   origin: 'http://localhost:5173',
//   methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
//   credentials:true,

// }

// // Cors implementing inside express
// app.use(cors(corsOptions));

// app.use(express.json());
// app.use("/api/auth",router)
// app.use(error_middleware); // Error handling middleware


// // app.route('/').get( (req, res) => {
// //   res.send('From home page ')
// // })

// connectDB().then( (second) => { 
//   console.log("server is running smoothly!");
//  })




// app.listen(3000)

import express from "express";
import router from "./router/auth_router.js";
import cors from "cors";
import error_middleware from "./middlewares/error_middleware.js";
import "dotenv/config";
import connectDB from "./utils/db.js";

const app = express();

// CORS configuration
const corsOptions = {
  origin: [process.env.FRONTEND_URL, "http://localhost:5173"], // allow local + deployed frontend
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

// Apply middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", router);
app.use(error_middleware); // Error handling middleware

// Connect DB and start server
connectDB().then(() => {
  console.log("Database connected successfully!");
  const PORT = process.env.PORT || 3000; // Use Render's PORT or fallback to 3000
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
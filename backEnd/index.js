import express from 'express'
import router from './router/auth_router.js' 
//Cors
import cors from 'cors';


import error_middleware from './middlewares/error_middleware.js';
// import mongoose from 'mongoose';
import 'dotenv/config' ;
import connectDB from './utils/db.js';
const app = express()
// cors configuration
var corsOptions = {
  origin: 'http://localhost:5173',
  methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials:true,

}

// Cors implementing inside express
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth",router)
app.use(error_middleware); // Error handling middleware


// app.route('/').get( (req, res) => {
//   res.send('From home page ')
// })

connectDB().then( (second) => { 
  console.log("server is running smoothly!");
 })




app.listen(3000)
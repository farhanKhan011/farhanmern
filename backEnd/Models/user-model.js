import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// Creating Schema
// Schema defines the structer of our project db

const productSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: {
    type: String,
    required: true,
    unique:true 
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
// pre() method
productSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
};

    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);
      user.password = hash;
      next();
    } catch (error) {
      next(error);
    }
});

// Token function creation:

productSchema.methods.generateToken = async function () {
 try {
  
  return jwt.sign({
    userId: this._id.toString(),
    userEmail: this.email,
    isAdmin: this.isAdmin,
   },
   process.env.JWT_SECRET_KEY,
   {
     expiresIn: "5d",
   }
  );
 } catch (error) {
    console.log("Error generating token:", error);

  }
  
 }  

// password comparing 
productSchema.methods.isPasswordValid = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    console.log("Error comparing password:", error);
    return false;
  }
}


// making model
const registrationData = mongoose.model("Registration", productSchema);

export default registrationData;

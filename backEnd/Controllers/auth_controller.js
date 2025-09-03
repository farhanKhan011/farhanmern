// import registrationData from "../Models/user-model.js";
// import Contact from "../Models/contact_model.js";
// import bcrypt from "bcryptjs";

// const home = async (req, res) => {
//   try {
//     res.send("from controller page ");
//   } catch (error) {
//     console.log(error);
//   }
// };

// const registration = async (req, res) => {
//   try {
//     const { username, email, phone, address, password } = req.body;
//     console.log(req.body);
//     // email existness checking
//     const userExist = await registrationData.findOne({ email: email });
//     if (userExist) {
//       console.log("Duplicate Email attempt for : ", email); // for clearity at log
//       // return res.status(400).json({ message: "email already exist" }); // 400 is bad error
//       return res.status(400).json({ errors: { email: "Email already exists" } });

//     } else {
//       const bcryptData = await registrationData.create({
//         username,
//         email,
//         phone,
//         address,
//         password,
//       });
//       res.status(200).json({
//         message: bcryptData,
//         token: await bcryptData.generateToken(),
//         userId: bcryptData._id.toString(),
//       });
//     }
//   } catch (error) {
//     // res.status(500).json("Something Went Wrong!", error);
//     next(error); // Pass the error to the error middleware
//   }
// };

// const login = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;

//     const userExist = await registrationData.findOne({ email: email });
//     if (!userExist) {
//       // return res.status(400).json({ message: "Invalid credentials" });
//       const error = new Error("Invalid credentials");
//       error.status = 400;
//       return next(error); 
//     } else {
//       const isPasswordValid = await userExist.isPasswordValid(password);
//       // const isPasswordValid = await bcrypt.compare(password, userExist.password);
//       if (isPasswordValid) {
//         return res.status(200).json({
//           message: "Login successful",
//           token: await userExist.generateToken(),
//           userId: userExist._id.toString(),
//         });
//       } else {
//         return res
//           .status(400)
//           .json({ message: "sorry ! your passwor is incorrect " });
//       }
//     }
//   } catch (error) {
//     // res.status(500).json("Something Went Wrong!", error);
//     next(error);
//   }
// };


// // creating a contact form controller
// const contactData = async (  req,res, next )=>{
//   try {
//     const {username, email, message} = req.body;
    
//   if (!username || !email || !message) {
//     return res.status(400).json({ message: "All fields are required." });
//   }else {
//     const contactData = await Contact.create({
//       username,
//       email,
//       message,
//     });
//     return res.status(200).json({
//       message: "Contact form submitted successfully",
//       data: contactData,
//     });
//   }
//   }catch (error) {
//     next(error);
// }}

// export { home, registration, login, contactData };



import registrationData from "../Models/user-model.js";
import Contact from "../Models/contact_model.js";
import bcrypt from "bcryptjs";
import { request } from "express";

const home = async (req, res) => {
  try {
    res.send("from controller page ");
  } catch (error) {
    console.log(error);
  }
};

const registration = async (req, res, next) => {
  try {
    const { username, email, phone, address, password } = req.body;
    console.log(req.body);
    // email existence checking
    const userExist = await registrationData.findOne({ email: email });
    if (userExist) {
      console.log("Duplicate Email attempt for : ", email);
      return res.status(400).json({
        errors: {
          email: "Email already exists",
        },
      });
    } else {
      const bcryptData = await registrationData.create({
        username,
        email,
        phone,
        address,
        password,
      });
      res.status(200).json({
        message: bcryptData,
        token: await bcryptData.generateToken(),
        userId: bcryptData._id.toString(),
      });
    }
  } catch (error) {
    next(error); // Pass error to error middleware
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userExist = await registrationData.findOne({ email: email });
    if (!userExist) {
      const error = new Error("Invalid credentials");
      error.status = 400;
      return next(error);
    } else {
      const isPasswordValid = await userExist.isPasswordValid(password);
      if (isPasswordValid) {
        return res.status(200).json({
          message: "Login successful",
          token: await userExist.generateToken(),
          userId: userExist._id.toString(),
        });
      } else {
        return res.status(400).json({
          errors: {
            password: "Sorry! Your password is incorrect",
          },
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

// creating a contact form controller
const contactData = async (req, res, next) => {
  try {
    const { username, email, message } = req.body;

    if (!username || !email || !message) {
      return res.status(400).json({
        errors: {
          general: "All fields are required.",
        },
      });
    } else {
      const contactData = await Contact.create({
        username,
        email,
        message,
      });
      return res.status(200).json({
        message: "Contact form submitted successfully",
        data: contactData,
      });
    }
  } catch (error) {
    next(error);
  }
};

// New controller to fetch all user data
const userData = async (req, res, next) => {
  try {
        const userData = req.user;// Assuming user data is attached to req.user by authentication middleware
    // if (!userData) {
    //   return res.status(404).json({ message: "User not found" });
    // }  
    console.log(userData);
    
    return res.status(200).json({userData});

  } catch (error) {
    next(error);
  }
}










export { home, registration, login, contactData,userData };

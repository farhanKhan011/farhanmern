// const userAuthMiddleware = (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.status(401).json({
//         errors: {
//             general: "Authorization header missing or malformed",
//         },
//       });
//     }   
//     const token = authHeader.split(" ")[1];
//     if (!token) {
//       return res.status(401).json({
//         errors: {
//             general: "Token missing",
//         },
//       });
//     }
//     // Verify token (you can use libraries like jsonwebtoken for this)
//     // For demonstration, let's assume the token is valid and contains user info
//     // In a real application, you would verify the token and extract user info from it
//     req.user = { id: "userIdFromToken", email: "userEmailFromToken" }; // Example user data
//     next(); // Proceed to the next middleware or route handler
//   }
//     catch (error) {
//     return res.status(401).json({
//       errors: {
//           general: "Invalid token",
//       },
//     });
//   }     
// };

// export default userAuthMiddleware;
import jwt from "jsonwebtoken";
import Product from "../Models/user-model.js";
const userAuthMiddleware =async (req,res,next)=>{

    const token = req.header("Authorization");
    if(!token){
        return res.status(401).json({message:"No token provided, authorization denied"});
    }
    // Removing 'Bearer ' from the token string if it exists
    const jwtToken = token.replace("Bearer ","").trim();

        console.log("Token found:", jwtToken);
        try {
            const isVerified = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);

            const userData = await Product.findOne({email:isVerified.userEmail}).select({
                password:0,
                phone:0,
                address:0,
                __v:0
            }); 
            console.log(userData);
                // Custom properties
            req.user = userData; // Email 
            req.token = jwtToken;
            req.userId =userData._id.toString();

            next();
        } catch (error) {
            return res.status(401).json({message:"Token is not valid"});
        }

}

export default userAuthMiddleware;
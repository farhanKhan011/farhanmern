const validator = (schema) => async (req, res, next) => {
  
try {
  const parsebody = await schema.parseAsync(req.body);
  req.body = parsebody;
  next();
} 
// catch (err) {
//   const status = 401;
//   const message = "please fill out fields properly"
//   const extraDetails = err.errors[0].message;  
//   // console.log(err);
//   // res.status(400).json({msg:message})
//   const error = {
//     status,
//     message,
//     extraDetails,
//   }
//   console.log(error);
//   next(error); // Pass the error to the error middleware  
// }
catch (err) {
  const status = 400; // 400 is better for validation errors
  const errors = {};

  // err.errors is an array from your validation library
  err.errors.forEach((e) => {
    errors[e.path] = e.message; // e.path is the field name
  });

  const error = {
    status,
    errors, // this is the new structured errors object
  };

  next(error);
}





  // catch (error) {
  //   // Zod errors: error.errors is an array of objects
  //   if (Array.isArray(error.errors) && error.errors.length > 0) {
  //     return res.status(400).json({
  //       message: "Validation error",
  //       error: error.errors[0].message,
  //     });
  //   }
  //   // If error.message is a stringified array, parse and show first message
  //   if (typeof error.message === "string" && error.message.startsWith("[")) {
  //     try {
  //       const arr = JSON.parse(error.message);
  //       if (Array.isArray(arr) && arr.length > 0 && arr[0].message) {
  //         return res.status(400).json({
  //           message: "Validation error",
  //           error: arr[0].message,
  //         });
  //       }
  //     } catch (e) {
  //       // Not a JSON string, continue
  //     }
  //   }
  //   // Otherwise, show the error message
  //   return res.status(400).json({
  //     message: "Validation error",
  //     error: error.message || error,
  //   });
  // }
};

export default validator;
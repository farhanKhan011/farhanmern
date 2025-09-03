// const error_middleware = (err, req, res, next) => {

//     const status = err.status || 500;
//     const message = err.message || "Internal Server Error";
//     const extraDetails = err.extraDetails || "Error details not provided";
//     return res.status(status).json({
//         message,extraDetails
//     })


// }   
const error_middleware = (err, req, res, next) => {
  const status = err.status || 500;

  if (err.errors) {
    // Send structured field errors when available
    return res.status(status).json({ errors: err.errors });
  }

  // fallback for other errors
  const message = err.message || "Internal Server Error";
  return res.status(status).json({ message });
}

export default error_middleware;
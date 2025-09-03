// import { useState} from 'react';
// import { EnvelopeIcon, LockClosedIcon, } from '@heroicons/react/24/outline';
// import { GoogleIcon, GitHubIcon } from '../Components/SocialIcons'; // You'll need to create these SVG components
// import { Link } from 'react-router-dom';
// import Navbar from '../Components/Navbar';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../store/ContextApi';


// // Login Page Component
// const LoginPage = () => {
//   const navigate = useNavigate();

//   const { storeTokenLSF } = useAuth();
//   const [userFormData, setUserFormData] = useState({
//      username:"",
//     email:"",
//     password: "",
//   })
//  const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;

//     setUserFormData({ ...userFormData, [name]: value });

//     // console.log(userFormData);
//   };
//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     console.log(userFormData);
//     // making connections
// try {
  
//     const response = await fetch(`http://localhost:3000/api/auth/login`,{
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json",

//       },
//       body:JSON.stringify(userFormData)

//     })
// // cleaning the form after submitting
// if(response.ok){

//   const responseData = await response.json()
//   // localStorage.setItem("token",responseData.token);
//   storeTokenLSF(responseData.token);

//   setUserFormData({
//     // username:"",
//     email:"",
//     password:""
//   })
//   alert("Login Successfully😊")
//   navigate("/",{replace:true}); 


// }

//     console.log(response);
// } catch (error) {
//   console.log("login : ",error);
// }


//   };

//   return (
//     <>
//     <Navbar />
//     <div className="min-h-screen bg-gradient-to-tr dark:from-black dark:via-[#1A1D23] dark:to-black from-[#FFF0F0] via-[#E5E5E5] to-[#FFF0F0] flex items-center justify-center p-4">
//       {/* Glass Effect Container */}
//       <div className="backdrop-blur-lg bg-black/30 rounded-2xl shadow-2xl border border-white/10 w-full max-w-md p-8 transition-all hover:bg-black/40">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold dark:text-emerald-400 mb-2 text-black">Welcome Back</h1>
//           <p className="text-gray-300">Sign in to continue your journey</p>
//         </div>

//         {/* Login Form */}
//         <form className="space-y-6" autoComplete='off'  onSubmit={handleSubmit}>

// {/* username input */}
// <div>
//            { /*    <label className="block  dark:text-gray-300 mb-2  " htmlFor='em' >username</label>
//          <div className="relative ">
//                 <UserIcon className="h-5 w-5 text-emerald-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//               <input
//                 type="text"
//                 id='nam'
//                 name='username'
//                 value={userFormData.username}
//                 onChange={(e) => handleChange(e)}
//                 className="w-full pl-10 pr-4 py-3 bg-black/20 rounded-lg border  border-white/40 dark:border-white/10 focus:border-emerald-400 focus:outline-none   
//                 dark:text-gray-100  dark:placeholder-gray-400 placeholder-gray-200 transition-all "
//                 placeholder="username"
//               />
//             </div> 
//              */}
//           </div>


//           {/* Email Input */}
//           <div>
//             <label className="block  dark:text-gray-300 mb-2  " htmlFor='em' >Email</label>
//             <div className="relative ">
//               <EnvelopeIcon className="h-5 w-5 text-emerald-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//               <input
//                 type="email"
//                 id='em'
//                 name='email'
//                 value={userFormData.email}
//                 onChange={(e) => handleChange(e)}
//                 className="w-full pl-10 pr-4 py-3 bg-black/20 rounded-lg border  border-white/40 dark:border-white/10 focus:border-emerald-400 focus:outline-none   
//                 dark:text-gray-100  dark:placeholder-gray-400 placeholder-gray-200 transition-all "
//                 placeholder="your@email.com"
//               />
//             </div>
//           </div>

//           {/* Password Input */}
//           <div>
//             <label className="block dark:text-gray-300 mb-2 text-black">Password</label>
//             <div className="relative">
//               <LockClosedIcon className="h-5 w-5 text-emerald-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//               <input
//                 type="password"
//                 value={userFormData.password}
//                 name='password'
//                 onChange={(e)=> handleChange(e)}
//                 className="w-full pl-10 pr-4 py-3 bg-black/20 rounded-lg border dark:border-white/10 border-white/40 focus:border-emerald-400 focus:outline-none text-gray-100 dark:placeholder-gray-400 placeholder-gray-200 transition-all  "
//                 placeholder="••••••••"
//               />
//             </div>
//           </div>

//           {/* Remember & Forgot Password */}
//           <div className="flex items-center justify-between">
//             <label className="flex items-center space-x-2 text-gray-300">
//               <input type="checkbox" className="rounded bg-black/20 border-white/10 text-emerald-400 focus:ring-emerald-400" />
//               <span>Remember me</span>
//             </label>
//             <Link href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">Forgot Password?</Link>
//           </div>

//           {/* Login Button */}
//           <button className="w-full bg-emerald-400/90 hover:bg-emerald-300 text-black py-3 rounded-lg font-semibold transition-all transform hover:scale-[1.01]">
//             Sign In
//           </button>

//           {/* Social Login Divider */}
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-white/10"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-transparent text-gray-300">Or continue with</span>
//             </div>
//           </div>

//           {/* Social Login Buttons */}
//           <div className="flex space-x-4">
//             <button className="w-full flex items-center justify-center gap-2 bg-black/20 hover:bg-black/30 text-gray-300 py-3 rounded-lg border border-white/10 transition-all">
//               <GoogleIcon className="w-5 h-5" />
//               <span>Google</span>
//             </button>
//             <button className="w-full flex items-center justify-center gap-2 bg-black/20 hover:bg-black/30 text-gray-300 py-3 rounded-lg border border-white/10 transition-all">
//               <GitHubIcon className="w-5 h-5" />
//               <span>GitHub</span>
//             </button>
//           </div>

//           {/* Sign Up Link */}
//           <p className="text-center text-gray-300">
//             Don&apos;t have an account?{' '}
//             <Link to="/registration"  className="text-emerald-400 hover:text-emerald-300 transition-colors">Sign up</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//     </>
//   );
// };

// export default LoginPage;
import { useState } from 'react';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { GoogleIcon, GitHubIcon } from '../Components/SocialIcons';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/ContextApi';

// Login Page Component
const LoginPage = () => {
  const navigate = useNavigate();
  const { storeTokenLSF } = useAuth();

  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });

  // State for showing backend validation errors
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors

    try {
      const response = await fetch(`http://localhost:3000/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userFormData),
      });

      const data = await response.json(); // Always parse JSON

      if (!response.ok) {
        // Show backend validation errors
        if (data.errors) {
          setErrors(data.errors); // e.g., { password: "Incorrect password" }
        } else if (data.message) {
          setErrors({ general: data.message });
        }
        return; // Stop execution if login failed
      }

      // Success
      storeTokenLSF(data.token);
      setUserFormData({ email: "", password: "" });
      alert("Login Successfully 😊");
      navigate("/", { replace: true });
    } catch (error) {
      console.log("Login error:", error);
      setErrors({ general: "Something went wrong. Please try again." });
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-tr dark:from-black dark:via-[#1A1D23] dark:to-black from-[#FFF0F0] via-[#E5E5E5] to-[#FFF0F0] flex items-center justify-center p-4">
        {/* Glass Effect Container */}
        <div className="backdrop-blur-lg bg-black/30 rounded-2xl shadow-2xl border border-white/10 w-full max-w-md p-8 transition-all hover:bg-black/40">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold dark:text-emerald-400 mb-2 text-black">Welcome Back</h1>
            <p className="text-gray-300">Sign in to continue your journey</p>
          </div>

          {/* General error message */}
          {errors.general && (
            <p className="text-red-500 text-center mb-4">{errors.general}</p>
          )}

          {/* Login Form */}
          <form className="space-y-6" autoComplete='off' onSubmit={handleSubmit}>

            {/* Email Input */}
            <div>
              <label className="block dark:text-gray-300 mb-2" htmlFor='em'>Email</label>
              <div className="relative">
                <EnvelopeIcon className="h-5 w-5 text-emerald-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="email"
                  id='em'
                  name='email'
                  value={userFormData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-black/20 rounded-lg border border-white/40 dark:border-white/10 focus:border-emerald-400 focus:outline-none dark:text-gray-100 dark:placeholder-gray-400 placeholder-gray-200 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block dark:text-gray-300 mb-2 text-black">Password</label>
              <div className="relative">
                <LockClosedIcon className="h-5 w-5 text-emerald-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="password"
                  value={userFormData.password}
                  name='password'
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-black/20 rounded-lg border dark:border-white/10 border-white/40 focus:border-emerald-400 focus:outline-none text-gray-100 dark:placeholder-gray-400 placeholder-gray-200 transition-all"
                  placeholder="••••••••"
                />
              </div>
              {/* Show password-specific backend errors */}
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Remember & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-gray-300">
                <input type="checkbox" className="rounded bg-black/20 border-white/10 text-emerald-400 focus:ring-emerald-400" />
                <span>Remember me</span>
              </label>
              <Link to="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">Forgot Password?</Link>
            </div>

            {/* Login Button */}
            <button className="w-full bg-emerald-400/90 hover:bg-emerald-300 text-black py-3 rounded-lg font-semibold transition-all transform hover:scale-[1.01]">
              Sign In
            </button>

            {/* Social Login Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-gray-300">Or continue with</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex space-x-4">
              <button className="w-full flex items-center justify-center gap-2 bg-black/20 hover:bg-black/30 text-gray-300 py-3 rounded-lg border border-white/10 transition-all">
                <GoogleIcon className="w-5 h-5" />
                <span>Google</span>
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-black/20 hover:bg-black/30 text-gray-300 py-3 rounded-lg border border-white/10 transition-all">
                <GitHubIcon className="w-5 h-5" />
                <span>GitHub</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-gray-300">
              Don&apos;t have an account?{' '}
              <Link to="/registration" className="text-emerald-400 hover:text-emerald-300 transition-colors">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
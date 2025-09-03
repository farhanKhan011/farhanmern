
import { useState } from "react";
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
  PhoneIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { GoogleIcon, GitHubIcon } from "../Components/SocialIcons";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/ContextApi";

const SignupPage = () => {
  const navigate = useNavigate();
  const {storeTokenLSF} = useAuth();
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  // Error state for field errors & general errors
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Clear old errors

    try {
      const response = await fetch(`http://localhost:3000/api/auth/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userFormData),
      });

      const data = await response.json(); // Parse JSON from backend

      console.log("Response status:", response.status);
      console.log("Response data:", data);

      if (!response.ok) {
        // If backend sent field errors
        if (data.errors && typeof data.errors === "object") {
          setErrors(data.errors);
        } else if (data.message) {
          setErrors({ general: data.message });
        } else {
          setErrors({ general: "Registration failed. Please try again." });
        }
        return; // stop here on error
      }
      // Success - clear form, notify and navigate
    
      setUserFormData({
        username: "",
        email: "",
        phone: "", 
        address: "",
        password: "",
      });

      alert("Registration Successful");
      navigate("/login");
      if(response.ok){
        // const responseData = await response.json()
        // const responseData = await data;
          // console.log("Registration RD: ", responseData);
          if(data.token){
            
            storeTokenLSF(data.token);
            console.log("Token stored in localStorage:", data.token);
          }else{
            console.log("No token data in response",data);
          }
          // storeTokenLSF(data.token);
      }
    }
    catch (error) {
      console.error("Registration error:", error);
      setErrors({ general: "Something went wrong. Please try again." });
    }
    };


  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-tr dark:from-black dark:via-[#1A1D23] dark:to-black from-[##FFF0F0] via-[#E5E5E5] to-[##FFF0F0] flex items-center justify-center p-4">
        <div className="backdrop-blur-lg bg-black/30 rounded-2xl shadow-2xl border border-white/10 w-full max-w-md p-8 transition-all hover:bg-black/40">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold dark:text-emerald-400 mb-2 text-black">
              Create Account
            </h1>
            <p className="text-gray-300">Join us to start your journey</p>
          </div>

          {/* General error message */}
          {errors.general && (
            <p className="text-red-500 text-center mb-4">{errors.general}</p>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <label className="block dark:text-gray-300 mb-2" htmlFor="nam">
                Username
              </label>
              <div className="relative">
                <UserIcon className="h-5 w-5 text-emerald-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  value={userFormData.username}
                  id="nam"
                  name="username"
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-black/20 rounded-lg border border-white/40 dark:border-white/10 focus:border-emerald-400 focus:outline-none dark:text-gray-100 dark:placeholder-gray-400 placeholder-gray-200 transition-all"
                  placeholder="yourusername"
                />
              </div>
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block dark:text-gray-300 mb-2" htmlFor="em">
                Email
              </label>
              <div className="relative">
                <EnvelopeIcon className="h-5 w-5 text-emerald-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="email"
                  id="em"
                  name="email"
                  value={userFormData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-black/20 rounded-lg border border-white/40 dark:border-white/10 focus:border-emerald-400 focus:outline-none dark:text-gray-100 dark:placeholder-gray-400 placeholder-gray-200 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block dark:text-gray-300 mb-2" htmlFor="ph">
                Phone Number
              </label>
              <div className="relative">
                <PhoneIcon className="h-5 w-5 text-emerald-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  id="ph"
                  name="phone"
                  value={userFormData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-black/20 rounded-lg border border-white/40 dark:border-white/10 focus:border-emerald-400 focus:outline-none dark:text-gray-100 dark:placeholder-gray-400 placeholder-gray-200 transition-all"
                  placeholder="+1234567890"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block dark:text-gray-300 mb-2" htmlFor="add">
                Address
              </label>
              <div className="relative">
                <HomeIcon className="h-5 w-5 text-emerald-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  id="add"
                  name="address"
                  value={userFormData.address}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-black/20 rounded-lg border border-white/40 dark:border-white/10 focus:border-emerald-400 focus:outline-none dark:text-gray-100 dark:placeholder-gray-400 placeholder-gray-200 transition-all"
                  placeholder="Your address"
                />
              </div>
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block dark:text-gray-300 mb-2" htmlFor="ps">
                Password
              </label>
              <div className="relative">
                <LockClosedIcon className="h-5 w-5 text-emerald-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="password"
                  id="ps"
                  name="password"
                  value={userFormData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-black/20 rounded-lg border dark:border-white/10 border-white/40 focus:border-emerald-400 focus:outline-none text-gray-100 dark:placeholder-gray-400 placeholder-gray-200 transition-all"
                  placeholder="••••••••"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center">
              <label className="flex items-center space-x-2 text-gray-300">
                <input
                  type="checkbox"
                  className="rounded bg-black/20 border-white/10 text-emerald-400 focus:ring-emerald-400"
                />
                <span>
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-emerald-400/90 hover:bg-emerald-300 text-black py-3 rounded-lg font-semibold transition-all transform hover:scale-[1.01] active:bg-emerald-600 active:text-white">
              Create Account
            </button>

            {/* Social Login */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-gray-300">
                  Or sign up with
                </span>
              </div>
            </div>

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

            {/* Login Link */}
            <p className="text-center text-gray-300">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignupPage;

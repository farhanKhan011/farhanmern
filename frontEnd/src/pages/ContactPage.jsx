import { useAuth } from "../store/ContextApi";
import { useEffect, useState } from "react";
import {
  UserIcon,
  EnvelopeIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const ContactPage = () => {
  
  
  const [contactFormData, setContactFormData] = useState({
    username: "",
    email: "",
    message: ""
  });


  //  const [userData, setUserData] = useState(null);
  const {user,logedIn} = useAuth();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactFormData({
      ...contactFormData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactFormData);
  };
 
// keeping the name and email field auto filled if user is logged in
// if(userData && user){
//   setContactFormData({
//       username: userData.name ,
//       email: userData.email ,
//       message: "",
// });

// setUserData(false);
// }
useEffect(() => {
  if(logedIn && user){
    setContactFormData({
      username: user.username ||"",
      email: user.email ||"",
      message: "",  
    });
  }else{
    setContactFormData({  
      username: "your name",
      email: " yourEmail@example.com",
      message: "",  
    });
  }
},[user,logedIn]);





  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-tr dark:from-black dark:via-[#1A1D23] dark:to-black from-[##FFF0F0] via-[#E5E5E5] to-[##FFF0F0] flex items-center justify-center p-4">
        {/* Glass Effect Container */}
        <div className="backdrop-blur-lg bg-black/30 rounded-2xl shadow-2xl border border-white/10 w-full max-w-md p-8 transition-all hover:bg-black/40">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold dark:text-emerald-400 mb-2 text-black">
              Contact Us
            </h1>
            <p className="text-gray-300">We would love to hear from you!</p>
          </div>

          {/* Contact Form */}
          <form
            className="space-y-6"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            {/* Name Input */}
            <div>
              <label className="block dark:text-gray-300 mb-2">Your Name</label>
              <div className="relative">
                <UserIcon className="h-5 w-5 text-emerald-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  name="username"
                  onChange={(e) => handleChange(e)}
                  className="w-full pl-10 pr-4 py-3 bg-black/20 rounded-lg border border-white/40 dark:border-white/10 focus:border-emerald-400 focus:outline-none dark:text-gray-100 dark:placeholder-gray-400 placeholder-gray-200 transition-all"
                  placeholder="John Doe"
                  value={contactFormData.username}
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block dark:text-gray-300 mb-2">Email</label>
              <div className="relative">
                <EnvelopeIcon className="h-5 w-5 text-emerald-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="email"
                  name="email"
                  onChange={(e) => handleChange(e)}
                  className="w-full pl-10 pr-4 py-3 bg-black/20 rounded-lg border border-white/40 dark:border-white/10 focus:border-emerald-400 focus:outline-none dark:text-gray-100 dark:placeholder-gray-400 placeholder-gray-200 transition-all"
                  placeholder="your@email.com"
                  value={contactFormData.email}
                />
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label className="block dark:text-gray-300 mb-2">Message</label>
              <div className="relative">
                <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-emerald-400 absolute left-3 top-4" />
                <textarea
                  
                  onChange={(e) => handleChange(e)}
                  name="message"
                  className="w-full pl-10 pr-4 py-3 bg-black/20 rounded-lg border border-white/40 dark:border-white/10 focus:border-emerald-400 focus:outline-none dark:text-gray-100 dark:placeholder-gray-400 placeholder-gray-200 transition-all resize-none min-h-[120px]"
                  placeholder="Your feedback or question..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-emerald-400/90 hover:bg-emerald-300 text-black py-3 rounded-lg font-semibold transition-all transform hover:scale-[1.01]">
              Send Message
            </button>

            {/* Back to Home Link */}
            <p className="text-center text-gray-300">
              <Link
                to="/"
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                ← Back to Home
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

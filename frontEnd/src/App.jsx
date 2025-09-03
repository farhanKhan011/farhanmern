// import react from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import "./index.css";
import { FaChevronUp } from "react-icons/fa";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/Gallery";
import LoginPage from "./pages/Loginpage";
import SignupPage from "./pages/Registrationpage";
import About from "./pages/About";
// import { CgDarkMode } from 'react-icons/cg'
import Error404 from "./pages/Error404";
import Logout from "./pages/Logout";

function App() {
  const handleCaretClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GalleryPage />} />
          {/* <Route   path='/login' element={<LoginPage />}  />
  <Route   path='/registration' element={<SignupPage />}  /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<SignupPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/Logout" element={<Logout />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
        
      </BrowserRouter>
      {/* creating 404 error , for returning a page of unknown url.  */}

      <div
        className="bg-[#ffffff17] w-15 fixed right-3 bottom-3 cursor-pointer hover:bg-transparent  "
        onClick={handleCaretClick}
      >
        {" "}
        <FaChevronUp className="text-6xl text-white border-1 bg-transparent active:bg-[#ffffff6b] active:text-[#00df8a]" />
      </div>
    </>
  );
}

export default App;

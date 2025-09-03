import { useRef } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
// Import your images
import img1 from '../assets/gallery.png';
import img2 from '../assets/gallery1.png';
import img3 from '../assets/gallery2.png';
import img4 from '../assets/gallery3.png';
import img5 from '../assets/gallery4.png';
import img6 from '../assets/gallery5.png';
import img7 from '../assets/gallery6.png';
import img8 from '../assets/gallery7.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const GalleryPage = () => {
  const scrollContainer = useRef(null);
  const customImages = [img1, img2, img3, img4, img5 ,img6 , img7 , img8 ]; // Add all your images

  const scroll = (scrollOffset) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <>
      <Navbar />
    <div className="min-h-screen flex flex-col">
      
      <div className="
      bg-gradient-to-br 
      from-emerald-200 via-white to-gray-200
      dark:from-emerald-900 dark:via-black dark:to-gray-800 flex-1 flex flex-col items-center justify-center relative">
        <br />
        <h1 className="text-4xl font-bold  dark:text-white mb-4">Gallery</h1>
        
        {/* Scroll buttons */}
        <button 
          onClick={() => scroll(-300)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-white/50 p-4 rounded-full z-10 ml-4 transition-all  "
        >
          {/* Left arrow icon */}
          {<FaChevronLeft className='text-emerald-500 text-5xl ' /> }
        </button>

        <button 
          onClick={() => scroll(300)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-white/50 p-4 rounded-full z-10 mr-4 transition-all   "
        >
          {/* Right arrow icon */}
          {<FaChevronRight className='text-emerald-500 text-5xl' /> }

        </button>

        {/* Scrollable container */}

        <div 
          ref={scrollContainer}
          className="flex overflow-x-auto scroll-smooth space-x-4 px-4 py-8 w-full max-w-screen-xl text-black  "
          style={{ scrollBehavior: 'smooth' }}
        >
          {customImages.map((imageSrc, index) => (
            <div key={index} className="min-w-[300px] bg-white   bg-gradient-to-br   dark:from-to-gray-800 dark:via-black  rounded shadow-md p-4 flex-shrink-0 ">
              <img 
                src={imageSrc} 
                alt={`Custom Image ${index + 1}`} 
                className="min-w-[400px] w-[400px] h-[550px] "
                loading='lazy'
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default GalleryPage;
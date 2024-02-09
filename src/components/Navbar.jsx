import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
  const navComp = ['About', 'Project', 'Contact'];

  const [showDropdown, setShowDropdown] = useState(false);

  const handleNavClick = (index) => {

    setShowDropdown(false);
  
    switch (index) {
      case 0:
        scroll.scrollTo('about', {
          smooth: true,
          duration: 1000,
          offset: -50,
        });
        break;
      case 1:
        scroll.scrollTo('project', {
          smooth: true,
          duration: 1000,
          offset: -50,
        });
        break;
      case 2:
        scroll.scrollTo('contact', {
          smooth: true,
          duration: 1000,
          offset: -50,
        });
        break;
      default:
        break;
    }
  };
  

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className='fixed w-[98%] z-10'>
        <div className="hidden md:flex p-3 justify-between filter drop-shadow-xl items-center border-2 border-gray-700 bg-transparent rounded-lg backdrop-blur-sm">
          <div>
            <h1 className="text-4xl font-bold text-[#FFF7D4] font-IbmplexMono cursor-pointer" onClick={() =>scroll.scrollToTop({smooth : true,
            duration : 200 })}>gaurav.dev</h1>
          </div>
          <div>
            {navComp.map((item, index) => (
              <Link
                key={index}
                to={index === 0 ? "about" : index === 1 ? "project" : "contact"}
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
                className="text-lg text-white font-VarelaRound font-light relative cursor-pointer mr-16 hover:"
                onClick={() => handleNavClick(index)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Normal Navbar for larger devices */}

      {/* Dropdown for small devices */}
      <div className="md:hidden p-3 justify-between flex flex-row filter drop-shadow-xl items-center border-2 border-gray-700 bg-transparent rounded-lg backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-[#FFF7D4] font-IbmplexMono">gaurav.dev</h1>
        <button
          className="text-lg text-white font-VarelaRound font-light relative cursor-pointer flex items-center"
          onClick={toggleDropdown}
        >
          <img className='h-6 w-6' src='/menu.svg' alt="Menu" />
        </button>
        {showDropdown && (
          <div className="absolute right-2 top-16 border-2 border-gray-700 filter drop-shadow-xl  backdrop-blur-sm w-1/3 rounded-lg shadow-2xl">
            {navComp.map((item, index) => (
              <Link
                key={index}
                to={index === 0 ? "about" : index === 1 ? "project" : "contact"}
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
                className="block w-full py-2 px-4 text-white hover:bg-gray-700"
                onClick={() => handleNavClick(index)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;

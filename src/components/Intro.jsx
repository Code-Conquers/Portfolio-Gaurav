import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Element, scroller } from "react-scroll";

function Intro() {
  const projectsRef = React.useRef(null);

  const scrollToProjects = () => {
    scroller.scrollTo("projects", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  };

  return (
    <>
      <div>
        <div className="flex flex-col justify-between md:flex-row p-10">
          {/* Introduction  */}
          <div className="md:flex flex-col md:items-start p-9">
            <div className="text-[#FFF7D4] font-bold text-5xl md:text-6xl font-PoorStory leading-tight md:mr-4">
              <span className="md:mr-2">Hey, I am <br /></span>
              <span>Gaurav Paliwal</span>
            </div>

            <h1 className="text-[#FFF7D4] font-bold text-2xl md:text-3xl font-IbmplexMono pt-8 md:pt-4">
              <span className="text-[#C9D7DD] font-bold text-2xl md:text-3xl pt-4 md:pt-0">
                <Typewriter
                  words={["React Native Developer", "Flutter Developer"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={120}
                  deleteSpeed={90}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>

          {/* Description and button */}
          <div className="md:flex flex-col justify-end md:p-9 pl-9 md:px-32 ">
            <div className="text-xl text-[#C9D7DD] font-VarelaRound font-semibold mb-6 md:text-2xl">
            <br/>I develop Web Apps and Android apps.
            </div>
            {/* <div className="group" onClick={scrollToProjects}>
              <div className="w-52 h-14 bg-[#FFF7D4] rounded-tl-3xl rounded-br-3xl cursor-pointer text-xl text-[#122049] font-IbmplexMono font-bold flex justify-center items-center ">
                <button>My Projects</button>
                <div className="relative top-0 -inset-full h-full w-1/4 z-5 transform -skew-x-12 bg-gradient-to-r from-[#020103] to-transparent opacity-20 group-hover:animate-shine" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
  
    </>
  );
}

export default Intro;


import React, { useState, useRef } from "react";
import { Tilt } from "react-tilt";
import Language from "./Language";
import ThreeDModelCanvas from "../canvas/3Dmodel";

function About() {
  const handleResumeClick = () => {
    // Replace 'resume_link' with the actual URL of your resume
    const resumeLink =
      "https://drive.google.com/file/d/1tPcdaWmqMoyZsM_1hNrP8WDDDWquV7Zq/view?usp=sharing";
    window.open(resumeLink, "_blank");
  };

  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 10, // max tilt rotation (degrees)
    perspective: 4000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, etc.
    speed: 500, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <>
      <div className="flex flex-row justify-around items-center ">
        <div className="flex flex-col p-12 filter md:h-1/2 md:w-1/2 mr-34">
          <Tilt options={defaultOptions}>
            <div className="flex flex-col drop-shadow-2xl items-start border-2 border-gray-700 bg-transparent rounded-xl backdrop-blur-sm p-12 mt-4">
              <span className="md:text-5xl text-3xl font-bold font-PoorStory text-[#FFF7D4]">
                About Me
              </span>
              <span className="md:text-xl text-sm font-medium font-IbmplexMono text-[#C9D7DD] p-2">
                I am a third year student pursuing Computer science and
                engineering with specialization in artificial intelligence at
                Parul University. My interest fields are machine learning,
                artificial intelligence and Software systems. Which I'm learning
                through my pursuing course.
              </span>
              <div onClick={handleResumeClick} className="group ">
                <div className="pt-4">
                  <div className="w-52 h-14 bg-[#FFF7D4] rounded-tl-3xl  rounded-br-3xl cursor-pointer text-2xl text-[#122049] font-IbmplexMono font-bold flex justify-center items-center ">
                    <button> Resume </button>
                    <div className="relative top-0 -inset-full h-full w-1/4 z-5  transform -skew-x-12 bg-gradient-to-r from-[#020103] to-transparent opacity-20 group-hover:animate-shine" />
                  </div>
                </div>
              </div>
            </div>
          </Tilt>

          <Language />
        </div>

        <div className="hidden md:block align-bottom">
          <ThreeDModelCanvas />
        </div>
      </div>
    </>
  );
}

export default About;

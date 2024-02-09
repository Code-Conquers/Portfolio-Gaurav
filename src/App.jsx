import { useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import SocialLinks from "./components/Socials";
import About from "./components/About";
import { Element } from 'react-scroll';
import Contact from "./components/Contact";
import Project from "./components/ProjectCard";

function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          overflow: "hidden"
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            backdropFilter: "blur('20px')"
          }}
        >
          <source src={"/assets/background.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="p-4">
        <Navbar
          style={{
            position: "fixed",
            top: 0
          }}
        />
      </div>

      <div className="h-screen flex-col flex">
        <div className="flex flex-col md:flex-col">
          <div className="flex justify-center md:justify-end items-center md:pt-72 sm:pt-32 order-2 md:order-1 ">
            <SocialLinks />
          </div>
          <div className="order-1 md:order-2 md:pt-96">
            <Intro />
          </div>
        </div>

        
        <Element name="about" className="element">
          <About />
        </Element>
        <Element name="project" className="element">
          <Project />
        </Element>
        <Element name="contact" className="element h-screen w-full">
          <Contact />
        </Element>
        
       
      </div>
    </>
  );
}

export default App;


import React, { Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/Socials";
import { Element } from 'react-scroll';

const Intro = React.lazy(() => import("./components/Intro"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Project = React.lazy(() => import("./components/ProjectCard"));

function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

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
          overflow: "hidden",
          backgroundColor: videoLoaded ? "transparent" : "black" // Change background color to black before video loads
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
          onLoadedData={handleVideoLoad} // Call handleVideoLoad when video is loaded
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
            <Suspense fallback={<div>Loading...</div>}>
              <Intro />
            </Suspense>
          </div>
        </div>

        <Element name="about" className="element">
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        </Element>
        <Element name="project" className="element">
          <Suspense fallback={<div>Loading...</div>}>
            <Project />
          </Suspense>
        </Element>
        <Element name="contact" className="element h-screen w-full">
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        </Element>
      </div>
    </>
  );
}

export default App;

import React from "react";
import BallCanvas from "../canvas/Ball";
import { SectionWrapper } from "../hoc";
import html from "/assets/html-1.svg";
import css from "/assets/css-3.svg";
import reactjs from "/assets/react.svg";
import tailwind from "/assets/tailwindcss.svg";
import cplus from "/assets/cplus.svg";
import dart from "/assets/dart.svg"
import flutter from "/assets/flutter.svg"
import javascript from "/assets/javascript.svg"
import python from "/assets/python.svg"
import nextjs from "/assets/nextjs.svg"
import reactnative from "/assets/react-native.svg"
import firebase from "/assets/firebase.svg"
const Tech = () => {
  const technologies = [
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C++",
      icon: cplus,
    },
    {
      name: "Dart",
      icon: dart,
    },
    {
      name: "Python",
      icon: python,
    },
   
    {
      name: "firebase",
      icon: firebase,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  ];
  return (
    <div className='flex flex-row flex-wrap justify-center gap-5 '>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
import React from "react";
import BallCanvas from "../canvas/Ball";
import { SectionWrapper } from "../hoc";
import html from "/assets/html-1.svg";
import css from "/assets/css-3.svg";
import reactjs from "/assets/react.svg";
import tailwind from "/assets/tailwindcss.svg";
import cplus from "/assets/cplus.svg";
import dart from "/assets/dart.svg";
import flutter from "/assets/flutter.svg";
import javascript from "/assets/javascript.svg";
import python from "/assets/python.svg";
import nextjs from "/assets/nextjs.svg";
import reactnative from "/assets/react-native.svg";
import firebase from "/assets/firebase.svg";

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
      name: "Firebase",
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
    <div className="flex flex-wrap justify-center gap-5 pt-6">
      {technologies.map((technology) => (
        <div className="w-20 h-20 md:w-28 md:h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className="text-xs md:text-sm text-center text-gray-500 mt-2">
            {technology.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

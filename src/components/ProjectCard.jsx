import React from "react";
import { Tilt } from "react-tilt";

const ProjectData = [
  {
    title: "GuardAnon ",
    description: "Application for secure and anonymous reporting of illegal activities. This app leverages to ensure user privacy while promoting a safer online environment.",
    languages: ["JavaScript", "ReactNative", "Supabase"],
    githubLink: "https://github.com/gmpaliwal07/Guard_Anon",
  },
  {
    title: "Book Management System",
    description: "Simplifying book borrowing for students. Easily request and issue books through our web app, ensuring a seamless and efficient borrowing process.",
    languages: ["Flutter", "Dart", "Python", "Django"],
    githubLink: "https://github.com/gmpaliwal07/Book-Management-System",
  },
   {
    title: "Resume-Analyser",
    description: "It is NLP based application which Analyse the Resume and Predict the Category, Job Role, ATS Score and Skills etc..",
    languages: ["Flask", "ReactJS", "Python", "Javascript", "NLP(Natural Language Processing)"],
    githubLink: "https://github.com/gmpaliwal07/Resume-Analyser-NLP",
  }
];

const defaultOptions = {
  reverse: false,
  max: 10,
  perspective: 4000,
  scale: 1,
  speed: 500,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const Project = () => (
  <div className="min-h-screen flex flex-col items-center justify-start p-8 md:p-14 md:pt-12">
    <h1 className="md:text-5xl text-3xl font-bold text-[#FFF7D4] font-PoorStory mt-8 ml-6"> Projects </h1>
    <div className="grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-2 lg:grid-cols-3 mt-8 mx-6 w-full md:w-auto">
      {ProjectData.map((project, index) => (
        <div
          key={index}
          className="max-w-md mx-auto filter drop-shadow-xl items-center border-2 border-gray-700 backdrop-blur-sm rounded-xl bg-transparent p-6 overflow-hidden transform"
        >
          <div className="p-4">
            <h2 className="text-2xl font-bold text-[#C6DCBA] mb-4 font-VarelaRound">{project.title}</h2>
            <p className="text-lg text-[#C9D7DD] font-IbmplexMono mb-4">{project.description}</p>
            <p className="text-xl font-IbmplexMono font-bold text-[#C9D7DD]">Tech Stack: {project.languages.join(", ")}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-center text-indigo-600 hover:text-indigo-500"
            >
              View on GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Project;

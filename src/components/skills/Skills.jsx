import React from "react";

import HTML from "../../assets/projects/html.png";
import CSS from "../../assets/projects/css.png";
import JavaScript from "../../assets/projects/javascript.png";
import ReactImg from "../../assets/projects/react.png";
import Node from "../../assets/projects/node.png";
import FireBase from "../../assets/projects/firebase.png";
import GitHub from "../../assets/projects/github.png";
import Tailwind from "../../assets/projects/tailwind.png";
import Mongo from "../../assets/projects/mongo.png";
import redux from "../../assets/projects/redux.png";
import next from "../../assets/projects/next.png";
import three from "../../assets/projects/threejs.png";

const Skills = () => {
  return (
    <div className="w-full bg-[#0a192f] text-gray-300 py-16">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8">
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </h2>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { img: HTML, name: "HTML" },
            { img: CSS, name: "CSS" },
            { img: JavaScript, name: "JAVASCRIPT" },
            { img: ReactImg, name: "REACT" },
            { img: GitHub, name: "GITHUB" },
            { img: Node, name: "NODE JS" },
            { img: Mongo, name: "MONGO DB" },
            { img: Tailwind, name: "TAILWIND" },
            { img: FireBase, name: "FIREBASE" },
            { img: redux, name: "Redux" },
            { img: next, name: "Next.js" },
            { img: three, name: "Three.js" }
          ].map((skill, index) => (
            <div 
              key={index} 
              className="shadow-md shadow-[#040c16] hover:scale-105 duration-300 p-4 rounded-lg flex flex-col items-center justify-center"
            >
              <img className="w-16 h-16 object-contain mb-3" src={skill.img} alt={`${skill.name} icon`} />
              <p className="text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

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
    <div className=" ">
      <div name="skills" className="w-full   bg-[#0a192f] text-gray-300 ">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-5">
          <div className="text-center md:text-start mb-0 md:mb-12">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
              Skills
            </p>
            <p className="py-4">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-4 sm:grid-cols-4 gap-4 text-center py-2">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
              <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
              <p className="my-4">JAVASCRIPT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
              <p className="my-4">REACT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
              <p className="my-4">GITHUB</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
              <p className="my-4">NODE JS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
              <p className="my-4">MONGO DB</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
              <p className="my-4">TAILWIND</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={FireBase} alt="HTML icon" />
              <p className="my-4">FIREBASE</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={redux} alt="HTML icon" />
              <p className="my-4">Redux</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={next} alt="HTML icon" />
              <p className="my-4">Next.js</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={three} alt="HTML icon" />
              <p className="my-4">Three.js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

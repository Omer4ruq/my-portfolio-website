import React from "react";

const About = () => {
  return (
    <div className="w-full bg-[#0a192f] text-gray-300 flex justify-center items-center py-16">
      <div className="max-w-[1000px] w-full px-4 md:px-8">
        {/* About Header */}
        <div className="w-full flex justify-center md:justify-start mb-8">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-pink-600">
            About
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* First Text Section */}
          <div className="text-center md:text-right text-xl md:text-2xl lg:text-3xl font-bold">
            <p>
              Hi, I'm Omer Faruq, a Computer Science and Engineering graduate.
              Nice to meet you! Please take a look around.
            </p>
          </div>

          {/* Second Text Section */}
          <div className="text-center md:text-left">
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small businesses all
              the way to large enterprise corporations. What would you do if
              you had a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

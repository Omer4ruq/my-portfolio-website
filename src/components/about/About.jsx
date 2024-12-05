import React from "react";

const About = () => {
  return (
    <div>
      <div
        name="about"
        className="w-full h-screen bg-[#0a192f] text-gray-300 -mt-8 flex justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center w-full h-full p-10">
          {/* About Header */}
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right text-center pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600 ml-28">
                About
              </p>
            </div>
            <div></div>
          </div>

          {/* About Content */}
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            {/* First Text Section */}
            <div className="text-center sm:text-right text-3xl font-bold">
              <p>
                Hi, I'm Omer Faruq, a Computer Science and Engineering graduate.
                Nice to meet you! Please take a look around.
              </p>
            </div>

            {/* Second Text Section */}
            <div className="text-center sm:text-left">
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
    </div>
  );
};

export default About;

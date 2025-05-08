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
          <div className="text-center flex items-center md:text-right text-xl md:text-2xl lg:text-3xl font-bold">
            <p>
              Hi, I'm Omer Faruq, a Computer Science and Engineering graduate.
              Nice to meet you! Please take a look around.
            </p>
          </div>

          {/* Second Text Section */}
          <div className="text-center md:text-left">
            <p>
            a passionate Front-End Developer with a knack for building engaging, responsive, and user-focused web applications. I specialize in React.js, Next.js, and Tailwind CSS, 
            and I take pride in transforming ideas into interactive digital experiences.
            With a background in computer science and hands-on experience developing everything from e-commerce platforms to POS systems, I focus on writing clean, efficient code that’s easy to maintain and scalable. I'm currently expanding my skills in TypeScript, SEO optimization, and accessible design, with a long-term goal of becoming a full-stack or data-focused engineer.

When I’m not coding, you’ll find me exploring the cosmos (seriously—I love astrophysics), gaming into the night, or refining my JavaScript knowledge to stay interview-ready and future-proof.

I believe in continuous learning, creative problem-solving, and crafting web experiences that not only work great—but feel great. I specialize in creating software
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

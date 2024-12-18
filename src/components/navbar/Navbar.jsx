import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  // const downloadResume = () => {
  //   const resumeUrl = process.env.('https://drive.google.com/file/d/1tcW4Zk0qtPv8NEzjVnSyRcH-je8Btzar/view?usp=sharing') + '/resume.pdf';
  //   const link = document.createElement('a');
  //   link.href = resumeUrl;
  //   link.download = 'Your_Name_Resume.pdf'; // Set the desired filename
  //   link.click();
  // };
  const googleDriveLink =
    "https://drive.google.com/file/d/1jjRfzrOYLVrhNvoQscd-gdk2ZKA8OUtz/view?usp=sharing";
  return (
    // <div className="navbar">
    //   {/* sidebar */}
    //   <Sidebar></Sidebar>
    //   <div className="wrapper">
    //     <div>
    //       <motion.span
    //         initial={{ opacity: 0, scale: 0 }}
    //         animate={{ opacity: 2, scale: 2 }}
    //         transition={{ duration: 1 }}
    //       >
    //         Omer Faruq
    //       </motion.span>
    //     </div>

    //     <div className="flex gap-4">
    //       <h1>Home</h1>
    //       <h1>About Me</h1>
    //       <h1>My Work</h1>
    //       <h1>Experience</h1>
    //       <h1>Contact</h1>
    //     </div>
    //   </div>
    // </div>
    <div className=" w-full h-[80px] object-cover flex justify-between items-center px-4 bg-[#0a192f]   text-gray-300">
      {/* sidebar */}
      <Sidebar className=""></Sidebar>

      <div className="flex items-center justify-between p-4 z-[100] w-full absolute md:p-10">
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 2, scale: 2 }}
          transition={{ duration: 1 }}
        >
          <div className="hidden md:block ml-16 font-bold">Omer Faruq</div>
        </motion.span>

        {/* <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 2, scale: 2 }}
          transition={{ duration: 1 }}
        >
          Omer Faruq
        </motion.span> */}
        <div className="ml-10 mr-4 flex gap-4 text-sm md:gap-4 text-1xl ">
          <Link to="home" smooth={true} duration={500}>
            <button className="hidden md:block hover:underline underline-offset-8 hover:text-yellow-500">
              Home
            </button>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <button className="hidden md:block hover:underline underline-offset-8 hover:text-yellow-500">
              About
            </button>
          </Link>
          <a
            href={googleDriveLink}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <button className="hover:underline underline-offset-8 hover:text-yellow-500">
              Download Resume
            </button>
          </a>

          <Link to="work" smooth={true} duration={500}>
            <button className="hover:underline underline-offset-8 hover:text-yellow-500">
              {" "}
              My Work
            </button>
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            <button className="hover:underline underline-offset-8 hover:text-yellow-500">
              Skills
            </button>
          </Link>
          <h1 className="hidden md:block hover:underline underline-offset-8 hover:text-yellow-500">
            Experience
          </h1>
          <Link to="contact" smooth={true} duration={500}>
            <button className="hover:underline underline-offset-8 hover:text-yellow-500">
              Contact
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex ml-10 gap-6 w-full text-gray-300"
              href="https://www.linkedin.com/in/md-omer-faruq-3b36b29a/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex ml-12 gap-6 w-full text-gray-300"
              href="https://github.com/Omer4ruq"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a className="flex ml-16 gap-6 w-full text-gray-300" href="/">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex ml-10 gap-6 w-full text-gray-300"
              href={googleDriveLink}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
    // <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
    //   <div>
    //     <h1>Omer Faruq</h1>
    //   </div>

    //   {/* menu */}
    //   <ul className="hidden md:flex">
    //     <li>
    //       <Link to="home" smooth={true} duration={500}>
    //         Home
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="about" smooth={true} duration={500}>
    //         About
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="skills" smooth={true} duration={500}>
    //         Skills
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="work" smooth={true} duration={500}>
    //         Work
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="contact" smooth={true} duration={500}>
    //         Contact
    //       </Link>
    //     </li>
    //   </ul>

    //   {/* Hamburger */}
    //   <div onClick={handleClick} className="md:hidden z-10">
    //     {!nav ? <FaBars /> : <FaTimes />}
    //   </div>

    //   {/* Mobile menu */}
    //   <ul
    //     className={
    //       !nav
    //         ? "hidden"
    //         : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
    //     }
    //   >
    //     <li className="py-6 text-4xl">
    //       <Link onClick={handleClick} to="home" smooth={true} duration={500}>
    //         Home
    //       </Link>
    //     </li>
    //     <li className="py-6 text-4xl">
    //       {" "}
    //       <Link onClick={handleClick} to="about" smooth={true} duration={500}>
    //         About
    //       </Link>
    //     </li>
    //     <li className="py-6 text-4xl">
    //       {" "}
    //       <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
    //         Skills
    //       </Link>
    //     </li>
    //     <li className="py-6 text-4xl">
    //       {" "}
    //       <Link onClick={handleClick} to="work" smooth={true} duration={500}>
    //         Work
    //       </Link>
    //     </li>
    //     <li className="py-6 text-4xl">
    //       {" "}
    //       <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
    //         Contact
    //       </Link>
    //     </li>
    //   </ul>

    //   {/* Social icons */}
    //   <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
    //     <ul>
    //       <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
    //         <a
    //           className="flex justify-between items-center w-full text-gray-300"
    //           href="/"
    //         >
    //           Linkedin <FaLinkedin size={30} />
    //         </a>
    //       </li>
    //       <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
    //         <a
    //           className="flex justify-between items-center w-full text-gray-300"
    //           href="/"
    //         >
    //           Github <FaGithub size={30} />
    //         </a>
    //       </li>
    //       <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
    //         <a
    //           className="flex justify-between items-center w-full text-gray-300"
    //           href="/"
    //         >
    //           Email <HiOutlineMail size={30} />
    //         </a>
    //       </li>
    //       <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
    //         <a
    //           className="flex justify-between items-center w-full text-gray-300"
    //           href="/"
    //         >
    //           Resume <BsFillPersonLinesFill size={30} />
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Navbar;

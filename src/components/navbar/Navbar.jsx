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

  const googleDriveLink =
    "https://drive.google.com/file/d/1jjRfzrOYLVrhNvoQscd-gdk2ZKA8OUtz/view?usp=sharing";

  return (
    <nav className="navbar">
      <div className="wrapper">
        {/* Sidebar */}
        <Sidebar className={nav ? "sidebar active" : "sidebar"} />

        {/* Mobile Menu Toggle */}
        {/* <div className="mobile-menu-toggle md:hidden" onClick={handleClick}>
          {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
        </div> */}

        {/* Logo */}
        <motion.span
          className="logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Omer Faruq
        </motion.span>

        {/* Nav Links */}
        <div className={nav ? "nav-links active" : "nav-links"}>
          <Link to="home" smooth={true} duration={500} onClick={() => setNav(false)}>
            <button className="nav-button">Home</button>
          </Link>
          <Link to="about" smooth={true} duration={500} onClick={() => setNav(false)}>
            <button className="nav-button">About</button>
          </Link>
          <a
            href={googleDriveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setNav(false)}
          >
            <button className="nav-button">Download Resume</button>
          </a>
          <Link to="work" smooth={true} duration={500} onClick={() => setNav(false)}>
            <button className="nav-button">My Work</button>
          </Link>
          <Link to="skills" smooth={true} duration={500} onClick={() => setNav(false)}>
            <button className="nav-button">Skills</button>
          </Link>
          <Link to="experience" smooth={true} duration={500} onClick={() => setNav(false)}>
            <button className="nav-button">Experience</button>
          </Link>
          <Link to="contact" smooth={true} duration={500} onClick={() => setNav(false)}>
            <button className="nav-button">Contact</button>
          </Link>
        </div>
      </div>

      {/* Social Links */}
      <div className="social-links">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/md-omer-faruq-3b36b29a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/Omer4ruq" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} /> GitHub
            </a>
          </li>
          <li>
            <a href="mailto:omerfaruq4@gmail.com">
              <HiOutlineMail size={30} /> Email
            </a>
          </li>
          <li>
            <a href={googleDriveLink} target="_blank" rel="noopener noreferrer">
              <BsFillPersonLinesFill size={30} /> Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
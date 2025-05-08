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
    "https://drive.google.com/file/d/1vE58d7VF6WMweteUQnGGfQc2vGokHtv_/view?usp=sharing";

  return (
    <nav className="navbar">
      <div className="wrapper">
        {/* Logo */}
        <motion.span
          className="logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Omer Faruq
        </motion.span>

        {/* Mobile Menu Toggle */}
        {/* <div className="mobile-menu-toggle" onClick={handleClick}>
          {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
        </div> */}

        {/* Nav Links */}
        <div className={nav ? "nav-links active" : "nav-links"}>
          <Link to="home" smooth={true} duration={500} onClick={() => setNav(false)}>
            <button className="nav-button" aria-label="Navigate to home">Home</button>
          </Link>
          <Link to="about" smooth={true} duration={500} onClick={() => setNav(false)}>
            <button className="nav-button" aria-label="Navigate to about">About</button>
          </Link>
          <a
            href={googleDriveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setNav(false)}
          >
            <button className="nav-button" aria-label="Download resume">Download Resume</button>
          </a>
          <Link to="work" smooth={true} duration={500} onClick={() => setNav(false)}>
            <button className="nav-button" aria-label="Navigate to work">My Work</button>
          </Link>
          <Link to="skills" smooth={true} duration={500} onClick={() => setNav(false)}>
            <button className="nav-button" aria-label="Navigate to skills">Skills</button>
          </Link>
          <Link to="experience" smooth={true} duration={500} onClick={() => setNav(false)}>
            <button className="nav-button" aria-label="Navigate to experience">Experience</button>
          </Link>
          <Link to="contact" smooth={true} duration={500} onClick={() => setNav(false)}>
            <button className="nav-button" aria-label="Navigate to contact">Contact</button>
          </Link>
        </div>

        {/* Sidebar */}
        <Sidebar className={nav ? "sidebar active" : "sidebar"} onLinkClick={() => setNav(false)} />
      </div>

      {/* Social Links */}
      <div className="social-links">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/md-omer-faruq-3b36b29a/" target="_blank" rel="noopener noreferrer">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Omer4ruq" target="_blank" rel="noopener noreferrer">
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li>
            <a href="mailto:omerfaruq4@gmail.com">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li>
            <a href={googleDriveLink} target="_blank" rel="noopener noreferrer">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
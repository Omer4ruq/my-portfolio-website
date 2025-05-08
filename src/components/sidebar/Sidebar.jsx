
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Sidebar = ({ onLinkClick }) => {
  const [open, setOpen] = useState(false);

  const googleDriveLink =
    "https://drive.google.com/file/d/1vE58d7VF6WMweteUQnGGfQc2vGokHtv_/view?usp=sharing";

  const items = [
    { name: "Home", to: "home", isExternal: false },
    { name: "About", to: "about", isExternal: false },
    { name: "Download Resume", to: googleDriveLink, isExternal: true },
    { name: "My Work", to: "work", isExternal: false },
    { name: "Skills", to: "skills", isExternal: false },
    { name: "Experience", to: "experience", isExternal: false },
    { name: "Contact", to: "contact", isExternal: false },
    { name: "GitHub", to: "https://github.com/Omer4ruq", isExternal: true },
  ];

  const handleLinkClick = () => {
    setOpen(false);
    if (onLinkClick) onLinkClick();
  };

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <div className="links">
          {items.map((item, index) =>
            item.isExternal ? (
              <motion.a
                href={item.to}
                key={index}
                variants={linkVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
              </motion.a>
            ) : (
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                key={index}
                onClick={handleLinkClick}
                className="cursor-pointer"
              >
                <motion.div
                  variants={linkVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </motion.div>
              </Link>
            )
          )}
        </div>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;

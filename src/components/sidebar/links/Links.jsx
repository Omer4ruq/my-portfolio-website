
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ onLinkClick }) => {
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

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, index) =>
        item.isExternal ? (
          <motion.a
            href={item.to}
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onLinkClick}
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
            onClick={onLinkClick}
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Navigate to ${item.name}`}
            >
              {item.name}
            </motion.div>
          </Link>
        )
      )}
    </motion.div>
  );
};

export default Links;
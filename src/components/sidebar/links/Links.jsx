import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
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

const Links = () => {
  const items = [
    { name: "Homepage", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Github", url: "https://github.com/Omer4ruq" },
    { name: "Contact", url: "/contact" },
    { name: "About", url: "/about" },
  ];
  return (
    <div>
      <motion.div className="links" variants={variants}>
        {items.map((item, index) => (
          <motion.a
            href={item.url}
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.name}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Links;

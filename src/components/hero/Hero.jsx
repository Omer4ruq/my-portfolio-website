import { Link } from "react-scroll";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -20,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const sliderVariants = {
  initial: {
    y: "50%", // Reduced range for smaller animation
    x: "0",
  },
  animate: {
    y: "-50%", // Reduced range for smaller animation
    x: "0",
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 12,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        <img
          src="https://i.ibb.co/Z8N301V/codesnip.png"
          alt="Code snippet"
        />
      </motion.div>

      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Omer Faruq</motion.h2>
          <motion.h1 variants={textVariants}>
            Full-Stack Web Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <Link to="work" smooth={true} duration={500}>
                See the Latest Works
              </Link>
            </motion.button>
            <motion.button variants={textVariants}>
              <Link to="contact" smooth={true} duration={500}>
                Contact Me
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>

        <div className="imageContainer">
          <motion.img
            src="https://i.ibb.co/LvMHd4Y/hero.png"
            alt="Hero image"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
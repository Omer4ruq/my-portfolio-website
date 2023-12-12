import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: 20,
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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: -400,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="wrapper ">
          <motion.div
            className="textContainer sm:w-14 mr-16 md:-ml-[600px]"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={textVariants}>Omer Faruq</motion.h2>
            <motion.h1 variants={textVariants}>
              Full-stack Web Developer
            </motion.h1>
            <motion.div variants={textVariants} className="buttons">
              <motion.button variants={textVariants}>
                See the Latest Works
              </motion.button>
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </motion.div>
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src="/scroll.png"
              alt=""
            />
          </motion.div>
        </div>
        <motion.div
          className="ml-[800px] slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          <img src="/public/codesnip.png" alt="" />
        </motion.div>
        <div className="imageContainer">
          <img src="/public/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

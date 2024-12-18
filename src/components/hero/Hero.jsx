import { Link } from "react-scroll";
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
    y: 100,
  },
  animate: {
    y: -600,
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
        <div className="wrapper mr-0 md:-pl-36">
          <motion.div
            className="textContainer "
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={textVariants}>Omer Faruq</motion.h2>
            <motion.h1 variants={textVariants}>
              Full-stack <br></br> Web Developer
            </motion.h1>
            <motion.div variants={textVariants} className="buttons ">
              <motion.button variants={textVariants}>
                <Link to="work" smooth={true} duration={500}>
                  See the Latest Works
                </Link>
              </motion.button>
              <motion.button variants={textVariants}>
                {" "}
                <Link to="contact" smooth={true} duration={500}>
                  Contact Me
                </Link>
              </motion.button>
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
          className="md:ml-[900px] ml-[10px] slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          <img
            className="opacity-40"
            src="https://i.ibb.co/Z8N301V/codesnip.png"
            alt=""
          />
        </motion.div>
        <div className="imageContainer hidden md:block">
          <img src="https://i.ibb.co/LvMHd4Y/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

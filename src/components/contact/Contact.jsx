import { useRef, useState } from "react";

import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hkdlgwm",
        "template_2g3vcxl",
        formRef.current,
        "J6q1pS19VMVuqoPQs"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <div className="contact -ml-6 ">
      <div ref={ref} className="contact w-full bg-[#0a192f] ">
        <div className="textContainer   ml-20  p-8 md:p-10">
          <h1 className="text-[50px] md:text-[100px] leading-10 md:leading-none ">
            Let’s work together
          </h1>
          <div className="hidden md:block ">
            <div className="item pb-6">
              <h2>Mail</h2>
              <span>omerfaruq4@gmail.com</span>
            </div>
            <div className="item pb-6">
              <h2>Address</h2>
              <span>Chawkbazar, Chattagram, Bangladesh</span>
            </div>
            <div className="item">
              <h2>Phone</h2>
              <span>+8801621172814</span>
            </div>
          </div>
        </div>
        <div className="formContainer block md:hidden  ml-8 mr-0 md:mr-10">
          <form className="" ref={formRef} onSubmit={sendEmail}>
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={6} placeholder="Message" name="message" />
            <button>Submit</button>
            {error && "Error"}
            {success && "Success"}
          </form>
        </div>
        <div className="formContainer hidden md:block mr-0 md:mr-10">
          <form className="" ref={formRef} onSubmit={sendEmail}>
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={8} placeholder="Message" name="message" />
            <button>Submit</button>
            {error && "Error"}
            {success && "Success"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

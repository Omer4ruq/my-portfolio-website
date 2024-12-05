import React from "react";
import "./contact.scss";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "041dd49c-3019-4692-8b31-c6e87130de39");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact mt-44 -ml-6 ">
      <div className="contact w-full bg-[#0a192f] ">
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
        <div className="formContainer block md:hidden -mt-10 ml-8 mr-0 md:mr-10">
          <form className="" onSubmit={onSubmit}>
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={6} placeholder="Message" name="message" />
            <button className="text-white hover:text-black">Submit</button>
          </form>
          <span>{result}</span>
        </div>
        <div className="formContainer hidden md:block mr-0 md:mr-10">
          <form className="" onSubmit={onSubmit}>
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={8} placeholder="Message" name="message" />
            <button className="text-white hover:text-black">Submit</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;

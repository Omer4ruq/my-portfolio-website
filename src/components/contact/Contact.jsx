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
    <div className="contact-section w-full bg-[#0a192f] py-16">
      <div className="contact max-w-[1366px] mx-auto px-4 md:px-8">
        <div className="textContainer p-4 md:p-8">
          <h1 className="text-4xl md:text-6xl lg:text-[80px] leading-tight mb-8">
            Let's work together
          </h1>
          <div className="hidden md:block">
            <div className="item pb-6">
              <h2 className="font-bold text-xl mb-1">Mail</h2>
              <span>omerfaruq4@gmail.com</span>
            </div>
            <div className="item pb-6">
              <h2 className="font-bold text-xl mb-1">Address</h2>
              <span>Chawkbazar, Chattagram, Bangladesh</span>
            </div>
            <div className="item">
              <h2 className="font-bold text-xl mb-1">Phone</h2>
              <span>+8801621172814</span>
            </div>
          </div>
        </div>
        
        <div className="formContainer w-full md:w-3/4 mx-auto">
          <form className="w-full" onSubmit={onSubmit}>
            <input className="w-full p-3 mb-4" type="text" required placeholder="Name" name="name" />
            <input className="w-full p-3 mb-4" type="email" required placeholder="Email" name="email" />
            <textarea className="w-full p-3 mb-4" rows={6} placeholder="Message" name="message" />
            <button className="w-full md:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white transition-colors">Submit</button>
          </form>
          <span className="block mt-4 text-center">{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
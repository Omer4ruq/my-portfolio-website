import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";

function App() {
  return (
    <div className="w-full">
      <section id="home" className="min-h-screen">
        <Navbar />
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>
      
      <section id="work">
        <Work />
      </section>
      
      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
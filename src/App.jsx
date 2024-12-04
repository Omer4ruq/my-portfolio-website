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
    <div className="w-full mb-">
      <section>
        <Navbar></Navbar>
        <Hero></Hero>
      </section>

      {/* <section>
     
      </section> */}
      <section>
        <About></About>
      </section>
      {/* <section>services</section> */}
      <section>
        <Work></Work>
      </section>
      <section>
        <Skills></Skills>
      </section>

      <section>
        <Contact></Contact>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
}

export default App;

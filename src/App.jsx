import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";

function App() {
  return (
    <div>
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
      {/* <section>protfolio2</section>
      <section>protfolio3</section> */}
      <section>
        <Contact></Contact>
      </section>
    </div>
  );
}

export default App;

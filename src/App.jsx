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
      <section className="mt-10">
        <Work></Work>
      </section>
      <section className="mt-10">
        <Skills></Skills>
      </section>
      {/* <section>protfolio2</section>
      <section>protfolio3</section> */}
      <section>
        <Contact className="mt-10"></Contact>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
}

export default App;

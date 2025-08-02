import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Expertise from "../components/Expertise.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/hero/Hero.jsx";

export default function Home() {
  return (
    <>
      <div className="heroWrapper">
        <Hero />
      </div>
      <div className="main">
      <About />
        <Expertise />
        <Contact />
      </div>
      <Footer/>
    </>
  );
}

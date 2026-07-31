import Crosshair from "./components/Crosshair.jsx";
import TopNav from "./components/TopNav.jsx";
import Landing from "./components/Landing.jsx";
import Ticker from "./components/Ticker.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />
      <div className="bg-vignette" aria-hidden="true" />
      <Crosshair />
      <TopNav />
      <div className="page">
        <Landing />
        <Ticker />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

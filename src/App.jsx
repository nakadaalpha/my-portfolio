import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import TechMarquee from "./components/TechMarquee";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-red-500/20 selection:text-red-700">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechMarquee />
        <Timeline />
        <Projects />
        {/* <Certifications /> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;

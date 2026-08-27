import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import ProductPreview from "./components/ProductPreview";
import Projects from "./components/Projects";
import TechMarquee from "./components/TechMarquee";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-red-500/30 selection:text-red-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <TechMarquee />
        <ProductPreview />
        <Projects />
        <Certifications />
      </main>
    </div>
  );
}

export default App;

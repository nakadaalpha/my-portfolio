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
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-red-100 selection:text-red-700">
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

import { personalInfo } from "../data/portfolio";

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden z-10">

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Specialization Tag */}
        <div className="mb-6 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs md:text-sm font-semibold tracking-wider uppercase shadow-sm">
          Full-Stack Web Developer & ML Integration Enthusiast
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-slate-900 max-w-4xl">
          Building{" "}
          <span className="bg-gradient-to-r from-red-600 via-amber-500 to-rose-600 bg-clip-text text-transparent">
            fast, scalable, and intelligent
          </span>{" "}
          web applications from idea to production.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
          Hi, I'm{" "}
          <span className="text-slate-900 font-bold">
            {personalInfo.name}
          </span>
          . I specialize in crafting high-performance, seamless digital solutions powered by modern tech stacks.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-base md:text-lg font-semibold">
          {/* Resume / CV Download Button */}
          <a
            href="#"
            className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg shadow-red-500/20 transition-all duration-300 text-center min-w-[170px]"
          >
            Resume / CV
          </a>

          {/* View Projects Button */}
          <a
            href="#featured-projects"
            className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-800 hover:text-slate-900 font-bold rounded-xl border border-slate-200 shadow-sm hover:shadow transition-all duration-300 text-center min-w-[170px]"
          >
            View Projects
          </a>

          {/* Let's Work Together Link */}
          <a
            href="#contact"
            className="text-slate-600 hover:text-red-600 transition-colors py-2"
          >
            Let’s Work Together →
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;

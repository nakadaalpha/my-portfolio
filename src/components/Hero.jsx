import { personalInfo } from "../data/portfolio";

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden z-10">

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6 text-slate-100">
          Building Modern Web Applications.
          <br />
          <span className="bg-gradient-to-r from-red-500 via-amber-400 to-rose-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
            Fast. Scalable. Elegant.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          I'm{" "}
          <span className="text-white font-medium drop-shadow-md">
            {personalInfo.name}
          </span>
          , a {personalInfo.role} focused on building high-performance web
          applications with seamless user experiences.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-base md:text-lg font-medium">
          {/* Primary CTA */}
          <a
            href="#contact"
            className="text-red-400 hover:text-red-300 hover:drop-shadow-[0_0_8px_rgba(248,113,113,0.8)] transition-all"
          >
            Let’s Work Together →
          </a>

          {/* Secondary CTA */}
          <a
            href="#projects"
            className="text-slate-400 hover:text-white transition-colors"
          >
            View Projects
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;

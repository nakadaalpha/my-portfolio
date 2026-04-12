const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50 to-white"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6 text-zinc-900">
          Building Modern Web Applications.
          <br />
          <span className="bg-gradient-to-r from-red-600 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
            Fast. Scalable. Elegant.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mb-10 leading-relaxed">
          I'm{" "}
          <span className="text-zinc-900 font-medium">
            Muhammad Abbad Raid Alfath
          </span>
          , a Full Stack Developer focused on building high-performance web
          applications with seamless user experiences.
        </p>

        {/* CTA */}
        <div className="flex gap-6 text-base md:text-lg font-medium">
          {/* Primary CTA */}
          <a
            href="#contact"
            className="text-red-600 hover:text-red-700 transition"
          >
            Let’s Work Together →
          </a>

          {/* Secondary CTA */}
          <a
            href="#projects"
            className="text-zinc-500 hover:text-zinc-900 transition"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

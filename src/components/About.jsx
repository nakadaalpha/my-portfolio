const About = () => {
  return (
    <section id="about" className="pb-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Who <span className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">I Am?</span>
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.6)]"></div>
        </div>

        {/* --- Layout Change: From Grid to Vertical Stack --- */}
        <div className="flex flex-col gap-12 items-start">
          {/* Biography Text Column (Now Full Width) */}
          <div className="space-y-6 text-lg text-slate-400 leading-relaxed max-w-4xl">
            <p>
              Hello! I'm{" "}
              <span className="font-bold text-white drop-shadow-sm">
                Muhammad Abbad Raid Alfath
              </span>
              . Currently, I am a student studying Information Systems at{" "}
              <span className="font-semibold text-white drop-shadow-sm">
                Universitas Amikom Yogyakarta
              </span>
              .
            </p>
            <p>
              My primary career focus is as a{" "}
              <span className="font-semibold text-red-400">
                Fullstack Web Developer
              </span>
              . I am highly enthusiastic about building web applications that
              are not only functional with robust backend architectures, but
              also deliver an intuitive user interface experience.
            </p>
            <p>
              Beyond web development, I also have a strong interest in data
              processing. I have built several projects involving{" "}
              <span className="font-semibold text-amber-400">
                Data Science and Machine Learning
              </span>{" "}
              (specifically Natural Language Processing/NLP and recommendation
              systems). I am also actively studying the fundamentals of{" "}
              <span className="font-semibold text-blue-400">Cybersecurity</span>{" "}
              to ensure the applications I build are secure from common
              vulnerabilities.
            </p>
          </div>

          {/* --- OLD STATIC SKILL CARDS REMOVED HERE --- */}
        </div>
      </div>
    </section>
  );
};

export default About;

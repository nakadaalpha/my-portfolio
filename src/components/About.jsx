import { personalInfo } from "../data/portfolio";

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Who <span className="text-red-600 drop-shadow-sm">I Am?</span>
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 rounded-full shadow-sm"></div>
        </div>

        {/* --- Layout Change: From Grid to Vertical Stack --- */}
        <div className="flex flex-col gap-12 items-start">
          {/* Biography Text Column (Clean, Crisp Typography) */}
          <div className="space-y-5 text-base md:text-lg text-slate-700 leading-relaxed max-w-4xl">
            <p>
              I am <strong className="font-semibold text-slate-900">{personalInfo.name}</strong>, an Information Systems undergraduate at Amikom University Yogyakarta and an aspiring Full Stack Software Engineer. My primary focus is on architecting modern, high-performance web applications with robust backend foundations and seamless user interfaces.
            </p>
            <p>
              My hands-on experience includes developing full-stack production systems such as retail POS platforms, e-commerce solutions, PWAs, and academic research on semantics-based recommendation engines leveraging Sentence-BERT and Python.
            </p>
            <p>
              Certified in Fullstack Web Development through Dicoding Coding Camp (2026). Outside of engineering, I channel focus and persistence into marathon prep and road cycling—bringing the same discipline and endurance to solving complex software challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

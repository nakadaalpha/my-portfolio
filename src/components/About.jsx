import { personalInfo } from "../data/portfolio";

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header Section */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Who <span className="text-red-600 drop-shadow-sm">I Am?</span>
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 rounded-full shadow-sm"></div>
        </div>

        {/* Biography Content (Clean, High-Contrast Typography) */}
        <div className="max-w-4xl space-y-5 text-base md:text-lg text-slate-700 leading-relaxed">
          <p>
            I am <strong className="font-semibold text-slate-900">{personalInfo.name}</strong>, an Information Systems undergraduate at <strong className="font-semibold text-slate-900">Amikom University Yogyakarta</strong> and an aspiring <strong className="font-semibold text-slate-900">Full Stack Software Engineer</strong>. My core focus is on architecting modern web applications that are fast, scalable, and elegant. Currently, I am actively seeking real-world opportunities to grow, learn, and contribute within a driven engineering team.
          </p>
          <p>
            My development journey has been defined by hands-on experience in architecting and deploying end-to-end solutions. I have built comprehensive systems ranging from the <strong className="font-semibold text-slate-900">"Épicerie POS Digital System"</strong> (using Laravel and React.js) to the <strong className="font-semibold text-slate-900">"NOTNULL Showroom E-commerce"</strong> platform (leveraging PostgreSQL, Express, React, and Node.js). Beyond traditional web development, I have led the creation of <strong className="font-semibold text-slate-900">"NodeWaste,"</strong> an innovative PWA for smart waste classification, and conducted academic research on semantics-based e-commerce recommendations utilizing <strong className="font-semibold text-slate-900">Sentence-BERT</strong> and <strong className="font-semibold text-slate-900">Python</strong>.
          </p>
          <p>
            My academic foundation in Information Systems is further strengthened by intensive practical training, such as completing the <strong className="font-semibold text-slate-900">Dicoding Coding Camp for Fullstack Web Development</strong> in 2026. Beyond the code editor, I channel my energy into physical training like marathon prep and road cycling. I believe the discipline, focus, and endurance required in physical sports perfectly translate into how I tackle complex engineering challenges and deliver seamless user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

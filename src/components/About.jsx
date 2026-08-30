import { personalInfo } from "../data/portfolio";

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
                {personalInfo.name}
              </span>
              . Currently, I am a student studying Information Systems at{" "}
              <span className="font-semibold text-red-400">
                Universitas Amikom Yogyakarta
              </span>
              .
            </p>
            <p>
              My primary career focus is as a{" "}
              <span className="font-semibold text-amber-400">
                {personalInfo.role}
              </span>
              . I am highly enthusiastic about building web applications that
              are not only functional with robust backend architectures, but
              also deliver an intuitive user interface experience.
            </p>
            <p>
              Beyond web development, I also have a strong interest in data
              processing. I have built several projects involving{" "}
              <span className="font-semibold text-blue-400">
                Data Science and Machine Learning
              </span>{" "}
              (specifically Natural Language Processing/NLP and recommendation
              systems).
            </p>
          </div>

          <div className="w-full mt-8">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Frontend */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-red-500/50 transition-colors">
                <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Frontend
                </h4>
                <ul className="text-slate-400 space-y-2 text-sm">
                  <li>React.js & Vite</li>
                  <li>Tailwind CSS</li>
                  <li>HTML5 & CSS3</li>
                  <li>JavaScript & TypeScript</li>
                </ul>
              </div>
              
              {/* Backend */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
                <h4 className="text-amber-400 font-bold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                  Backend & Database
                </h4>
                <ul className="text-slate-400 space-y-2 text-sm">
                  <li>Laravel & PHP</li>
                  <li>Express.js & Node.js</li>
                  <li>MySQL & PostgreSQL</li>
                </ul>
              </div>

              {/* Tools & Others */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Tools & Concepts
                </h4>
                <ul className="text-slate-400 space-y-2 text-sm">
                  <li>Git & GitHub</li>
                  <li>AWS & Vercel</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

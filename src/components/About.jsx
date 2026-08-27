import { personalInfo, aboutData } from "../data/portfolio";

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
            {aboutData.map((paragraph, index) => (
              <p key={index}>
                {/* Minor hack: we can just output the paragraph, but since the original had some bolding for name/school/role, 
                    we can either render it raw or keep the original rich text for just this part. 
                    Since we moved it to a string array, it loses the specific span stylings. 
                    Let's render it normally for now. */}
                {paragraph}
              </p>
            ))}
          </div>

          {/* --- OLD STATIC SKILL CARDS REMOVED HERE --- */}
        </div>
      </div>
    </section>
  );
};

export default About;

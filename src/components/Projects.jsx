// src/components/Projects.jsx
import { projectsData } from "../data/portfolio";

const Projects = () => {
  return (
    <section
      id="featured-projects"
      className="py-24 bg-slate-50 border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header Section */}
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div>
            <span className="text-xs font-bold text-red-600 tracking-wider uppercase mb-2 block">
              Featured Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Featured <span className="text-red-600 drop-shadow-sm">Projects.</span>
            </h2>
            <div className="w-20 h-1.5 bg-amber-500 rounded-full mb-6 md:mb-0 shadow-sm"></div>
          </div>
          <p className="text-slate-600 max-w-md text-base md:text-lg leading-relaxed">
            A curated portfolio of production platforms and academic research, built with measurable real-world impact and solid software architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-red-500/10 hover:border-red-500/40 transition-all duration-500 flex flex-col"
            >
              {/* Image/Mockup Area (Atas) - 100% PRESERVED */}
              <a
                href={project.linkTo !== "#" ? project.linkTo : undefined}
                target={project.linkTo !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                title={`Open preview of ${project.title}`}
                className={`w-full h-64 sm:h-80 bg-gradient-to-br ${project.bgGradient} relative overflow-hidden flex items-center justify-center border-b border-slate-100 block group/mockup`}
              >
                {/* Efek hover overlay */}
                <div className="absolute inset-0 bg-black/5 group-hover/mockup:bg-transparent transition-colors duration-500 z-20 pointer-events-none"></div>

                {project.linkTo !== "#" ? (
                  /* Iframe Preview - Skala 25% dari ukuran 4x lipat untuk mendapatkan versi 'mini' website */
                  <div className="absolute inset-0 w-full h-full transform group-hover/mockup:scale-105 transition-transform duration-700 z-10 pointer-events-none">
                    <iframe
                      src={project.linkTo}
                      title={`Preview of ${project.title}`}
                      className="absolute top-0 left-0 w-[400%] h-[400%] border-none origin-top-left scale-[0.25]"
                      scrolling="no"
                      tabIndex={-1}
                    />
                  </div>
                ) : (
                  /* Placeholder Text Gradient (Jika link masih "#") */
                  <div className="text-slate-400 font-bold text-6xl tracking-tighter uppercase transform group-hover/mockup:scale-105 transition-transform duration-700 select-none z-10">
                    {project.title.substring(0, 3)}
                  </div>
                )}
              </a>

              {/* Content Area (Bawah) */}
              <div className="p-8 sm:p-10 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-red-600 tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>

                {/* Real-world Impact Metrics */}
                {project.metrics && (
                  <div className="flex items-start gap-2.5 p-3 my-3 bg-red-50/80 border border-red-100 rounded-xl text-xs sm:text-sm font-semibold text-slate-800">
                    <span className="text-red-600 text-sm leading-none mt-0.5">🚀</span>
                    <span className="leading-snug">{project.metrics}</span>
                  </div>
                )}

                <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons (Live Demo & Source Code) */}
                <div className="flex items-center gap-4 pt-5 border-t border-slate-100 mt-auto">
                  <a
                    href={project.linkTo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-xl shadow-xs hover:shadow transition-all"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-sm font-semibold rounded-xl border border-slate-200/80 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

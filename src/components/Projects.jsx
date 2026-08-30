// src/components/Projects.jsx
import { projectsData } from "../data/portfolio";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 border-y border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header Section */}
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Featured <span className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">Projects.</span>
            </h2>
            <div className="w-20 h-1.5 bg-amber-500 rounded-full mb-6 md:mb-0 shadow-[0_0_10px_rgba(245,158,11,0.6)]"></div>
          </div>
          <p className="text-slate-400 max-w-md text-lg leading-relaxed">
            A collection of works and technical explorations I have built,
            combining functional design with solid code architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900/40 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden shadow-sm hover:shadow-[0_0_25px_rgba(239,68,68,0.15)] hover:border-red-500/50 transition-all duration-500 flex flex-col"
            >
              {/* Image/Mockup Area (Atas) */}
              {/* Nantinya bgGradient ini bisa Anda ganti dengan tag <img src="..." /> */}
              <div
                className={`w-full h-64 sm:h-80 bg-gradient-to-br ${project.bgGradient} relative overflow-hidden flex items-center justify-center`}
              >
                {/* Efek hover overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-20 pointer-events-none"></div>

                {project.linkTo !== "#" ? (
                  /* Iframe Preview - Skala 25% dari ukuran 4x lipat untuk mendapatkan versi 'mini' website */
                  <div className="absolute inset-0 w-full h-full transform group-hover:scale-105 transition-transform duration-700 z-10 pointer-events-none">
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
                  <div className="text-white/20 font-bold text-6xl tracking-tighter uppercase transform group-hover:scale-105 transition-transform duration-700 select-none z-10">
                    {project.title.substring(0, 3)}
                  </div>
                )}
              </div>

              {/* Content Area (Bawah) */}
              <div className="p-8 sm:p-10 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-red-600 tracking-wider uppercase">
                    {project.category}
                  </span>

                  <div className="flex gap-4">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-white transition-colors"
                        title="View Source Code"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                    
                    <a
                      href={project.linkTo}
                      className="text-slate-500 group-hover:text-red-400 transition-colors"
                      title="View Live Site"
                    >
                      <svg
                        className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-800/80 text-slate-300 text-xs font-semibold rounded-md border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
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

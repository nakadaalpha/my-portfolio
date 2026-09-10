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
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Featured <span className="text-red-600 drop-shadow-sm">Projects</span>
            </h2>
            <div className="w-20 h-1.5 bg-amber-500 rounded-full mb-6 md:mb-0 shadow-sm"></div>
          </div>
          <p className="text-slate-600 max-w-md text-lg leading-relaxed">
            A collection of works and technical explorations I have built,
            combining functional design with solid code architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <a
              href={project.linkTo !== "#" ? project.linkTo : undefined}
              target={project.linkTo !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              key={project.id}
              className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-red-500/10 hover:border-red-500/40 transition-all duration-500 flex flex-col cursor-pointer"
            >
              {/* Image/Mockup Area (Atas) */}
              {/* Nantinya bgGradient ini bisa Anda ganti dengan tag <img src="..." /> */}
              <div
                className={`w-full h-64 sm:h-80 bg-gradient-to-br ${project.bgGradient} relative overflow-hidden flex items-center justify-center border-b border-slate-100`}
              >
                {/* Efek hover overlay */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-20 pointer-events-none"></div>

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
                  <div className="text-slate-400 font-bold text-6xl tracking-tighter uppercase transform group-hover:scale-105 transition-transform duration-700 select-none z-10">
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
                  
                  {/* Menambahkan panah sederhana agar user tahu ini bisa diklik */}
                  <div className="text-slate-400 group-hover:text-red-600 transition-colors">
                    <svg
                      className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

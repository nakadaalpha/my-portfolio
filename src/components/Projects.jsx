// src/components/Projects.jsx

const Projects = () => {
  // Data proyek Anda
  const projectsData = [
    {
      id: 1,
      title: "Èpicerie Digital Platform",
      category: "Fullstack Development",
      description:
        "Platform digital inovatif untuk transformasi toko tradisional. Dilengkapi dengan sistem autentikasi yang aman dan fitur pencarian dinamis untuk manajemen yang lebih efisien.",
      techStack: ["Laravel 12", "React", "Tailwind CSS", "MySQL"],
      linkTo: "#",
      // Gunakan warna gradien sebagai placeholder sementara
      bgGradient: "from-slate-800 to-zinc-900",
    },
    {
      id: 2,
      title: "Luxury Watch Recommender",
      category: "Data Science & Machine Learning",
      description:
        "Mesin rekomendasi cerdas menggunakan metode Content-Based Filtering. Memanfaatkan Sentence-BERT (SBERT) dan Cosine Similarity untuk menganalisis dan merekomendasikan jam tangan mewah secara akurat.",
      techStack: ["Python", "SBERT", "NLP", "Data Crawling"],
      linkTo: "#",
      bgGradient: "from-zinc-900 to-stone-800",
    },
    {
      id: 3,
      title: "Luminotes",
      category: "Frontend Development",
      description:
        "Aplikasi pencatatan (note-taking) interaktif dengan antarmuka UI/UX modern. Mendukung operasi CRUD penuh yang dikelola secara efisien menggunakan penyimpanan lokal (local storage).",
      techStack: ["React.js", "Vite", "Tailwind CSS"],
      linkTo: "#",
      bgGradient: "from-gray-800 to-slate-900",
    },
    {
      id: 4,
      title: "Bookshelf RESTful API",
      category: "Backend Architecture",
      description:
        "Layanan backend web service tangguh untuk manajemen rak buku digital. Dibangun dengan routing yang terstruktur dan telah melewati pengujian ketat menggunakan Postman.",
      techStack: ["Node.js", "Hapi.js", "API Testing"],
      linkTo: "#",
      bgGradient: "from-stone-800 to-zinc-900",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-zinc-50 border-y border-zinc-200"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header Section */}
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight mb-4">
              Featured <span className="text-red-600">Projects.</span>
            </h2>
            <div className="w-20 h-1.5 bg-yellow-500 rounded-full mb-6 md:mb-0"></div>
          </div>
          <p className="text-zinc-500 max-w-md text-lg leading-relaxed">
            Kumpulan karya dan eksplorasi teknis yang telah saya bangun,
            menggabungkan desain fungsional dengan arsitektur kode yang solid.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl border border-zinc-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-500 flex flex-col"
            >
              {/* Image/Mockup Area (Atas) */}
              {/* Nantinya bgGradient ini bisa Anda ganti dengan tag <img src="..." /> */}
              <div
                className={`w-full h-64 sm:h-80 bg-gradient-to-br ${project.bgGradient} relative overflow-hidden flex items-center justify-center p-8`}
              >
                {/* Efek hover zoom halus pada "gambar" */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>

                {/* Placeholder visual jika belum ada gambar mockup */}
                <div className="text-white/20 font-bold text-6xl tracking-tighter uppercase transform group-hover:scale-105 transition-transform duration-700 select-none">
                  {project.title.substring(0, 3)}
                </div>
              </div>

              {/* Content Area (Bawah) */}
              <div className="p-8 sm:p-10 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-red-600 tracking-wider uppercase">
                    {project.category}
                  </span>

                  {/* Tanda Panah yang bergeser saat di-hover */}
                  <a
                    href={project.linkTo}
                    className="text-zinc-400 group-hover:text-red-600 transition-colors"
                  >
                    <svg
                      className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-red-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-600 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-semibold rounded-md border border-zinc-200"
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

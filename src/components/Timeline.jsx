const Timeline = () => {
  const timelineData = [
    {
      year: "2020 - 2023",
      description:
        "Studied at SMA N 1 Karanganom.",
    },
    {
      year: "2023",
      description:
        "Dicoding Coding Camp Fullstack Web Developer",
    },
    {
      year: "2023 - Now",
      description:
        "Currently pursuing a Bachelor's degree in Information Systems at the Faculty of Computer Science, Amikom University Yogyakarta.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-10"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">
            Education & Experience
          </h2>
          <p className="text-slate-400">
            Academic background and experience key milestones in my journey as a Fullstack Web Developer.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="flex flex-col space-y-8">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-start group"
            >
              {/* Kolom Tahun (Sebelah Kiri) */}
              <div className="w-full sm:w-32 flex-shrink-0 mb-2 sm:mb-0">
                <span className="text-lg font-bold text-white group-hover:text-red-400 group-hover:drop-shadow-[0_0_8px_rgba(248,113,113,0.8)] transition-all">
                  {item.year}
                </span>
              </div>

              {/* Kolom Deskripsi (Sebelah Kanan) */}
              <div className="flex-1 text-slate-300 leading-relaxed sm:pl-4 group-hover:text-slate-100 transition-colors">
                {/* Kamu bisa menggunakan format yang lebih kompleks di sini jika ingin menebalkan kata tertentu */}
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

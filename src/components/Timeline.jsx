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
          <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight mb-2">
            Education & Experience
          </h2>
          <p className="text-zinc-500">
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
                <span className="text-lg font-bold text-zinc-900 group-hover:text-red-600 transition-colors">
                  {item.year}
                </span>
              </div>

              {/* Kolom Deskripsi (Sebelah Kanan) */}
              <div className="flex-1 text-zinc-700 leading-relaxed sm:pl-4">
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

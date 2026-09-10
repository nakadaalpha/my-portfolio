import { timelineData } from "../data/portfolio";

const Timeline = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-50 border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header Section */}
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Education & <span className="text-red-600 drop-shadow-sm">Experience.</span>
            </h2>
            <div className="w-20 h-1.5 bg-amber-500 rounded-full mb-6 md:mb-0 shadow-sm"></div>
          </div>
          <p className="text-slate-600 max-w-md text-lg leading-relaxed">
            Academic background and experience key milestones in my journey as a Fullstack Web Developer.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="flex flex-col space-y-12 max-w-4xl">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-start group"
            >
              {/* Kolom Tahun (Sebelah Kiri) */}
              <div className="w-full sm:w-32 flex-shrink-0 mb-2 sm:mb-0">
                <span className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {item.year}
                </span>
              </div>

              {/* Kolom Deskripsi (Sebelah Kanan) */}
              <div className="flex-1 text-slate-600 leading-relaxed sm:pl-4 group-hover:text-slate-900 transition-colors">
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

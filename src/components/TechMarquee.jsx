import { useRef, useEffect, useState } from "react";

// Komponen Helper untuk logika Scroll + Marquee
const ScrollMarquee = ({ items, reverse = false }) => {
  const scrollRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);

  // Duplikasi item 3x agar scroll loop sangat mulus tanpa terlihat patah
  const duplicatedItems = [...items, ...items, ...items];

  useEffect(() => {
    let animationFrameId;
    const container = scrollRef.current;

    if (!container) return;

    // Hitung lebar persis satu set item asli (1/3 dari total lebar setelah diduplikasi 3x)
    const singleSetWidth = container.scrollWidth / 3;

    // Posisi awal:
    // Jika reverse (kiri ke kanan), mulai dari titik akhir set pertama
    // Jika normal (kanan ke kiri), mulai dari awal (0)
    if (reverse && container.scrollLeft === 0) {
      container.scrollLeft = singleSetWidth;
    }

    const scroll = () => {
      if (!isInteracting) {
        if (!reverse) {
          // Animasi Normal (Kanan ke Kiri)
          container.scrollLeft += 1; // Kecepatan animasi (piksel per frame)

          // Jika sudah melewati satu set penuh, kembalikan ke awal secara diam-diam
          if (container.scrollLeft >= singleSetWidth) {
            container.scrollLeft -= singleSetWidth;
          }
        } else {
          // Animasi Reverse (Kiri ke Kanan)
          container.scrollLeft -= 1;

          // Jika menabrak ujung kiri, lompat ke set kedua secara diam-diam
          if (container.scrollLeft <= 0) {
            container.scrollLeft += singleSetWidth;
          }
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInteracting, reverse]);

  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-auto gap-6 px-6 sm:px-10 py-4 no-scrollbar cursor-grab active:cursor-grabbing"
      style={{ scrollBehavior: "auto" }} // Harus 'auto' agar lompatan loop tidak beranimasi
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onTouchStart={() => setIsInteracting(true)}
      onTouchEnd={() => setIsInteracting(false)}
    >
      {duplicatedItems.map((item, index) => (
        <div
          key={`${item.name}-${index}`}
          title={item.name}
          className="flex items-center justify-center w-40 h-40 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-sm hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all duration-300 group flex-shrink-0"
        >
          {item.logo ? (
            <img
              src={item.logo}
              alt={`${item.name} logo`}
              className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300 pointer-events-none select-none"
            />
          ) : (
            <span className="text-xs font-bold text-slate-500 uppercase">
              {item.name.substring(0, 3)}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

const TechMarquee = () => {
  const technologies = [
    { name: "AWS", logo: "/logos/AWS.svg" },
    { name: "React.js", logo: "/logos/React.svg" },
    { name: "Node.js", logo: "/logos/Node.js.svg" },
    { name: "Vite", logo: "/logos/Vite.js.svg" },
    { name: "CodeIgniter", logo: "/logos/CodeIgniter.svg" },
    { name: "Laravel", logo: "/logos/Laravel.svg" },
    { name: "Express.js", logo: "/logos/Express.svg" },
    { name: "Tailwind CSS", logo: "/logos/Tailwind CSS.svg" },
    { name: "Git", logo: "/logos/Git.svg" },
    { name: "GitHub", logo: "/logos/GitHub.svg" },
    { name: "MySQL", logo: "/logos/MySQL.svg" },
    { name: "PostgresSQL", logo: "/logos/PostgresSQL.svg" },
    { name: "Visual Studio Code", logo: "/logos/Visual Studio Code.svg" },
    { name: "Postman", logo: "/logos/Postman.svg" },
    { name: "NPM", logo: "/logos/NPM.svg" },
    { name: "Nodemon", logo: "/logos/Nodemon.svg" },
    { name: "ESLint", logo: "/logos/ESLint.svg" },
    { name: "Oh my zsh", logo: "/logos/Oh my zsh.svg" },
    { name: "Homebrew", logo: "/logos/Homebrew.svg" },
  ];

  const programmingLanguages = [
    { name: "C++", logo: "/logos/C++ (CPlusPlus).svg" },
    { name: "HTML5", logo: "/logos/HTML5.svg" },
    { name: "CSS3", logo: "/logos/CSS3.svg" },
    { name: "PHP", logo: "/logos/PHP.svg" },
    { name: "JavaScript", logo: "/logos/JavaScript.svg" },
    { name: "TypeScript", logo: "/logos/TypeScript.svg" },
    { name: "Python", logo: "/logos/Python.svg" },
  ];

  return (
    <div className="w-full py-16 bg-slate-950 border-y border-white/5 mt-16 overflow-hidden">
      {/* --- SECTION 1: TECH STACK & TOOLS --- */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 mb-8">
        <h3 className="text-sm font-bold text-slate-500 tracking-wider uppercase flex justify-between items-center">
          <span>Tech Stack & Tools</span>
        </h3>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Panggil komponen Helper di sini (Normal: Kanan ke Kiri) */}
        <ScrollMarquee items={technologies} reverse={false} />
      </div>

      {/* --- SECTION 2: PROGRAMMING LANGUAGES --- */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 mb-8 mt-16">
        <h3 className="text-sm font-bold text-slate-500 tracking-wider uppercase flex justify-between items-center">
          <span>Programming Languages</span>
        </h3>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Panggil komponen Helper di sini (Reverse: Kiri ke Kanan) */}
        <ScrollMarquee items={programmingLanguages} reverse={true} />
      </div>
    </div>
  );
};

export default TechMarquee;

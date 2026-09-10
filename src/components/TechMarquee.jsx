import { programmingLanguages } from "../data/portfolio";

const frameworks = [
  { name: "React.js", logo: "/logos/React.svg" },
  { name: "Laravel", logo: "/logos/Laravel.svg" },
  { name: "Node.js", logo: "/logos/Node.js.svg" },
  { name: "Express.js", logo: "/logos/Express.svg" },
  { name: "Tailwind CSS", logo: "/logos/Tailwind CSS.svg" },
  { name: "CodeIgniter", logo: "/logos/CodeIgniter.svg" },
  { name: "Vite", logo: "/logos/Vite.js.svg" },
];

const databases = [
  { name: "PostgresSQL", logo: "/logos/PostgresSQL.svg" },
  { name: "MySQL", logo: "/logos/MySQL.svg" },
  { name: "Supabase", logo: "/logos/supabase.svg" },
  { name: "Prisma", logo: "/logos/prisma.svg" },
  { name: "AWS", logo: "/logos/AWS.svg" },
];

const tools = [
  { name: "Git", logo: "/logos/Git.svg" },
  { name: "GitHub", logo: "/logos/GitHub.svg" },
  { name: "Visual Studio Code", logo: "/logos/Visual Studio Code.svg" },
  { name: "Postman", logo: "/logos/Postman.svg" },
  { name: "NPM", logo: "/logos/NPM.svg" },
  { name: "Nodemon", logo: "/logos/Nodemon.svg" },
  { name: "ESLint", logo: "/logos/ESLint.svg" },
  { name: "Oh my zsh", logo: "/logos/Oh my zsh.svg" },
  { name: "Homebrew", logo: "/logos/Homebrew.svg" },
];

const categories = [
  {
    title: "Programming Languages",
    dotColor: "bg-red-500",
    items: programmingLanguages,
  },
  {
    title: "Frameworks",
    dotColor: "bg-amber-500",
    items: frameworks,
  },
  {
    title: "Database",
    dotColor: "bg-blue-500",
    items: databases,
  },
  {
    title: "Tools",
    dotColor: "bg-emerald-500",
    items: tools,
  },
];

const TechMarquee = () => {
  return (
    <section id="tech-stack" className="py-20 bg-slate-100/60 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="mb-12 md:flex md:items-end md:justify-between">
          <div>
            <span className="text-xs font-bold text-red-600 tracking-wider uppercase mb-2 block">
              Technical Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Core Technologies & <span className="text-red-600 drop-shadow-sm">Tools.</span>
            </h2>
            <div className="w-20 h-1.5 bg-amber-500 rounded-full shadow-sm"></div>
          </div>
          <p className="text-slate-600 max-w-md text-base md:text-lg leading-relaxed mt-4 md:mt-0">
            A structured overview of programming languages, frameworks, databases, and developer tooling I utilize in production.
          </p>
        </div>

        {/* Categorized Tech Badges Grid (4 Distinct Categories) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2.5 border-b border-slate-100 pb-3">
                <span className={`w-2.5 h-2.5 rounded-full ${cat.dotColor}`}></span>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-xl transition-all duration-200 group"
                  >
                    {item.logo && (
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-4 h-4 object-contain group-hover:scale-110 transition-transform"
                      />
                    )}
                    <span className="text-xs sm:text-sm font-medium text-slate-800">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;

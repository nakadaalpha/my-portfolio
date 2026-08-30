import { personalInfo } from "../data/portfolio";

const Contact = () => {
  return (
    <section id="contact" className="pt-24 pb-8 bg-slate-950 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
          Ready to build something <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">amazing?</span>
        </h2>
        
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm currently available for new opportunities. If you have a project that you want to get started, think you need my help with something, or just want to say hi, then get in touch.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Email Button */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-slate-900/80 backdrop-blur-md text-white font-medium rounded-xl border border-white/10 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all duration-300 overflow-hidden w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {personalInfo.email}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-amber-500/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>

          {/* LinkedIn Button */}
          <a
            href={`https://linkedin.com/in/${personalInfo.linkedIn.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-slate-900/80 backdrop-blur-md text-white font-medium rounded-xl border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 overflow-hidden w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${personalInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent("Hello Abbad, I saw your portfolio and I'm interested in discussing a project with you!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-slate-900/80 backdrop-blur-md text-white font-medium rounded-xl border border-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 overflow-hidden w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-500/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>
      </div>

      {/* Footer / Copyright section */}
      <div className="mt-16 border-t border-white/10 pt-6 pb-2 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;

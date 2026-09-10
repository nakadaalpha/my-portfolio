import { personalInfo } from "../data/portfolio";

const Contact = () => {
  return (
    <section id="contact" className="pt-24 pb-8 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          Ready to build something <span className="text-red-600 drop-shadow-sm">amazing?</span>
        </h2>
        
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm currently available for new opportunities. If you have a project that you want to get started, think you need my help with something, or just want to say hi, then get in touch.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {/* Email Button */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=Job%20Opportunity%20%2F%20Offering%20-%20%5BCompany%2FYour%20Name%5D&body=Hello%20Abbad%2C%0A%0AI%20saw%20your%20portfolio%20and%20I%20am%20very%20impressed%20with%20your%20work.%20I%20would%20like%20to%20discuss%20a%20potential%20job%20opportunity%20with%20our%20company.%0A%0APlease%20let%20me%20know%20when%20you%20are%20available%20for%20a%20quick%20chat.%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-7 py-3.5 bg-white text-slate-800 font-medium rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-red-500/50 hover:text-red-600 transition-all duration-300 overflow-hidden w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <svg className="w-5 h-5 text-slate-400 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-amber-500/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>

          {/* LinkedIn Button */}
          <a
            href={`https://linkedin.com/in/${personalInfo.linkedIn.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-7 py-3.5 bg-white text-slate-800 font-medium rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500/50 hover:text-blue-600 transition-all duration-300 overflow-hidden w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${personalInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent("Hello Abbad, I saw your portfolio and I'm interested in discussing a project with you!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-7 py-3.5 bg-white text-slate-800 font-medium rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-500/50 hover:text-emerald-600 transition-all duration-300 overflow-hidden w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <svg className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>

          {/* GitHub Profile Button */}
          {personalInfo.github && (
            <a
              href={`https://github.com/${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-7 py-3.5 bg-white text-slate-800 font-medium rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-400 hover:text-slate-900 transition-all duration-300 overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                <svg className="w-5 h-5 text-slate-500 group-hover:text-slate-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200/40 to-slate-100/40 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          )}

          {/* Instagram Button */}
          {personalInfo.instagram && (
            <a
              href={`https://www.instagram.com/${personalInfo.instagram}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-7 py-3.5 bg-white text-slate-800 font-medium rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-pink-500/50 hover:text-pink-600 transition-all duration-300 overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                <svg className="w-5 h-5 text-slate-400 group-hover:text-pink-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-amber-500/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          )}
        </div>
      </div>

      {/* Footer / Copyright section */}
      <div className="mt-16 border-t border-slate-200 pt-6 pb-2 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;

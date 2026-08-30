import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {/* 1. TOP NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-slate-950/50 backdrop-blur-xl border-b border-white/10 shadow-sm py-5 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center space-x-3 text-slate-200 hover:text-red-500 transition-colors z-50 group"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="hidden sm:block font-medium tracking-wide">
              Menu
            </span>
          </button>

          <a
            href="#home"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold tracking-[0.2em] uppercase text-white z-50"
          >
            STRELITZIA
          </a>
          <div className="w-10"></div>
        </div>
      </nav>

      {/* 2. OVERLAY & TOMBOL X YANG SUDAH DIPERBAIKI SINKRONISASINYA */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div
          className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* --- BUG FIX: Menghapus delay dan mengubah durasi menjadi 500ms agar sinkron dengan panel --- */}
        <button
          onClick={() => setIsOpen(false)}
          className={`hidden sm:block absolute top-6 p-2 text-white hover:text-red-500 transition-all duration-500 ease-in-out
            ${
              isOpen
                ? "opacity-100 translate-x-0 sm:left-[374px] md:left-[424px]"
                : "opacity-0 -translate-x-10 sm:left-[330px] md:left-[380px]"
            }`}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* 3. PANEL MENU PUTIH -> SEKARANG PANEL GELAP */}
      <div
        className={`fixed top-0 left-0 h-full w-full sm:w-[350px] md:w-[400px] bg-slate-950/80 backdrop-blur-2xl z-50 transform transition-transform duration-500 ease-in-out flex flex-col border-r border-white/10 shadow-2xl ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Tombol X untuk Mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="sm:hidden absolute top-6 right-6 text-slate-200 hover:text-red-500 transition-colors p-2 z-50"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="w-full h-full pt-24 px-6 sm:px-10 overflow-y-auto">
          <ul className="flex flex-col space-y-2">
            {[
              { name: "Home", href: "#home" },
              { name: "About Me", href: "#about" },
              { name: "Edu & Experience", href: "#experience" },
              { name: "Projects", href: "#projects" },
              // { name: "Certifications", href: "#certifications" },
              { name: "Contact", href: "#contact" }
            ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-4 text-slate-200 font-medium hover:bg-white/10 rounded-md transition-colors group"
                  >
                    <span className="text-lg group-hover:text-red-400 transition-colors">
                      {link.name}
                    </span>
                    <svg
                      className="w-5 h-5 text-slate-500 group-hover:text-red-400 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>


      </div>
    </>
  );
};

export default Navbar;

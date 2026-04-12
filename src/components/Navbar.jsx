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
      <nav className="fixed top-0 left-0 w-full z-40 bg-slate-100/60 backdrop-blur-md border-b border-white/50 shadow-sm py-5 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center space-x-3 text-zinc-900 hover:text-red-600 transition-colors z-50 group"
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
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold tracking-[0.2em] uppercase text-zinc-900 z-50"
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
                ? "opacity-100 translate-x-0 sm:left-[524px] md:left-[724px]"
                : "opacity-0 -translate-x-10 sm:left-[480px] md:left-[680px]"
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

      {/* 3. PANEL MENU PUTIH */}
      <div
        className={`fixed top-0 left-0 h-full w-full sm:w-[500px] md:w-[700px] bg-slate-50/85 backdrop-blur-xl z-50 transform transition-transform duration-500 ease-in-out flex flex-col sm:flex-row border-r border-white/50 shadow-2xl ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Tombol X untuk Mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="sm:hidden absolute top-6 right-6 text-zinc-900 hover:text-red-600 transition-colors p-2 z-50"
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

        <div className="w-full sm:w-1/2 h-full pt-24 px-6 sm:px-10 border-r border-zinc-200/50 overflow-y-auto">
          <ul className="flex flex-col space-y-2">
            {["Home", "Projects", "About Me", "Experience", "Contact"].map(
              (name) => (
                <li key={name}>
                  <a
                    href={`#${name.toLowerCase().replace(" ", "")}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-4 text-zinc-900 font-medium hover:bg-white/60 rounded-md transition-colors group"
                  >
                    <span className="text-lg group-hover:text-red-600 transition-colors">
                      {name}
                    </span>
                    <svg
                      className="w-5 h-5 text-zinc-400 group-hover:text-red-600 transition-colors"
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

        <div className="hidden sm:block w-1/2 h-full pt-24 px-10 bg-slate-200/30">
          <h3 className="text-sm font-bold text-zinc-500 tracking-wider uppercase mb-6">
            Quick Connect
          </h3>
          <div className="space-y-6">
            <div className="p-5 bg-white/70 backdrop-blur-md border border-white/60 rounded-lg shadow-sm hover:border-red-200 transition-colors">
              <h4 className="font-bold text-zinc-900 mb-1">Email</h4>
              <p className="text-zinc-600 text-sm">hello@portfolio.com</p>
            </div>
            <div className="p-5 bg-white/70 backdrop-blur-md border border-white/60 rounded-lg shadow-sm hover:border-red-200 transition-colors">
              <h4 className="font-bold text-zinc-900 mb-1">LinkedIn</h4>
              <p className="text-zinc-600 text-sm">@muhammad-abbad</p>
            </div>
            <div className="mt-12 h-32 w-full rounded-lg bg-gradient-to-br from-red-600/90 to-yellow-600/90 shadow-lg flex items-center justify-center backdrop-blur-sm">
              <span className="text-white font-bold tracking-widest text-xl opacity-80">
                PORTFOLIO
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

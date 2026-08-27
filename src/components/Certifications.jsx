// src/components/Certifications.jsx
import { useState, useEffect } from "react";
import { certificationsData } from "../data/portfolio";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="certifications"
      className="py-24 bg-slate-950 border-y border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header Section */}
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Verified <span className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">Credentials.</span>
            </h2>
            <div className="w-20 h-1.5 bg-amber-500 rounded-full mb-6 md:mb-0 shadow-[0_0_10px_rgba(245,158,11,0.6)]"></div>
          </div>
          <p className="text-slate-400 max-w-md text-sm md:text-base leading-relaxed">
            Sertifikasi profesional dan pencapaian akademis yang memvalidasi
            keahlian teknis serta komitmen saya terhadap pembelajaran
            berkelanjutan.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer relative p-6 sm:p-8 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-red-500/50 hover:shadow-[0_0_25px_rgba(239,68,68,0.15)] transition-all duration-300 flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start text-center sm:text-left"
            >
              {/* Efek Glow Latar Belakang saat Hover */}
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-red-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl z-0 pointer-events-none"></div>

              {/* === PERUBAHAN DI SINI === */}
              {/* Logo Penerbit: Dihapus p-2, menggunakan object-cover agar gambar penuh & terpotong membulat */}
              <div className="relative z-10 w-20 h-20 sm:w-16 sm:h-16 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner overflow-hidden">
                {cert.logo ? (
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-2xl font-bold text-slate-600 uppercase">
                    {cert.issuer.charAt(0)}
                  </span>
                )}
              </div>
              {/* ========================= */}

              {/* Konten Sertifikat */}
              <div className="relative z-10 flex-grow w-full flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 leading-snug group-hover:text-red-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-slate-400 font-medium text-sm mb-4">
                  {cert.issuer}
                </p>

                {/* Meta Info (Tanggal & ID) */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2 text-xs text-slate-300 mt-auto">
                  <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md border border-white/10">
                    <svg
                      className="w-3.5 h-3.5 text-slate-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {cert.date}
                  </span>

                  {cert.credentialId && (
                    <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md border border-white/10">
                      <svg
                        className="w-3.5 h-3.5 text-slate-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {cert.credentialId}
                    </span>
                  )}
                </div>
              </div>

              {/* Ikon panah pojok */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-red-500 hidden sm:block">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL VIEWER --- */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop Blur */}
          <div
            className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedCert(null)}
          ></div>

          {/* Kontainer Modal */}
          <div className="relative w-full max-w-5xl bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-full animate-in fade-in zoom-in-95 duration-300 border border-white/10">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10 bg-slate-900/80 backdrop-blur-md z-10">
              <div>
                <h3 className="font-bold text-lg text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-sm text-slate-400">{selectedCert.issuer}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 text-slate-400 hover:text-red-400 hover:bg-white/10 rounded-full transition-colors focus:outline-none"
                title="Tutup (Esc)"
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
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-0 overflow-hidden bg-slate-950 flex-grow relative h-[70vh]">
              {selectedCert.image ? (
                selectedCert.image.toLowerCase().endsWith(".pdf") ? (
                  <iframe
                    src={`${selectedCert.image}#toolbar=0&navpanes=0`}
                    title={`Sertifikat ${selectedCert.title}`}
                    className="w-full h-full border-none"
                  />
                ) : (
                  <div className="p-6 w-full h-full flex items-center justify-center overflow-y-auto">
                    <img
                      src={selectedCert.image}
                      alt={`Sertifikat ${selectedCert.title}`}
                      className="max-w-full h-auto max-h-full object-contain rounded-xl shadow-md border border-zinc-200"
                    />
                  </div>
                )
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-500">
                  <svg
                    className="w-12 h-12 mb-3 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>Dokumen tidak ditemukan.</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            {selectedCert.credentialId && (
              <div className="p-4 bg-slate-900/80 backdrop-blur-md border-t border-white/10 text-center text-sm text-slate-400">
                ID Kredensial:{" "}
                <span className="font-mono font-medium text-slate-200">
                  {selectedCert.credentialId}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;

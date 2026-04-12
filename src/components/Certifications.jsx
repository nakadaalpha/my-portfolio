// src/components/Certifications.jsx
import { useState, useEffect } from "react";

const Certifications = () => {
  // State untuk mengontrol modal
  const [selectedCert, setSelectedCert] = useState(null);

  // Efek untuk mengunci scroll background saat modal terbuka
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup saat komponen dilepas
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  // Efek untuk menutup modal dengan tombol 'Escape'
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Data sertifikasi (Tambahkan properti 'image' untuk menampilkan gambar di modal)
  const certificationsData = [
    {
      id: 1,
      title: "Google Data Analytics Professional Certificate",
      issuer: "Coursera",
      date: "Desember 2025",
      credentialId: "GDA-123456789",
      image: "/certificates/google-data-dummy.jpg", // Path gambar asli Anda
      logo: "/logos/google.svg",
    },
    {
      id: 2,
      title: "Menjadi Front-End Web Developer Expert",
      issuer: "Dicoding Indonesia",
      date: "Oktober 2025",
      credentialId: "DCD-FE-987654",
      image: "/certificates/dicoding-dummy.jpg",
      logo: "/logos/dicoding.svg",
    },
    {
      id: 3,
      title: "Certified Laravel Developer",
      issuer: "Laravel",
      date: "Agustus 2025",
      credentialId: "LVD-2025-001",
      image: "/certificates/laravel-dummy.jpg",
      logo: "/logos/Laravel.svg",
    },
    {
      id: 4,
      title: "Cybersecurity Fundamentals",
      issuer: "Cisco Networking Academy",
      date: "Juli 2025",
      credentialId: "CS-F-456123",
      image: "/certificates/cisco-dummy.jpg",
      logo: "/logos/cisco.svg",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 bg-white border-y border-zinc-100"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header Section */}
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight mb-4">
              Verified <span className="text-red-600">Credentials.</span>
            </h2>
            <div className="w-20 h-1.5 bg-yellow-500 rounded-full mb-6 md:mb-0"></div>
          </div>
          <p className="text-zinc-500 max-w-md text-sm md:text-base leading-relaxed">
            Sertifikasi profesional dan pencapaian akademis yang memvalidasi
            keahlian teknis serta komitmen saya terhadap pembelajaran
            berkelanjutan.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="group relative p-6 sm:p-8 bg-zinc-50 border border-zinc-100 rounded-3xl overflow-hidden hover:border-red-200 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
            >
              {/* Latar Belakang Hover */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl z-0"></div>

              {/* Logo Penerbit */}
              <div className="relative z-10 w-16 h-16 rounded-xl bg-white border border-zinc-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                {cert.logo ? (
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-8 h-8 object-contain"
                  />
                ) : (
                  <span className="text-xl font-bold text-zinc-400">
                    {cert.issuer.charAt(0)}
                  </span>
                )}
              </div>

              {/* Konten Sertifikat */}
              <div className="relative z-10 flex-grow w-full">
                <h3 className="text-xl font-bold text-zinc-900 mb-2 leading-snug group-hover:text-red-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-zinc-600 font-medium text-sm mb-1">
                  {cert.issuer}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-500 mt-4 mb-5">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-zinc-400"
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
                    Diterbitkan: {cert.date}
                  </span>
                  {cert.credentialId && (
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 text-zinc-400"
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
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>

                {/* Tombol Buka Modal */}
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-red-600 transition-colors cursor-pointer"
                >
                  Tampilkan Kredensial
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
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
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL VIEWER --- */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop Blur (Klik di luar untuk menutup) */}
          <div
            className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedCert(null)}
          ></div>

          {/* Kontainer Modal */}
          <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-full animate-in fade-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-zinc-100 bg-white z-10">
              <div>
                <h3 className="font-bold text-lg text-zinc-900">
                  {selectedCert.title}
                </h3>
                <p className="text-sm text-zinc-500">{selectedCert.issuer}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors focus:outline-none"
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

            {/* Modal Body (Tempat Gambar) */}
            <div className="p-6 overflow-y-auto flex items-center justify-center bg-zinc-50 flex-grow relative">
              {selectedCert.image ? (
                <img
                  src={selectedCert.image}
                  alt={`Sertifikat ${selectedCert.title}`}
                  className="max-w-full h-auto max-h-[70vh] object-contain rounded-xl shadow-sm border border-zinc-200"
                />
              ) : (
                <div className="w-full h-64 flex flex-col items-center justify-center text-zinc-400">
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
                  <p>Gambar sertifikat belum tersedia.</p>
                </div>
              )}
            </div>

            {/* Modal Footer (Opsional untuk link verifikasi eksternal) */}
            {selectedCert.credentialId && (
              <div className="p-4 bg-white border-t border-zinc-100 text-center text-sm text-zinc-500">
                ID Kredensial:{" "}
                <span className="font-mono font-medium text-zinc-700">
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

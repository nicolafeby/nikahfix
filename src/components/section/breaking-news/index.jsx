import React, { useState } from "react";

export default function BreakingNews() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div>
      <h2 className="text-lg leading-5 text-white font-bold mb-2">
        Information
      </h2>

      <img
        className="w-full rounded-md cursor-pointer hover:scale-105 transition-transform duration-200"
        height={300}
        src="images/together.jpg"
        onClick={() => setShowPreview(true)}
        alt="Together"
      />

      <div className="text-[#AFADA9] text-sm leading-[1.15rem] mt-2">
        <p>
          Hai! Kalian adalah bagian berharga dalam hidup kami, dan dengan
          bahagia kami ingin membagikan kabar bahwa kami akan segera
          melangsungkan pernikahan! ❤️
        </p>
        <p className="mt-2">
          Dengan penuh sukacita, kami mengundang teman-teman dan kerabat semua
          untuk hadir di hari bahagia kami. Pernikahan kami akan dirayakan
          secara sederhana dan penuh kehangatan di Lamongan, bersama keluarga
          serta orang-orang terdekat..
        </p>
        <p className="mt-2">
          Meski begitu, kami sangat mengharapkan doa terbaik agar pernikahan
          kami berjalan lancar dan kehidupan setelahnya dipenuhi kebahagiaan.
        </p>
        <p className="mt-2">Dengan penuh cinta,</p>
        <p>❤️ The bride and groom ❤️</p>
      </div>

      {/* Modal Preview */}
      {showPreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setShowPreview(false)}
        >
          <div
            className="relative max-w-2xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="images/together.jpg"
              alt="Preview"
              className="w-full max-h-[80vh] object-contain rounded-md shadow-lg"
            />
            <button
              className="absolute -top-2 -right-2 bg-white/10 backdrop-blur p-1.5 rounded-full text-white hover:bg-white/20 transition"
              onClick={() => setShowPreview(false)}
              aria-label="Close preview"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

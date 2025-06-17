import React, { useState } from "react";

export default function Bridegroom() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h2 className="text-lg leading-5 text-white font-bold mb-2">
        Bride and Groom
      </h2>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <img
            src="images/nicola.jpg"
            className="w-full rounded-md cursor-pointer hover:scale-105 transition-transform duration-200"
            height={164}
            onClick={() => setSelectedImage("images/nicola.jpg")}
            alt="Muhammad Nicola Feby Salvaturi"
          />
          <div>
            <h4 className="text-sm text-white font-medium mt-2">
              Muhammad Nicola Feby Salvaturi
            </h4>
            <p className="text-[#A3A1A1] text-xs leading-4 mt-2">
              Putra dari Bapak Badri &amp; Ibu Marjinah
            </p>
          </div>
        </div>

        <div>
          <img
            src="images/anita.jpg"
            className="w-full rounded-md cursor-pointer hover:scale-105 transition-transform duration-200"
            height={164}
            onClick={() => setSelectedImage("images/anita.jpg")}
            alt="Anita Dwi Ristanti"
          />
          <div>
            <h4 className="text-sm text-white font-medium mt-2">
              Anita Dwi Ristanti
            </h4>
            <p className="text-[#A3A1A1] text-xs leading-4 mt-2">
              Putri dari Bapak Atim Raharjo (Alm) &amp; Ibu Mukaromah
            </p>
          </div>
        </div>
      </div>

      {/* Modal Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full max-h-[80vh] object-contain rounded-md shadow-lg"
            />
            <button
              className="absolute -top-2 -right-2 bg-white/10 backdrop-blur p-1.5 rounded-full text-white hover:bg-white/20 transition"
              onClick={() => setSelectedImage(null)}
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

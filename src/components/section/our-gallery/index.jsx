import React, { useState } from "react";

const GalleryItem = ({ src, onClick }) => (
  <img
    src={src}
    onClick={() => onClick(src)}
    className="rounded-md hover:scale-105 w-full object-cover cursor-pointer transition-transform duration-300"
    style={{ minHeight: "200px" }}
    alt="Gallery item"
  />
);

export default function OurGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h2 className="text-lg leading-5 text-white font-bold mb-4">
        Our Gallery
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {[
          "/images/DSC_2570.jpg",
          "/images/DSC_2599.jpg",
          "/images/DSC_2681.jpg",
          "/images/DSC_2867.jpg",
          "/images/DSC_2886.jpg",
          "/images/DSC_2919.jpg",
          "/images/DSC_2977.jpg",
          "/images/DSC_3090.jpg",
          "/images/DSC_3160.jpg",
        ].map((src, idx) => (
          <GalleryItem key={idx} src={src} onClick={setSelectedImage} />
        ))}
      </div>

      {/* Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-2xl w-full mx-4"
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

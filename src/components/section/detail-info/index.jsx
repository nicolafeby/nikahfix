import React, { useRef, useState, useEffect } from "react";
import TitleInfo from "../title-info";
import BreakingNews from "../breaking-news";
import Bridegroom from "../bride-groom";
import LoveStory from "../love-story";
import OurGallery from "../our-gallery";
import WishSection from "../wish";
import Footer from "../footer";

export default function DetailInfo() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      const newMuted = !video.muted;
      video.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  return (
    <div className="space-y-5 pb-10">
      <div
        className="w-full relative overflow-hidden"
        style={{ height: "40vh" }}
      >
        <div>
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            playsInline
            src="/images/video_kita_edited.mp4"
          >
            Your browser does not support the video tag.
          </video>

          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black via-black/70 to-transparent text-white">
            <h1 className="text-xl font-bold mb-2">
              Nicola &amp; Anita:
              <br /> Hari Pernikahan Kita
            </h1>
            <p className="text-base">
              A story that intertwines love, challenges, and destiny in one
              journey.
            </p>
          </div>

          <button
            onClick={toggleMute}
            className="absolute top-5 right-6 p-2 bg-transparent border border-white border-opacity-50 rounded-full text-gray-200 hover:bg-opacity-20 hover:bg-gray-400 focus:outline-none"
          >
            {isMuted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M11 4.702a.705.705 0 00-1.203-.498L6.413 7.587A1.4 1.4 0 015.416 8H3a1 1 0 00-1 1v6a1 1 0 001 1h2.416a1.4 1.4 0 01.997.413l3.383 3.384A.705.705 0 0011 19.298z" />
                <line x1="22" y1="9" x2="16" y2="15" />
                <line x1="16" y1="9" x2="22" y2="15" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <path d="M15.54 8.46a5 5 0 010 7.07" />
                <path d="M19.07 4.93a9 9 0 010 12.73" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <TitleInfo />
      <BreakingNews />
      <Bridegroom />
      <LoveStory />

      {/* Our Forever Date Section */}
      <section className="mb-8 px-4 md:px-0 text-sm">
        <h2 className="text-base leading-5 text-white font-semibold mb-3">
          Place and Date
        </h2>
        <div className="space-y-3">
          <a
            href="https://maps.app.goo.gl/GVaddy9BUcnDTCNZ8"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex flex-col rounded-lg bg-zinc-800 p-3 transition-colors hover:bg-zinc-700">
              <div className="relative w-full overflow-hidden rounded-md aspect-video mb-2">
                <img
                  alt="Wedding Venue"
                  loading="lazy"
                  decoding="async"
                  className="object-cover object-[center_40%]"
                  src="/images/ss-rumah.png"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: 0,
                    objectFit: "cover",
                    color: "transparent",
                  }}
                />
              </div>
              <div className="space-y-3 p-2 text-white text-xs">
                <div className="flex gap-2">
                  <span className="text-gray-400">Place:</span>
                  <span>
                    Kediaman Mempelai Pria, Balong, Sendangrejo, kec, Ngimbang,{" "}
                    <span className="text-gray-400">Lamongan</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-400">Date:</span>
                  <span>Rabu, 25 Juni 2025</span>
                </div>
                <div className="space-y-2 mt-2 border-t border-zinc-700 pt-2">
                  <h3 className="text-sm font-medium">Schedule</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <a
                      href="https://maps.app.goo.gl/ThRS4vjKZpMGYvik8" // ganti dengan link maps Masjid Namira
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-zinc-900/50 p-2 rounded-md cursor-pointer hover:bg-zinc-800 transition">
                        <div className="font-medium text-white mb-0.5 text-xs">
                          Akad Nikah
                        </div>
                        <span className="text-gray-400 text-xs">
                          (Masjid Namira Tikung)
                        </span>
                        <div className="text-gray-300 text-xs">
                          09:00 - 10:00 WIB
                        </div>
                      </div>
                    </a>

                    <div className="bg-zinc-900/50 p-2 rounded-md">
                      <div className="font-medium text-white mb-0.5 text-xs">
                        Resepsi
                      </div>
                      <span className="text-gray-400 text-xs">
                        (Kediaman Mempelai Pria)
                      </span>
                      <div className="text-gray-300 text-xs">
                        16:00 WIB - Selesai
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      <OurGallery />
      <WishSection />

      <Footer />
    </div>
  );
}

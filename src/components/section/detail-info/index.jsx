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
  const [isMuted, setIsMuted] = useState(false); // Start with unmuted

  useEffect(() => {
    // Set initial muted state when video ref is ready
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

          {/* Overlay Text */}
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

          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="absolute top-5 right-6 p-2 bg-transparent border border-white border-opacity-50 rounded-full text-gray-200 hover:bg-opacity-20 hover:bg-gray-400 focus:outline-none"
          >
            {isMuted ? (
              // Icon volume-x
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
              // Icon volume-2
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

      {/* Other Sections */}
      <TitleInfo />
      <BreakingNews />
      <Bridegroom />
      <LoveStory />
      <OurGallery />
      <WishSection />
      <Footer />
    </div>
  );
}

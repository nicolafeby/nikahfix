import React, { useRef, useState, useEffect } from "react";
import TitleInfo from "../title-info";
import BreakingNews from "../breaking-news";
import Bridegroom from "../bride-groom";
import LoveStory from "../love-story";
import OurGallery from "../our-gallery";
import WishSection from "../wish";
import Footer from "../footer";
import WeddingGiftSection from "../wedding-gift";
import Header from "../header";
import OurDate from "../our-date/our-date";

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
      <Header />
      <TitleInfo />
      <BreakingNews />
      <Bridegroom />
      <LoveStory />
      <OurDate />
      <OurGallery />
      <WeddingGiftSection />
      <WishSection />
      <Footer />
    </div>
  );
}

import React from 'react';
import TitleInfo from '../title-info';
import BreakingNews from '../breaking-news';
import Bridegroom from '../bride-groom';
import LoveStory from '../love-story';
import OurGallery from '../our-gallery';
import WishSection from '../wish';
import Footer from '../footer';

export default function DetailInfo() {
  return (
    <div className="space-y-5 pb-10">
      <video className="w-full" autoPlay on loop-on controls onVolumeChange={0.001}>
        <source
          src="/images/videoplayback.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
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

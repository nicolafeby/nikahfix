import React from "react";

const GalleryItem = ({ src }) => (
  <img
    src={src}
    className="rounded-md hover:scale-105 w-full object-cover cursor-pointer"
    style={{
      minHeight: "200px",
    }}
  />
);

export default function OurGallery() {
  return (
    <div>
      <h2 className="text-lg leading-5 text-white font-bold mb-4">
        Our Gallery
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <GalleryItem src="/images/DSC_2570.jpg" />
        <GalleryItem src="/images/DSC_2599.jpg" />
        <GalleryItem src="/images/DSC_2681.jpg" />
        <GalleryItem src="/images/DSC_2867.jpg" />
        <GalleryItem src="/images/DSC_2886.jpg" />
        <GalleryItem src="/images/DSC_2919.jpg" />
        <GalleryItem src="/images/DSC_2977.jpg" />
        <GalleryItem src="/images/DSC_3090.jpg" />
        <GalleryItem src="/images/DSC_3160.jpg" />
      </div>
    </div>
  );
}

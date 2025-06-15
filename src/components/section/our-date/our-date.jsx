import React from "react";

export default function OurDate() {
  return (
    <section className="mb-12 px-4 md:px-0">
      <h2 className="text-3xl font-bold mb-6 text-white">Our Forever Date</h2>
      <div className="space-y-4">
        <a
          href="https://maps.app.goo.gl/MNbjLoNGhtnMx5HF6"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="flex flex-col rounded-lg bg-zinc-800 p-4 transition-colors hover:bg-zinc-700">
            <div className="relative w-full overflow-hidden rounded-md aspect-video mb-2">
              <img
                alt="Wedding Venue"
                loading="lazy"
                decoding="async"
                className="object-cover object-[center_40%]"
                src="https://ik.imagekit.io/qq2ao4pe6/map.webp"
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
            <div className="space-y-4 p-2 text-white">
              <div className="flex gap-2">
                <span className="text-gray-400">Place:</span>
                <span>
                  Kediaman Mempelai Wanita, Jl. Kalilom Lor Indah Gang Matahari
                  No.100, <span className="text-gray-400">Surabaya</span>
                </span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-400">Date:</span>
                <span>Jumat, 30 Mei 2025</span>
              </div>
              <div className="space-y-3 mt-2 border-t border-zinc-700 pt-3">
                <h3 className="text-lg font-medium">Schedule</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-zinc-900/50 p-3 rounded-md">
                    <div className="font-medium text-white mb-1">
                      Akad Nikah{" "}
                      <span className="text-gray-400">(Family Only)</span>
                    </div>
                    <div className="text-gray-300">07:00 - 09:00 WIB</div>
                  </div>
                  <div className="bg-zinc-900/50 p-3 rounded-md">
                    <div className="font-medium text-white mb-1">Resepsi</div>
                    <div className="text-gray-300">16:00 WIB - Selesai</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

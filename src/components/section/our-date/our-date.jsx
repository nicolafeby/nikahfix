import React from "react";

export default function OurDate() {
  return (
    <section className="mb-8 text-sm">
      <h2 className="text-lg leading-5 text-white font-bold mb-4">Our Date</h2>
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
                    href="https://maps.app.goo.gl/ThRS4vjKZpMGYvik8"
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
                      13:00 WIB - Selesai
                    </div>
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

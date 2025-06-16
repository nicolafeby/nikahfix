import React, { useRef, useState, useEffect } from "react";

export default function WeddingGiftSection() {
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  return (
    <section className="mb-8 text-sm">
      <h2 className="text-base leading-5 font-semibold mb-3">Wedding Gift</h2>
      <div className="text-[#AFADA9] text-sm leading-[1.15rem] mb-4">
        <p>
          Doa restu dari Bapak/Ibu/Saudara/i merupakan hadiah terindah bagi
          kami. Namun apabila Bapak/Ibu/Saudara/i berkenan memberikan tanda
          kasih secara digital, kami telah menyediakan metode cashless di bawah
          ini.
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setShowBottomSheet(true)}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-2 rounded-md shadow-md transition duration-200"
        >
          🎁 Kirim Hadiah
        </button>
      </div>

      {showBottomSheet && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-zinc-900 w-full max-w-md rounded-t-2xl p-5 border border-zinc-700 relative overflow-hidden">
            {/* Tombol Close Icon */}
            <button
              onClick={() => setShowBottomSheet(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <section className="text-sm text-white mt-6 mb-4">
              <div className="text-center space-y-3 mb-6">
                <div>
                  <p className="font-semibold">
                    Muhammad Nicola Feby Salvaturi
                  </p>
                  <p>
                    <span className="font-semibold">BCA</span> - 5855264789
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Anita Dwi Ristanti</p>
                  <p>
                    <span className="font-semibold">Mandiri</span> -
                    1420015887374
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold">Gift:</span> Balong,
                    Sendangrejo, Kec. Ngimbang, Kab. Lamongan, Jawa Timur
                  </p>
                </div>
              </div>

              {/* QRIS Container */}
              <div className="bg-zinc-800 rounded-md px-4 py-5 flex flex-col items-center justify-center space-y-3">
                <div className="text-center text-white">
                  <p className="text-base font-semibold leading-snug">
                    MUHAMMAD NICOLA <br /> FEBY SALVATURI
                  </p>
                  <p className="text-sm text-gray-400">Scan QRIS Transfer</p>
                </div>

                <img
                  alt="QRIS"
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-[180px] h-auto rounded-md"
                  src="/images/qris.png"
                  style={{ color: "transparent" }}
                />
              </div>
            </section>
          </div>
        </div>
      )}
    </section>
  );
}

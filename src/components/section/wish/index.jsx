// src/components/wish/index.jsx
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase/config";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

export default function WishSection() {
  const [wishes, setWishes] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showBottomSheet, setShowBottomSheet] = useState(false); // ✅ Tambahkan state untuk BottomSheet

  // Ambil data dari Firestore
  const fetchWishes = async () => {
    try {
      const q = query(collection(db, "wishes"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWishes(data);
    } catch (error) {
      console.error("Error fetching wishes:", error);
    }
  };

  // Submit form ke Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    try {
      await addDoc(collection(db, "wishes"), {
        name: name.trim(),
        message: message.trim(),
        createdAt: serverTimestamp(),
      });
      setName("");
      setMessage("");
      fetchWishes(); // Refresh list
    } catch (error) {
      console.error("Error sending wish:", error);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  return (
    <div>
      {/* Header dan Tombol Info */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg leading-5 text-white font-bold">
          Wish for the couple
        </h2>
        <button
          type="button"
          onClick={() => setShowBottomSheet(true)}
          aria-haspopup="dialog"
          aria-expanded={showBottomSheet}
          className="focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#fff"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-info"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
        </button>
      </div>

      {showBottomSheet && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-zinc-900 w-full max-w-md rounded-t-2xl p-5 transition-transform duration-300 animate-slide-up max-h-[90vh] overflow-y-auto border border-zinc-700 relative">
            {/* Tombol Close Icon (kanan atas) */}
            <button
              onClick={() => setShowBottomSheet(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white"
              aria-label="Close"
            >
              {/* Icon X (Lucide or SVG) */}
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

            {/* Wedding Gift Section */}
            <section className="mb-8 text-sm text-white mt-8">
              <h2 className="text-base leading-5 font-semibold mb-3">
                Wedding Gift
              </h2>

              <div className="text-[#AFADA9] text-sm leading-[1.15rem] mb-4">
                <p>
                  Doa restu dari Bapak/Ibu/Saudara/i merupakan hadiah terindah
                  bagi kami. Namun apabila Bapak/Ibu/Saudara/i berkenan
                  memberikan tanda kasih secara digital, kami telah menyediakan
                  metode pembayaran non-tunai di bawah ini.
                </p>
              </div>

              <div className="text-center text-white text-sm space-y-3 mt-6">
                <div>
                  <p className="font-semibold">
                    Muhammad Nicola Feby Salvaturi
                  </p>
                  <p>
                    <span className="font-semibold">BCA</span> - 5855264789
                  </p>
                </div>
                <div>—</div>
                <div>
                  <p className="font-semibold">Anita Dwi Ristanti</p>
                  <p>
                    <span className="font-semibold">Mandiri</span> -
                    1420015887374
                  </p>
                </div>
                <div>—</div>
                <div>
                  <p>
                    <span className="font-semibold">Gift:</span> Balong,
                    Sendangrejo, Kec. Ngimbang, Kab. Lamongan, Jawa Timur
                  </p>
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-md mb-2 py-6 bg-zinc-800 flex flex-col items-center justify-center space-y-4 scale-50 origin-top">
                <div className="text-center text-white">
                  <p className="text-lg font-semibold leading-snug">
                    MUHAMMAD NICOLA <br /> FEBY SALVATURI
                  </p>
                  <p className="text-base text-gray-400 mt-1">
                    Scan QRIS Pembayaran
                  </p>
                </div>

                <img
                  alt="QRIS"
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-xs h-auto rounded-md mt-4"
                  src="/images/qris.png"
                  style={{ color: "transparent" }}
                />
              </div>
            </section>
          </div>
        </div>
      )}

      {/* List Wishes */}
      <div className="h-[20rem] overflow-auto space-y-4 mt-4">
        {wishes.map((wish, index) => {
          const icons = [
            "guest-icon.png",
            "guest-icon-green.png",
            "guest-icon-yellow.png",
          ];
          const iconSrc = `images/${icons[index % icons.length]}`;

          return (
            <div key={wish.id} className="flex gap-2 items-start">
              <img
                src={iconSrc}
                alt="guest-icon"
                className="w-6 h-6 bg-[#48cae4] rounded-[4px] object-cover"
              />
              <div>
                <p className="text-white text-md -mt-1">{wish.name}</p>
                <p className="text-xs text-[#A3A1A1]">{wish.message}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="space-y-1">
          <label className="text-white">Name</label>
          <input
            className="rounded-sm w-full focus:outline-none px-2 py-1 text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="space-y-1">
          <label className="text-white">Message</label>
          <textarea
            className="rounded-sm w-full focus:outline-none px-2 py-1 text-black"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-white text-black font-bold rounded-sm"
        >
          Send
        </button>
      </form>
    </div>
  );
}

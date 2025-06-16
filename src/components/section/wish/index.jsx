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
      <div className="flex items-center  mb-4">
        <h2 className="text-lg leading-5 text-white font-bold">
          Wish for the couple
        </h2>
      </div>

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

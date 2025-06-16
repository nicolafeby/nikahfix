import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="mt-8 flex flex-col items-center">
        <p className="font-bold text-white text-sm">Terimakasih</p>
        {/* <p className="font-serif font-bold text-white text-2xl">Terimakasih</p> */}

        <p className="font-serif italic text-white text-sm">
          Kami Yang Berbahagia
        </p>

        <p className="text-white text-sm">Kedua Mempelai & Keluarga Besar 🤍</p>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <p className="text-[10px] text-[#A3A1A1] mb-2">
          E-Invitation made with ♥ by{" "}
          <a
            className="underline"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/nicolaafebyy/"
          >
            Muhammad Nicola Feby Salvaturi
          </a>
        </p>

        <p className="text-[10px] text-[#A3A1A1]">
          Inspired by{" "}
          <span className="text-red-600 font-semibold">NETFLIX</span>
        </p>
      </div>
    </div>
  );
}

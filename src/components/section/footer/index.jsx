import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="mt-8 flex flex-col items-center">
        <p className="font-bold text-white text-sm">Terimakasih</p>
        <p className="font-serif italic text-white text-sm">
          Kami Yang Berbahagia
        </p>
        <p className="text-white text-sm">Kedua Mempelai & Keluarga Besar 🤍</p>
      </div>

      <div className="mt-8 flex flex-col items-center text-[10px] text-[#A3A1A1]">
        <p className="mb-1">
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
        <p>
          Inspired by{" "}
          <span className="text-red-600 font-semibold">NETFLIX</span>
        </p>
      </div>

      <div className="mt-6 flex flex-col items-center">
        <h4 className="text-white text-[11px] font-semibold mb-1">
          Hubungi Kami
        </h4>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <a
            href="mailto:nicola@nicolaboard.my.id"
            className="text-[#A3A1A1] text-[10px] hover:underline"
          >
            nicola@nicolaboard.my.id
          </a>
          <a
            href="mailto:help@nicolaboard.my.id"
            className="text-[#A3A1A1] text-[10px] hover:underline"
          >
            help@nicolaboard.my.id
          </a>
        </div>
      </div>
    </div>
  );
}

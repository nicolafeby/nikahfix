import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="mt-8 flex flex-col items-center">
        <p className="font-bold text-white text-sm">
          Thank you for checking up all the things up there!
        </p>
        <p className="font-bold text-white text-sm">
          Can’t wait to see u again! 🤍
        </p>
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

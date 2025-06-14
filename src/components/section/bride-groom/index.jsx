import React from 'react';

export default function Bridegroom() {
  return (
    <div>
      <h2 className="text-lg leading-5 text-white font-bold mb-2">
        Bride and Groom
      </h2>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <img
            src="images/Doraemon.png"
            className="w-full rounded-md"
            height={164}
          />
          <div>
            <h4 className="text-sm text-white font-medium mt-2">Doremon</h4>
            <p className="text-[#A3A1A1] text-xs leading-4 mt-2">
              Putra dari Doraemon &amp; Doraemon
            </p>
          </div>
        </div>
        <div>
          <img
            src="images/Doraemon.png"
            className="full rounded-md"
            height={164}
          />
          <div>
            <h4 className="text-sm text-white font-medium mt-2">Doraemoncewe</h4>
            <p className="text-[#A3A1A1] text-xs leading-4 mt-2">
              Putri dari Doraemon &amp; Doraemon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

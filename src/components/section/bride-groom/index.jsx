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
            <h4 className="text-sm text-white font-medium mt-2">Muhammad Nicola Feby Salvaturi</h4>
            <p className="text-[#A3A1A1] text-xs leading-4 mt-2">
              Putra dari Bapak Badri &amp; Ibu Marjinah
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
            <h4 className="text-sm text-white font-medium mt-2">Anita Dwi Ristanti</h4>
            <p className="text-[#A3A1A1] text-xs leading-4 mt-2">
              Putri dari Bapak Atim Raharjo (Alm) &amp; Ibu Mukaromah
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

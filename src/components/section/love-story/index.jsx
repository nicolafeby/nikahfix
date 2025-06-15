import React from "react";

const LoveItem = ({ imageUrl, title, duration, description }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <img
            className="w-full rounded-md object-cover"
            height={100}
            style={{
              maxHeight: "100px",
            }}
            src={imageUrl}
            alt="dummy"
          />
        </div>
        <div className="flex justify-center">
          <div className="my-auto">
            <p className="text-white mb-2 tracking-tighter">{title}</p>
            <p className="text-xs text-[#A3A1A1]">{duration}</p>
          </div>
        </div>
      </div>
      <p className="text-[#A3A1A1] text-xs mt-2">{description}</p>
    </div>
  );
};

export default function LoveStory() {
  return (
    <div>
      <h2 className="text-lg leading-5 text-white font-bold mb-4">
        Our Love Story
      </h2>
      <div className="space-y-4">
        <LoveItem
          imageUrl="images/foto_sma.JPG"
          title="Episode 1: How We Met Each Other that Time"
          duration="26m 10s"
          description="Nicola dan Anita pertama kali bertemu di SMA, saat Nicola dan Anita adalah teman satu kelas semasa kelas 3 SMA. 
          Sejak saat itu, mereka mulai saling mengenal dan menjalin persahabatan yang erat."
        />
        <LoveItem
          imageUrl="images/malang.jpg"
          title="Episode 2: A Love That Grows With Time"
          duration="26m 10s"
          description="Setelah lulus SMA, Nicola dan Anita harus berpisah karena Nicola melanjutkan kuliah di Bandung, sementara Anita melanjutkan kuliah di Surabaya."
        />
        <LoveItem
          imageUrl="images/lamaran.jpg"
          title="Episode 3: Choose to Spend Life Together"
          duration="26m 10s"
          description="Seiring berjalannya waktu tak terasa hubungan sudah berjalan selama 7 tahun. Tepat pada bulan Desember 2024, Nicola memutuskan untuk melamar Anita"
        />
        <LoveItem
          imageUrl="images/final-episode.png"
          title="[Coming Soon] Final Episode: The Beginning of Forever"
          duration="26m 10s"
          description="Ketika hari H itu datang, Nicola dan Anita akan berbagi kisah haru mereka di sini. Sampai bertemu lagi di cerita bahagia selanjutnya!"
        />
      </div>
    </div>
  );
}

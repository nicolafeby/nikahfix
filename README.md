# NIKAHFIX

**NIKAHFIX** adalah sebuah website undangan pernikahan yang terinspirasi dari tampilan _Netflix_, yang memberikan pengalaman visual menarik dan modern untuk pengguna. Proyek ini dibuat menggunakan **React** dengan bundler **Vite**, dan dirancang agar mudah diakses, responsif, serta estetis.

## Demo

Anda dapat melihat demo langsung dari NIKAHFIX di sini: [NIKAHFIX - Demo](https://nikahfix.nicolaboard.my.id)

## Teknologi yang Digunakan

- **React**: Library JavaScript untuk membangun antarmuka pengguna.
- **Vite**: Bundler modern untuk pengembangan aplikasi web cepat dengan konfigurasi minimal.
- **TailwindCSS**: Untuk mendesain tampilan visual agar lebih menarik.
- **Firebase**: Platform yang digunakan untuk menyajikan fitur Wishes sections.

## Instalasi

Berikut adalah langkah-langkah untuk menginstal proyek ini di lingkungan lokal Anda:

1. **Clone Repository**:

   ```bash
   git clone https://github.com/nicolafeby/nikahfix.git
   ```

2. **Masuk ke Direktori Proyek**:

   ```bash
   cd nikahfix
   ```

3. **Instal Dependensi**:
   Pastikan Anda sudah menginstal Node.js. Jalankan perintah berikut untuk menginstal semua dependensi yang diperlukan.

   ```bash
   npm install
   ```

4. **Menjalankan Proyek**:
   Setelah semua dependensi terpasang, jalankan proyek dengan perintah:

   ```bash
   npm run dev
   ```

5. **Menyiapkan Firebase Proyek**:
   Buka Firebase Console [Firebase Console](https://console.firebase.google.com)

   1. Klik “Add project”
   2. Ikuti wizard (bisa lewati Google Analytics jika tidak diperlukan)
   3. Setelah selesai, kamu akan masuk ke dashboard Firebase project-mu.
   4. Klik ikon “</>” Web App di halaman project
   5. Masukkan nama app → contoh: nikahfix
   6. Centang “Also set up Firebase Hosting” kalau mau, tapi tidak wajib
   7. Setelah dibuat, kamu akan mendapatkan kredensial, copy dan simpan kredensial ada file .env
   8. Di Firebase Console, buka menu “Firestore Database”
   9. Klik Create Database
   10. Pilih Start in test mode (agar mudah dulu, nanti bisa atur rules lagi)
   11. Pilih lokasi (default saja biasanya us-central)
   12. Setelah setup Firestore selesai, jangan lupa install firebase

   ```bash
   npm install firebase
   ```

6. **Mengakses Proyek**:
   Buka browser Anda dan akses proyek di

   ```bash
   http://localhost:5173
   ```

## Struktur Proyek

- `src/` - Berisi komponen utama, gaya, dan logika aplikasi.
- `public/` - Berisi aset-aset statis, seperti gambar dan ikon.
- `vite.config.js` - Konfigurasi untuk Vite bundler.

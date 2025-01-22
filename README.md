# FrontEnd Intern React

-- Rifki Ilham Lutfika - Informatika 24 --

## Link Terkait

- **Website Online**: [Frontend Intern - Rifki Ilham Lutfika](https://frontend-intern-rifki-ilham-lutfika.netlify.app/)
- **GitHub Repository**: [FrontendDevReactjs-Rifki_Ilham_Lutfika](https://github.com/Rilkayt/FrontendDevReactjs-Rifki_Ilham_Lutfika)
- **Netlify Project** : [Frontend Intern - Netlify ](https://app.netlify.com/sites/frontend-intern-rifki-ilham-lutfika/configuration/general#danger-zone)
- **API**: [API Restaurant](https://api-restaurant-gules.vercel.app/api/data)

## Catatan

- API ini **tanpa menggunakan credential key** (pribadi).

- Pastikan Device Tersambung Ke Internet Dikarenakan Ada Beberapa Gambar Yang Membutuhkan Load Internet Yang Cukup

- Untuk akun github : username `Rilkayt` & password `Rifki25$6`

### Information Tecnology 🌟

| Technology             | Version     |
| ---------------------- | ----------- |
| **Node.js**            | v20.16.0    |
| **NPM**                | v10.8.2     |
| **Axios**              | ^1.7.9      |
| **Leaflet**            | ^1.9.4      |
| **React**              | ^19.0.0     |
| **React-DOM**          | ^19.0.0     |
| **React-Icons**        | ^5.4.0      |
| **React-Leaflet**      | ^5.0.0-rc.2 |
| **React-Router**       | ^7.1.3      |
| **React-Star-Ratings** | ^2.3.0      |
| **TailwindCSS**        | ^3.4.17     |
| **Vite**               | ^6.0.5      |

---

## Instalasi

1. **Clone repository** ke mesin lokal:

   ```bash
   git clone https://github.com/Rilkayt/FrontendDevReactjs-Rifki_Ilham_Lutfika.git
   ```

2. \*\*Masuk ke folder proyek:

   ```bash
   cd FrontEnd-Developer_SM
   ```

3. Install dependencies: Jika menggunakan npm:

   ```bash
   npm install
   ```

   Jika menggunakan yarn :

   ```bash
   yarn install
   ```

4. Jalankan aplikasi: Jika menggunakan npm:

   ```bash
   npm run dev
   ```

   Jika menggunakan yarn :

   ```bash
   yarn dev
   ```

5. Akses aplikasi di browser: Buka browser dan kunjungi:
   ```bash
   http://localhost:5173/
   ```

## Kendala

Saya mengalami kendala pada fitur **Maps**, yaitu:

- **Masalah**: Maps berhasil muncul dan dapat digunakan, namun gambarnya tidak tampil secara penuh (load tidak sempurna).
- **Analisis**: Kemungkinan disebabkan oleh:
  1. Koneksi internet yang tidak stabil.
  2. Permasalahan lain terkait rendering atau konfigurasi maps.
- **Upaya yang Dilakukan**:
  - Mencoba berkali-kali dengan koneksi internet yang memadai, namun hasilnya tetap sama.

## Status

Proyek ini telah selesai dikerjakan. ✅

## Pengalaman

Dalam mengerjakan proyek ini, saya mendapatkan beberapa pembelajaran dan tantangan, khususnya terkait dengan filtering data dan load more API. Berikut adalah penjelasan detailnya:

### 1. **Filtering Data**

- **Masalah**: Filtering data idealnya dilakukan di sisi **backend** untuk mengurangi beban pada **client**. Namun, karena dua filter perlu dilakukan di sisi **frontend**, semua data harus ditampung oleh **client**.
- **Dampak**:
  - **Frontend** menjadi lebih berat karena harus memproses semua data.
  - **Backend** hanya terbebani pada saat pengambilan data awal, namun setelah itu menjadi ringan.
- **Keuntungan dan Risiko**:
  - Untuk dataset kecil (~17 data), metode ini masih dapat diterima.
  - Jika dataset besar, beban di sisi **frontend** akan meningkat secara signifikan.
- **Solusi Filtering Harga**:

  - Saya menerapkan logika untuk mengambil nilai harga **tertinggi** dari setiap restoran.
  - Filter yang digunakan adalah:
    - `<= 50K`, `51K - 150K`, `151K - 300K`, `301K - 1000K`, dan `> 1000K`.
  - Contoh:
    - Restoran A (harga 20K - 40K): Masuk ke filter `<= 50K`.
    - Restoran B (harga 10K - 300K): Masuk ke filter `151K - 300K` (berdasarkan harga tertinggi).

  **Alasan Batasan Filter**:

  - Dengan pendekatan ini, setiap restoran hanya masuk ke satu filter sesuai kategori.
  - Jika menggunakan rentang tanpa batasan, seperti `<50K`, `<100K`, `<150K`, maka restoran dapat masuk ke beberapa kategori sekaligus, yang kurang optimal.

### 2. **Load More API**

- **Pendekatan**:
  - Menggunakan metode **limit** dan **skip** pada pemanggilan data API.
  - Dengan cara ini, **frontend** tidak perlu memuat seluruh data sekaligus, sehingga beban **client** lebih ringan.
  - **Backend** hanya mengirim data dalam jumlah kecil sesuai kebutuhan.
- **Keuntungan**:
  - Keseimbangan antara **frontend** dan **backend** dapat tercapai.
  - Menghindari pemborosan resource jika dataset besar.

---

### Kesimpulan

Melalui pengalaman ini, saya memahami pentingnya:

1. Menentukan lokasi pemrosesan data (frontend vs backend) sesuai kebutuhan.
2. Mengoptimalkan performa dengan metode seperti **limit** dan **skip**.
3. Membuat batasan filter yang logis untuk meningkatkan akurasi hasil.

## Salam Hangat 🤝

Terima Kasih Bapak Ibu HRD - Sekawan Media
Yang telah memberikan kesempatan kepada saya untuk mengikuti technical test untuk program instership ini

Tentu dari project ini masih ada yang kurang , maka saya terbuka kepada bapak ibu Sekawan Media atas masukan, kritik dan saran 🌟

**Salam hangat,**  
**Rifki Ilham Lutfika**

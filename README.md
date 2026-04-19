## ⚡ CHAT P2P WHISPER v1.0 ⚡
> **Anonymous & Ultra-Private P2P Local Chat System**

Chat P2P Whisper adalah platform obrolan anonim berbasis jaringan lokal (Wi-Fi). Dirancang untuk privasi total, sistem ini tidak memerlukan database, tidak ada log permanen, dan data hanya mengalir di dalam router yang sama. **Sangat cocok untuk komunikasi rahasia di kantor, rumah, atau komunitas.**

---

## 💎 Fitur Unggulan
* **Zero Persistence:** Chat hilang selamanya saat server dimatikan.
* **P2P Local Network:** Tidak butuh koneksi internet, hanya butuh satu jaringan Wi-Fi.
* **Multimedia Support:** Kirim teks, gambar, dokumen, dan pesan suara (Voice Note).
* **Neo-Brutalism UI:** Tampilan modern, premium, dan responsif (Mobile/Desktop).
* **Auto IP Detection:** Menampilkan link akses otomatis saat server dijalankan.

---

## 🛠️ Persyaratan Sistem
* **Node.js** (Versi 14 atau terbaru)
* **NPM** (Biasanya ikut terinstall dengan Node.js)
* **Git** (Untuk cloning repository)

---

## 🚀 Panduan Instalasi (Termux/Linux/Windows)

### 1. Persiapan Environment
Pastikan kamu sudah menginstall Node.js. Untuk pengguna **Termux**, jalankan:
```bash
pkg update && pkg upgrade -y
pkg install nodejs git -y
```
Clone & Setup
​Jalankan perintah berikut secara berurutan:
```bash
# Clone repository ini
git clone [https://github.com/USERNAME_KAMU/lan-whisper.git](https://github.com/USERNAME_KAMU/lan-whisper.git)

# Masuk ke folder proyek
cd lan-whisper

# Install library yang dibutuhkan
npm install
```
Menjalankan Server
​Jalankan perintah ini untuk menghidupkan sistem:
```bash
node server.js
```
Cara Mengakses
​Setelah server jalan, akan muncul banner di terminal:
​Akses Lokal (Diri Sendiri): Buka browser dan ketik http://localhost:8080
​Akses Teman (Satu Wi-Fi): Berikan link IP yang muncul di terminal (contoh: http://192.168.1.3:8080) kepada temanmu.

🛡️ Keamanan & Privasi
​Enkripsi Lokal: Data dikirim melalui WebSockets secara langsung.
​RAM-Based: Seluruh data obrolan disimpan di RAM. Begitu proses server dihentikan (Ctrl + C), semua riwayat akan terhapus secara permanen.
​No Tracking: Tidak ada pelacakan IP atau penyimpanan cookies.
​🤝 Kontribusi
​Punya ide buat bikin "senjata" ini lebih ganas? Langsung aja:
​Fork proyek ini
​Buat branch baru (git checkout -b fitur-keren)
​Commit perubahan (git commit -m 'Tambah fitur x')
​Push ke branch (git push origin fitur-keren)
​Buat Pull Request
​Developed with 🔥 by [Rolandino / SPY-E]
"Privacy isn't an option, it's a right."

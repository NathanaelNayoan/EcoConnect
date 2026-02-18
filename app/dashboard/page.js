"use client";

import { useState } from "react"; // 1. Kita impor 'otak' penyimpan data
import Link from "next/link";

export default function Dashboard() {
  
  // 2. Ini adalah 'State' (Data yang bisa berubah)
  // [namaData, fungsiPengubahData] = useState(nilaiAwal)
  const [poin, setPoin] = useState(1250);
  const [sampah, setSampah] = useState(15.4);

  // Fungsi saat tombol Setor diklik
  const handleSetor = () => {
    // Tambah poin 100, tambah sampah 2.5 kg
    setPoin(poin + 100); 
    setSampah(sampah + 2.5);
    
    alert("Berhasil setor! Poinmu bertambah +100 🚀");
  };

  const handleTukar = () => {
    if (poin >= 500) {
      setPoin(poin - 500); // Kurangi poin
      alert("Hore! Poin berhasil ditukar dengan pulsa 🎁");
    } else {
      alert("Yah, poinmu kurang. Kumpulkan sampai 500 dulu ya!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-6">
        
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-green-800">Halo, Budi! 👋</h1>
            <p className="text-gray-600">Selamat datang kembali.</p>
          </div>
          <Link href="/" className="px-4 py-2 bg-red-100 text-red-600 font-bold rounded-lg hover:bg-red-200 transition">
            Keluar
          </Link>
        </div>

        {/* Statistik (Sekarang angkanya mengambil dari State 'poin' dan 'sampah') */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500 transition-all duration-300 transform hover:scale-105">
            <p className="text-gray-500 text-sm">Total Poin Saya</p>
            {/* Tampilkan variabel poin */}
            <h2 className="text-3xl font-bold text-gray-800 mt-1">{poin} <span className="text-sm font-normal text-gray-500">pt</span></h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 transition-all duration-300 transform hover:scale-105">
            <p className="text-gray-500 text-sm">Sampah Daur Ulang</p>
            {/* Tampilkan variabel sampah */}
            <h2 className="text-3xl font-bold text-gray-800 mt-1">{sampah.toFixed(1)} <span className="text-sm font-normal text-gray-500">kg</span></h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
            <p className="text-gray-500 text-sm">Kontribusi Pohon</p>
            <h2 className="text-3xl font-bold text-gray-800 mt-1">3 <span className="text-sm font-normal text-gray-500">pohon</span></h2>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button 
            onClick={handleSetor}
            className="flex items-center justify-center p-8 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition transform hover:scale-105 active:scale-95"
          >
            <span className="text-2xl font-bold">+ Setor Sampah Baru</span>
          </button>
          
          <button 
            onClick={handleTukar}
            className="flex items-center justify-center p-8 bg-white text-green-600 border-2 border-green-600 rounded-xl shadow-lg hover:bg-green-50 transition transform hover:scale-105 active:scale-95"
          >
            <span className="text-2xl font-bold">🎁 Tukar Poin (-500)</span>
          </button>
        </div>

      </div>
    </div>
  );
}
import { NextResponse } from "next/server";

// Ini fungsi Backend untuk menangani permintaan GET
export async function GET() {
  
  // Bayangkan di sini kita mengambil data dari Database...
  const dataRahasia = {
    pesan: "Halo! Ini pesan dari Backend Server EcoConnect 🚀",
    waktu: new Date().toLocaleString(),
    status: "Server Aktif",
    user: "Admin"
  };

  // Kirim respon balik ke frontend/browser
  return NextResponse.json(dataRahasia);
}
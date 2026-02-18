import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-green-50">
      
      {/* --- HERO SECTION (BAGIAN ATAS) --- */}
      <div className="container mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-green-900 leading-tight">
            Jaga Bumi, <br />
            <span className="text-green-600">Dapat Rezeki.</span> 🌿
          </h1>
          <p className="text-lg text-gray-600">
            Bergabunglah dengan EcoConnect. Platform kolaborasi untuk mengelola sampah, menanam pohon, dan menciptakan lingkungan yang lebih hijau.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="/login" className="px-8 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition duration-300 shadow-lg">
              Mulai Sekarang
            </Link>
            <Link href="/about" className="px-8 py-3 bg-white text-green-600 font-bold rounded-full border border-green-200 hover:bg-green-50 transition duration-300">
              Pelajari Dulu
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Ilustrasi Lingkungan"
            className="rounded-2xl shadow-2xl w-full max-w-lg object-cover"
          />
        </div>
      </div>

      {/* --- FITUR UTAMA (BAGIAN BARU) --- */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          
          <h2 className="text-3xl font-bold text-green-900 mb-12">Kenapa EcoConnect?</h2>

          {/* Grid Layout: 1 kolom di HP, 3 kolom di Laptop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Kartu 1 */}
            <div className="p-8 bg-green-50 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Setor Sampah</h3>
              <p className="text-gray-600">
                Jangan buang sampahmu. Pilah dan setor ke bank sampah terdekat lewat aplikasi kami.
              </p>
            </div>

            {/* Kartu 2 */}
            <div className="p-8 bg-green-50 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Dapat Poin</h3>
              <p className="text-gray-600">
                Setiap kilogram sampah yang kamu setor akan berubah menjadi poin yang bisa ditukar uang.
              </p>
            </div>

            {/* Kartu 3 */}
            <div className="p-8 bg-green-50 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Komunitas Hijau</h3>
              <p className="text-gray-600">
                Temukan teman sesama pecinta lingkungan dan ikuti acara penanaman pohon bersama.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
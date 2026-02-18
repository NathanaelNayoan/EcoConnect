import Link from "next/link";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-green-100">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-800">Buat Akun Baru 🌱</h1>
          <p className="text-gray-500 mt-2">Gabung komunitas hijau sekarang.</p>
        </div>

        <form className="space-y-5">
          
          {/* Input Nama Lengkap (Tambahan Baru) */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap</label>
            <input 
              type="text" 
              placeholder="Budi Santoso"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input 
              type="email" 
              placeholder="nama@email.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
            />
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-300 shadow-lg transform active:scale-95">
            Daftar Sekarang
          </button>

        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Sudah punya akun?{' '}
          <Link href="/login" className="text-green-600 font-bold hover:underline">
            Masuk di sini
          </Link>
        </div>

      </div>
    </div>
  );
}
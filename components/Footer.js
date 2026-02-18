export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        
        {/* Bagian Kiri: Brand */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">EcoConnect 🌿</h2>
          <p className="text-green-200 text-sm mt-1">
            Bersama membuat bumi lebih hijau.
          </p>
        </div>

        {/* Bagian Kanan: Copyright */}
        <div className="text-green-200 text-sm">
          &copy; {new Date().getFullYear()} EcoConnect. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
}
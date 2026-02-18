import Link from 'next/link';

export default function Navbar() { // Harus ada kata 'export default'
  return (
    <nav className="bg-green-600 p-4 text-white shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          EcoConnect 🌿
        </Link>
        <div className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/login" className="px-6 py-2 bg-white text-green-600 font-bold rounded-full hover:bg-green-100 transition duration-300">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
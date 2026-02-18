import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Import Footer di sini

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        {/* Bagian 'flex-grow' membuat konten utama mendorong footer ke bawah */}
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
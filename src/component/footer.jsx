import React from 'react';
import microsoftLogo from '../assets/footer/microsft.svg';
import googleLogo from '../assets/footer/google.svg';
import igLogo from '../assets/footer/ig.svg';
import fbLogo from '../assets/footer/fb.svg';
import twitterLogo from '../assets/footer/x.svg';
import appleDownload from '../assets/footer/apple.png';
import playstoreDownload from '../assets/footer/pyy.png';
import bcaPay from '../assets/footer/bca.svg';
import kurir from '../assets/footer/kurir.svg';


const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 text-sm pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 grid-cols-2 gap-8">

        {/* Jelajahi Tokoku */}
        <div>
          <h3 className="font-bold mb-2">Jelajahi Tokoku</h3>
          <ul className="space-y-1">
            {[
              "Tentang Tokoku", "Karir", "Blog", "Kebijakan Tokoku", "Kebijakan Privasi",
              "Tokoku Mall", "Flash Sales", "Seller Center", "Kontak Media",
              "Promo Hari", "Beli Lokal", "Promo Guncang",
            ].map((item) => (
              <li key={item} className="cursor-pointer hover:text-red-500 transition">{item}</li>
            ))}
          </ul>
        </div>

        {/* Jual Beli */}
        <div>
          <h3 className="font-bold mb-2">Jual Beli</h3>
          <ul className="space-y-1 mb-4">
            {["Cashback", "Bebas Ongkir", "Garansi Tokoku", "Pengembalian Dana"].map((item) => (
              <li key={item} className="cursor-pointer hover:text-red-500 transition">{item}</li>
            ))}
          </ul>
          <h3 className="font-bold mb-2">Kerja Sama</h3>
          <ul className="space-y-1 mb-4">
            {["Affiliate Program", "Jual di Tokoku", "B2B Program"].map((item) => (
              <li key={item} className="cursor-pointer hover:text-red-500 transition">{item}</li>
            ))}
          </ul>
          <h3 className="font-bold mb-2">Bantuan</h3>
          <ul className="space-y-1">
            {["Tokoku Care", "Ketentuan"].map((item) => (
              <li key={item} className="cursor-pointer hover:text-red-500 transition">{item}</li>
            ))}
          </ul>
        </div>

        {/* Keamanan & Sosial */}
        <div>
          <h3 className="font-bold mb-2 sm:text-lg">Keamanan & Privasi</h3>
          <div className="flex items-center space-x-4 mb-6">
            <img src={microsoftLogo} alt="Microsoft" className="h-6 sm:h-6 w-18" />
            <img src={googleLogo} alt="Google" className="h-6 sm:h-6 w-16" />
          </div>
          <h3 className="font-bold mb-2">Ikuti Kami</h3>
          <div className="flex items-center space-x-4 h:3 w:2">
            <img src={twitterLogo} alt="Twitter" className="h-8 w-8 cursor-pointer hover:scale-110 transition" />
            <img src={fbLogo} alt="Facebook" className="h-8 w-8 cursor-pointer hover:scale-110 transition" />
            <img src={igLogo} alt="Instagram" className="h-8 w-8 cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

        {/* Download App */}
        <div>
          <h3 className="font-bold mb-2">Download Aplikasi</h3>
          <div className="space-y-2">
            <img src={appleDownload} alt="App Store" className="w-31 cursor-pointer hover:opacity-80 transition" />
            <img src={playstoreDownload} alt="Google Play" className="w-34 cursor-pointer hover:opacity-80 transition" />
          </div>
        </div>

        {/* Pembayaran & Pengiriman */}
        <div>
          <h3 className="font-bold mb-2">Pembayaran</h3>
          <div className="grid grid-cols-2 gap-3 mb-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white h-13 w-full rounded shadow flex items-center justify-center">
                <img
                  src={bcaPay}
                  alt="BCA Pay"
                  className="w-8 cursor-pointer hover:opacity-80 transition"
                />
              </div>
            ))}
          </div>
          <h3 className="font-bold mb-2">Pengiriman</h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="bg-white h-14 rounded shadow flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <img
                  src={kurir}
                  alt={`Kurir ${i + 1}`}
                  className="w-8 h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center text-xs mt-6">© 2009 - 2025, PT. Tokoku.</div>
    </footer>
  );
};

export default Footer;

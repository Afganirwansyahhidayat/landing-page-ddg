import React from 'react';
import microsoftLogo from '../assets/footer/microsft.svg';
import googleLogo from '../assets/footer/google.svg';
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa";
import { SiMicrosoft, SiGoogle } from "react-icons/si";


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
          <h3 className="font-bold mb-2">Keamanan & Privasi</h3>
          <div className="flex items-center space-x-4 mb-6">
            <img src={microsoftLogo} alt="Microsoft" className="h-6" />
            <img src={googleLogo} alt="Google" className="h-6" />
          </div>
          <h3 className="font-bold mb-2">Ikuti Kami</h3>
          <div className="flex items-center space-x-4">
            <img src="/icons/twitter.png" alt="Twitter" className="h-5 w-5 cursor-pointer hover:opacity-70 transition" />
            <img src="/icons/facebook.png" alt="Facebook" className="h-5 w-5 cursor-pointer hover:opacity-70 transition" />
            <img src={FaInstagram} alt="Instagram" className="h-5 w-5 cursor-pointer hover:opacity-70 transition" />
          </div>
        </div>

        {/* Download App */}
        <div>
          <h3 className="font-bold mb-2">Download Aplikasi</h3>
          <div className="space-y-2">
            <img src="/buttons/appstore.png" alt="App Store" className="w-32 cursor-pointer hover:opacity-80 transition" />
            <img src="/buttons/playstore.png" alt="Google Play" className="w-32 cursor-pointer hover:opacity-80 transition" />
          </div>
        </div>

        {/* Pembayaran & Pengiriman */}
        <div>
          <h3 className="font-bold mb-2">Pembayaran</h3>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-white h-8 rounded shadow" />
            ))}
          </div>
          <h3 className="font-bold mb-2">Pengiriman</h3>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="bg-white h-8 rounded shadow" />
            ))}
          </div>
        </div>
      </div>
      <div className="text-center text-xs mt-6">© 2009 - 2025, PT. Tokoku.</div>
    </footer>
  );
};

export default Footer;

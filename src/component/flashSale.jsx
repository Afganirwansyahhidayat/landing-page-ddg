import React, { useState, useEffect } from 'react';
import kotak from "../assets/kotak.svg";

const TimeFlash = () => {
  // Set waktu awal dalam detik (contoh: 3 hari 23 jam 19 menit 56 detik)
  const [timeLeft, setTimeLeft] = useState(3 * 24 * 3600 + 23 * 3600 + 19 * 60 + 56);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Hitung hari, jam, menit, detik dari total detik
  const days = Math.floor(timeLeft / (3600 * 24));
  const hours = Math.floor((timeLeft % (3600 * 24)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center gap-8 ml-46">
      {/* Flash Sales Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-700 opacity-70">
        Flash Sales
      </h1>

      {/* Countdown Timer */}
      <div className="flex items-center space-x-2 mt-1">
  {/* Hari */}
  <div className="flex flex-col items-center">
    <span className="text-xs text-gray-500 mb-1">Hari</span>
    <div className="bg-gray-200 rounded-md p-2 min-w-[40px] text-center">
      <span className="text-xl font-bold text-gray-700">{String(days).padStart(2, '0')}</span>
    </div>
  </div>

  <span className="text-red-500 font-bold text-xl">:</span>

  {/* Jam */}
  <div className="flex flex-col items-center">
    <span className="text-xs text-gray-500 mb-1">Jam</span>
    <div className="bg-gray-200 rounded-md p-2 min-w-[40px] text-center">
      <span className="text-xl font-bold text-gray-700">{String(hours).padStart(2, '0')}</span>
    </div>
  </div>

  <span className="text-red-500 font-bold text-xl">:</span>

  {/* Menit */}
  <div className="flex flex-col items-center">
    <span className="text-xs text-gray-500 mb-1">Menit</span>
    <div className="bg-gray-200 rounded-md p-2 min-w-[40px] text-center">
      <span className="text-xl font-bold text-gray-700">{String(minutes).padStart(2, '0')}</span>
    </div>
  </div>

  <span className="text-red-500 font-bold text-xl">:</span>

  {/* Detik */}
  <div className="flex flex-col items-center">
    <span className="text-xs text-gray-500 mb-1">Detik</span>
    <div className="bg-gray-200 rounded-md p-2 min-w-[40px] text-center">
      <span className="text-xl font-bold text-gray-700">{String(seconds).padStart(2, '0')}</span>
    </div>
  </div>
</div>
    </div>
  );
}

const FlashSale = () => {
  return (
    <div className="container mx-auto p-4 bg-white">
      {/* Bagian "Hari Ini" */}
      <div className="flex items-center ml-46 mt-3 mb-4">
        <img src={kotak} alt="Kotak" />
        <h2 className="font-poppins text-sm font-bold text-red-600 pl-4 mt-2">Hari Ini</h2>
      </div>

      {/* Panggil Timer */}
      <TimeFlash />
    </div>
  );
}

export default FlashSale;

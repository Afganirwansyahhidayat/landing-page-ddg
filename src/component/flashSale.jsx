import React, { useState, useEffect } from 'react';
import kotak from "../assets/kotak.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import heart from "../assets/heart.svg";
import eyes from "../assets/eyes.svg";
import line from "../assets/line.svg";


// Waktu Flash Sales
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
// Produk Card
const ProductsCard = () => {
  return (
    <div className="max-w-280 ml-46 flex flex-row gap-4 mt-3 overflow-x-scroll    ">
      <div className="bg-white rounded-sm shadow-md p-4 relative min-w-[250px]">
        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm">
          -40%
        </div>
        <div className="absolute top-2 right-2 flex flex-col items-center">
          <div className="bg-white p-1 rounded-full border border-transparent mb-1 cursor-pointer transition-transform duration-300 hover:scale-110">
            <img src={heart} alt="" />
          </div>
          <div className="mt-1">
            <img src={eyes} alt="" className='cursor-pointer transition-transform duration-300 hover:scale-110' />
          </div>
        </div>
        <img
          alt="STIK PS 4 Model Gen Z"
          className="mx-auto mb-2"
          src="https://i.pinimg.com/736x/b2/39/21/b2392123978a9779bb008b049c57fbec.jpg"
        />
        <h3 className="text-lg text-gray-800 mb-2">
          Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
        </h3>
        <div className="text-red-600 text-xl mb-2">
          Rp. 17.100.000
        </div>
        <div className="text-gray-500 line-through mb-2">
          Rp. 24.000.000
        </div>
        <div className="text-yellow-500 text-sm">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <span className="text-gray-500 ml-1">
            (88)
          </span>
        </div>
      </div>

      <div className="bg-white rounded-sm shadow-md p-4 relative min-w-[250px]">
        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm">
          -40%
        </div>
        <div className="absolute top-2 right-2 flex flex-col items-center">
          <div className="bg-white p-1 rounded-full border border-transparent mb-1 cursor-pointer transition-transform duration-300 hover:scale-110">
            <img src={heart} alt="" />
          </div>
          <div className="mt-1">
            <img src={eyes} alt="" className='cursor-pointer transition-transform duration-300 hover:scale-110' />
          </div>
        </div>
        <img
          alt="STIK PS 4 Model Gen Z"
          className="mx-auto mb-2"
          src="https://i.pinimg.com/736x/b2/39/21/b2392123978a9779bb008b049c57fbec.jpg"
        />
        <h3 className="text-lg text-gray-800 mb-2">
          Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
        </h3>
        <div className="text-red-600 text-xl mb-2">
          Rp. 17.100.000
        </div>
        <div className="text-gray-500 line-through mb-2">
          Rp. 24.000.000
        </div>
        <div className="text-yellow-500 text-sm">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <span className="text-gray-500 ml-1">
            (88)
          </span>
        </div>
      </div>

      <div className="bg-white rounded-sm shadow-md p-4 relative min-w-[250px]">
        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm">
          -40%
        </div>
        <div className="absolute top-2 right-2 flex flex-col items-center">
          <div className="bg-white p-1 rounded-full border border-transparent mb-1 cursor-pointer transition-transform duration-300 hover:scale-110">
            <img src={heart} alt="" />
          </div>
          <div className="mt-1">
            <img src={eyes} alt="" className='cursor-pointer transition-transform duration-300 hover:scale-110' />
          </div>
        </div>
        <img
          alt="STIK PS 4 Model Gen Z"
          className="mx-auto mb-2"
          src="https://i.pinimg.com/736x/b2/39/21/b2392123978a9779bb008b049c57fbec.jpg"
        />
        <h3 className="text-lg text-gray-800 mb-2">
          Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
        </h3>
        <div className="text-red-600 text-xl mb-2">
          Rp. 17.100.000
        </div>
        <div className="text-gray-500 line-through mb-2">
          Rp. 24.000.000
        </div>
        <div className="text-yellow-500 text-sm">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <span className="text-gray-500 ml-1">
            (88)
          </span>
        </div>
      </div>

      <div className="bg-white rounded-sm shadow-md p-4 relative min-w-[250px]">
        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm">
          -40%
        </div>
        <div className="absolute top-2 right-2 flex flex-col items-center">
          <div className="bg-white p-1 rounded-full border border-transparent mb-1 cursor-pointer transition-transform duration-300 hover:scale-110">
            <img src={heart} alt="" />
          </div>
          <div className="mt-1">
            <img src={eyes} alt="" className='cursor-pointer transition-transform duration-300 hover:scale-110' />
          </div>
        </div>
        <img
          alt="STIK PS 4 Model Gen Z"
          className="mx-auto mb-2"
          src="https://i.pinimg.com/736x/b2/39/21/b2392123978a9779bb008b049c57fbec.jpg"
        />
        <h3 className="text-lg text-gray-800 mb-2">
          Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
        </h3>
        <div className="text-red-600 text-xl mb-2">
          Rp. 17.100.000
        </div>
        <div className="text-gray-500 line-through mb-2">
          Rp. 24.000.000
        </div>
        <div className="text-yellow-500 text-sm">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <span className="text-gray-500 ml-1">
            (88)
          </span>
        </div>
      </div>

      <div className="bg-white rounded-sm shadow-md p-4 relative min-w-[250px]">
        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm">
          -40%
        </div>
        <div className="absolute top-2 right-2 flex flex-col items-center">
          <div className="bg-white p-1 rounded-full border border-transparent mb-1 cursor-pointer transition-transform duration-300 hover:scale-110">
            <img src={heart} alt="" />
          </div>
          <div className="mt-1">
            <img src={eyes} alt="" className='cursor-pointer transition-transform duration-300 hover:scale-110' />
          </div>
        </div>
        <img
          alt="STIK PS 4 Model Gen Z"
          className="mx-auto mb-2"
          src="https://i.pinimg.com/736x/b2/39/21/b2392123978a9779bb008b049c57fbec.jpg"
        />
        <h3 className="text-lg text-gray-800 mb-2">
          Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
        </h3>
        <div className="text-red-600 text-xl mb-2">
          Rp. 17.100.000
        </div>
        <div className="text-gray-500 line-through mb-2">
          Rp. 24.000.000
        </div>
        <div className="text-yellow-500 text-sm">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <span className="text-gray-500 ml-1">
            (88)
          </span>
        </div>
      </div>

      <div className="bg-white rounded-sm shadow-md p-4 relative min-w-[250px]">
        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm">
          -40%
        </div>
        <div className="absolute top-2 right-2 flex flex-col items-center">
          <div className="bg-white p-1 rounded-full border border-transparent mb-1 cursor-pointer transition-transform duration-300 hover:scale-110">
            <img src={heart} alt="" />
          </div>
          <div className="mt-1">
            <img src={eyes} alt="" className='cursor-pointer transition-transform duration-300 hover:scale-110' />
          </div>
        </div>
        <img
          alt="STIK PS 4 Model Gen Z"
          className="mx-auto mb-2"
          src="https://i.pinimg.com/736x/b2/39/21/b2392123978a9779bb008b049c57fbec.jpg"
        />
        <h3 className="text-lg text-gray-800 mb-2">
          Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
        </h3>
        <div className="text-red-600 text-xl mb-2">
          Rp. 17.100.000
        </div>
        <div className="text-gray-500 line-through mb-2">
          Rp. 24.000.000
        </div>
        <div className="text-yellow-500 text-sm">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <span className="text-gray-500 ml-1">
            (88)
          </span>
        </div>
      </div>

      <div className="bg-white rounded-sm shadow-md p-4 relative min-w-[250px]">
        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm">
          -40%
        </div>
        <div className="absolute top-2 right-2 flex flex-col items-center">
          <div className="bg-white p-1 rounded-full border border-transparent mb-1 cursor-pointer transition-transform duration-300 hover:scale-110">
            <img src={heart} alt="" />
          </div>
          <div className="mt-1">
            <img src={eyes} alt="" className='cursor-pointer transition-transform duration-300 hover:scale-110' />
          </div>
        </div>
        <img
          alt="STIK PS 4 Model Gen Z"
          className="mx-auto mb-2"
          src="https://i.pinimg.com/736x/b2/39/21/b2392123978a9779bb008b049c57fbec.jpg"
        />
        <h3 className="text-lg text-gray-800 mb-2">
          Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
        </h3>
        <div className="text-red-600 text-xl mb-2">
          Rp. 17.100.000
        </div>
        <div className="text-gray-500 line-through mb-2">
          Rp. 24.000.000
        </div>
        <div className="text-yellow-500 text-sm">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <span className="text-gray-500 ml-1">
            (88)
          </span>
        </div>
      </div>
    </div>
  );
};

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
      {/* Produk Card */}
      <ProductsCard />
      <div class="text-center mt-4">
        <button class="bg-red-600 text-white mt-2 px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-red-700 hover:scale-105 shadow-md hover:shadow-lg">
          Lihat Semua Produk
        </button>
      </div>
      <div>
        <img src={line} alt="" className="mt-4 max-w-280 ml-46 flex flex-ro" /> 
      </div>
    </div>
  );
}

export default FlashSale;

import React from "react";
import line from "../assets/lineHorizontal.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import kolaborasi1 from "../assets/kolaborasi/kolaborasi.svg";
import { faStar } from '@fortawesome/free-solid-svg-icons';import heart from "../assets/heart.svg";
import eyes from "../assets/eyes.svg";

const KategoriSearch = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 mb-4 ml-46 mr-49">
            {[...Array(20)].map((_, index) => (
                <div key={index} className="bg-white rounded-sm shadow-md p-4 relative cursor-pointer transition-transform duration-300 hover:scale-105">
                    {/* Diskon Label */}
                    <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm">
                        -40%
                    </div>

                    {/* Icon Heart and Eye */}
                    <div className="absolute top-2 right-2 flex flex-col items-center">
                        <div className="bg-white p-1 rounded-full border border-transparent mb-1 cursor-pointer transition-transform duration-300 hover:scale-110">
                            <img src={heart} alt="heart icon" className="w-7 h-7" />
                        </div>
                        <div className="mt-1">
                            <img src={eyes} alt="eye icon" className="w-8 h8- cursor-pointer transition-transform duration-300 hover:scale-110" />
                        </div>
                    </div>

                    {/* Gambar Produk */}
                    <img
                        alt="Macbook"
                        className="mx-auto mb-2 w-full h-64 object-cover rounded-md"
                        src="https://i.pinimg.com/736x/b2/39/21/b2392123978a9779bb008b049c57fbec.jpg"
                    />

                    {/* Nama Produk */}
                    <h3 className="text-lg text-gray-800 mb-2 truncate">
                        Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
                    </h3>

                    {/* Harga dan Diskon */}
                    <div className="text-red-600 text-xl mb-2 font-bold">
                        Rp. 17.100.000
                    </div>
                    <div className="text-gray-500 line-through mb-2">
                        Rp. 24.000.000
                    </div>

                    {/* Rating Produk */}
                    <div className="flex items-center text-yellow-500 text-sm">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <span className="text-gray-500 ml-1">
                            (88)
                        </span>
                        <div>
                            <img src={line} alt="line" className="w-2 h-2 ml-1" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const categories = [
    
        { label: "Spesial Untukmu ❤️", color: "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md" },
        { label: "🌟 Toko Resmi", color: "bg-yellow-400 text-gray-800 shadow-sm" },
        { label: "🛒 Belanja Hemat", color: "bg-green-400 text-white shadow-md" },
        { label: "🎉 Diskon Ceria!", color: "bg-purple-500 text-white shadow-md animate-pulse" },
        { label: "👕 Koleksi Pakaian Terkini", color: "bg-blue-300 text-gray-800 shadow-sm" },
        { label: "✅ Official Store S2", color: "bg-teal-400 text-white shadow-md" },
        { label: "🥇 Official Store S3", color: "bg-amber-500 text-white shadow-md" },
        { label: "💎 Official Store S4", color: "bg-indigo-500 text-white shadow-md" },
        { label: "👚 Fashion Kekinian", color: "bg-pink-300 text-gray-800 shadow-sm" },
        { label: "🛡️ 100% Original S2", color: "bg-lime-500 text-white shadow-md" },
        { label: "🚀 Pengiriman Cepat S3", color: "bg-cyan-400 text-white shadow-md" },
        { label: "🎁 Tambahan Spesial S4", color: "bg-orange-500 text-white shadow-md" }
      
  ];
  
   function CategoryScroll() {
    return (
      <div className="relative mt-4 ml-40 mr-46">
        {/* Scrollable container */}
        <div className="flex overflow-x-auto no-scrollbar space-x-2 px-4 py-2 bg-white rounded-lg ">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`flex-shrink-0 px-4 py-2 rounded-full border border-gray-300 text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-red-600 hover:text-white ${
                cat.color || "bg-white text-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

const Kolaborasi = () => {
    return (
        <div className="flex flex-col bg-white p-4 ">
            <img src={line} alt="" className="ml-46 mr-46" />
            <h1 className="font-[poppins] mt-3 text-4xl opacity-70 font-bold ml-46">
                Kolaborasi Tokoko
            </h1>

            <div className="grid grid-cols-6 grid-rows-5 gap-4 mt-6 ml-46 mr-46">
                <img
                    src={kolaborasi1}
                    alt=""
                    className="col-span-2 row-span-5 rounded-xl shadow-md object-cover w-full h-full cursor-pointer hover:scale-105 transition-transform duration-300"
                />
                <img
                    src={kolaborasi1}
                    alt=""
                    className="col-span-2 row-span-3 col-start-3 rounded-xl shadow-md object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
                <img
                    src={kolaborasi1}
                    alt=""
                    className="col-span-2 row-span-3 col-start-5 rounded-xl shadow-md object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
                <img
                    src={kolaborasi1}
                    alt=""
                    className="col-span-2 row-span-2 col-start-3 row-start-4 rounded-xl shadow-md object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
                <img
                    src={kolaborasi1}
                    alt=""
                    className="col-span-2 row-span-2 col-start-5 row-start-4 rounded-xl shadow-md object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
            </div>
            <CategoryScroll />
          <div>
          <KategoriSearch />
          </div>
          <div className="flex justify-center mt-4 mb-4">
          <button class="bg-red-600 text-white mt-2 px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-red-700 hover:scale-105 shadow-md hover:shadow-lg ">
          Lihat Semua Produk
        </button>
          </div>
        </div>
    );
};

export default Kolaborasi;

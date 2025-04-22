import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import heart from "../assets/heart.svg";
import eyes from "../assets/eyes.svg";

const KategoriSearch = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 mb-4 ml-46 mr-49">
            {[...Array(12)].map((_, index) => (
                <div key={index} className="bg-white rounded-sm shadow-md p-4 relative cursor-pointer transition-transform duration-300 hover:scale-105">
                    {/* Diskon Label */}
                    <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm">
                        -40%
                    </div>

                    {/* Icon Heart and Eye */}
                    <div className="absolute top-2 right-2 flex flex-col items-center">
                        <div className="bg-white p-1 rounded-full border border-transparent mb-1 cursor-pointer transition-transform duration-300 hover:scale-110">
                            <img src={heart} alt="heart icon" className="w-7 h-7"/>
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
                    </div>
                </div>
            ))}
        </div>
    );
};

export default KategoriSearch;

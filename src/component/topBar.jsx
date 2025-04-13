import React from "react";
import mobileLogo from ".././assets/rivet-icons_phone-mobile.svg";
import vectorLogo from ".././assets/Vector.svg";

const TopBar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bg-gray-500 opacity-100 mt-0 p-1 flex items-center">
            {/* Top Bar */}
            {/* Ini buat logo di kiri */}
            <img className="pl-3" src={mobileLogo} alt="Icon Logo" />
            <p className="font-[poppins] text-white pl-2 text-sm pt-1 cursor-pointer transition duration-300 ease-in-out hover:underline hover:text-red-600">
                Download Tokoku App
            </p>
            {/* Ini buat teks di tengah */}
            <div className="flex-grow text-center">
                <span className="font-[poppins] text-white text-sm">
                    Dapatkan voucher diskon Rp50.000 untuk transaksi pertama!{" "}
                    <a
                        href="#"
                        className="font-bold underline text-white transition duration-300 ease-in-out hover:text-red-600"
                    >
                        Belanja Sekarang
                    </a>
                </span>
            </div>
            {/* Ini buat teks di kanan */}
            <div className="relative flex items-center font-bold">
                <select className="bg-gray-500 border-none text-white appearance-none pr-10 pl-4 py-2 rounded w-full transition duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-500">
                    <option className="font-normal">Indonesia</option>
                    <option className="font-normal">English US</option>
                </select>
                <img
                    src={vectorLogo}
                    alt="Vector Logo"
                    className="absolute right-3 top-5 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
                />
            </div>
        </div>
    );
};

export default TopBar;

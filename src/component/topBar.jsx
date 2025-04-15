import React from "react";
import mobileLogo from ".././assets/rivet-icons_phone-mobile.svg";
import vectorLogo from ".././assets/Vector.svg";
import qrCode from ".././assets/qr.png";

const TopBar = () => {
    return (
        <div className="top-0 left-0 right-0 bg-gray-500 opacity-100 mt-0 p-1 flex items-center relative z-50">
            {/* Logo kiri */}
            <img className="pl-3" src={mobileLogo} alt="Icon Logo" />

            {/* Teks + Hover Pop-Up */}
            <div className="relative group pl-2">
                <p className="font-[poppins] text-white text-sm pt-1 cursor-pointer transition duration-300 ease-in-out hover:underline hover:text-red-600">
                    Download Tokoku App
                </p>

                {/* Popup QR muncul saat hover */}
                <div className="absolute left-0 top-full mt-2 hidden group-hover:grid grid-cols-2 w-[28rem] bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden z-50">
                    {/* Deskripsi */}
                    <div className="p-4">
                        <p className="text-lg font-bold text-red-500 mb-2">Tokoku App</p>
                        <p className="text-sm text-gray-600 mb-4">
                            Scan QR ini sekarang untuk mengunduh Tokoku App dan nikmati pengalaman berbelanja yang lebih mudah dan praktis! Aplikasi ini tersedia di App Store, Google Play, dan AppGallery
                        </p>
                        <button className="flex items-center px-4 py-2 text-xs font-bold text-gray-900 rounded-lg hover:bg-gray-100">
                            Read More
                        </button>
                    </div>
                    {/* Gambar QR */}
                    <div className="p-3">
                        <img
                            src={qrCode}
                            alt="QR Download"
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Teks tengah */}
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

            {/* Dropdown kanan */}
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

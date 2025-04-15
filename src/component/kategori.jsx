import React from 'react';
import Phone from "../assets/phone.svg";
import Camera from "../assets/camera.svg";
import Watch from "../assets/Jam.svg";
import Laptop from "../assets/Computer.svg";
import Headset from "../assets/Headset.svg";
import Gamepad from "../assets/Gamepad.svg";
import kotak from "../assets/kotak.svg";
import Line from "../assets/Line.svg";

// Ubah nama komponennya jadi huruf besar
const KatalogProduk = () => {
    return (
        <div className="flex flex-col gap-6 ml-46">
            {/* Flash Sales Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-700 opacity-70">
                Pencarian berdasarkan kategori
            </h1>

            {/* Kategori Produk */}
            <div className="w-full overflow-x-auto">
                <div className="flex gap-4 mt-3 px-4 min-w-max">

                    {[
                        { name: "HandPhone", icon: Phone, active: false },
                        { name: "Kamera Sony", icon: Camera, active: false },
                        { name: "Jam Tangan", icon: Watch, active: false },
                        { name: "Komputer PC", icon: Laptop, active: true },
                        { name: "Headset Hp", icon: Headset, active: false },
                        { name: "Game pad", icon: Gamepad, active: false }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className={`border rounded-lg text-center p-9 shadow transition duration-300 cursor-pointer 
                ${item.active
                                    ? 'bg-red-500 border-red-500 text-white'
                                    : 'bg-white border-gray-300 hover:bg-red-500 hover:text-white'
                                }`}
                        >
                            <img
                                alt={`Icon of ${item.name}`}
                                className={`mx-auto mb-2 ${item.active ? 'filter invert' : ''}`}
                                src={item.icon  }
                            />
                            <span className="block text-lg">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};


const Kategori = () => {
    return (
        <div className="container mx-auto p-4 bg-white">
            {/* Bagian "Hari Ini" */}
            <div className="flex items-center ml-46 mt-3 mb-4">
                <img src={kotak} alt="Kotak" />
                <h2 className="font-poppins text-sm font-bold text-red-600 pl-4 mt-2">Kategori</h2>
            </div>
            {/* Panggil komponen dengan nama yang benar */}
            <KatalogProduk />
            {/* Garis Horizontal */}
            <img src={Line} alt="" className="mt-6 max-w-280 ml-46 flex flex-ro " />
        </div>
    );
};

export default Kategori;

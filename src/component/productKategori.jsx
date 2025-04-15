import React from 'react';
import refresh from '../assets/refresh.svg';

const ProductKategoriItem = () => {
    return (
        <div>

        </div>
    )
}

const ProductKategori = () => {
    return (
        <div className="flex items-center gap-4 ml-47 mt-3">
            <h1 className="font-[poppins] font-bold text-2xl">
                Banyak orang mencari ini
            </h1>
            <h1 className="font-[poppins] text-base">
                Setelah cari Macbook Gaming
            </h1>
            <div className="flex items-center gap-2 cursor-pointer">
                <img src={refresh} alt="refresh" className="w-7 h-7 transition duration-300 ease-in-out hover:scale-120" />
                <p className="font-[poppins] text-red-500 text-sm">Muat Lainnya</p>
            </div>
        </div>

    )
}

export default ProductKategori;
import React from "react";
import tokokuIcon from ".././assets/tokoku.svg";
import searchIcon from ".././assets/Search.svg";
import wishlistIcon from ".././assets/Wishlist.svg";
import cartIcon from ".././assets/Keranjang.svg";
import lineIcon from ".././assets/lineVertikal.svg";
import lineHorizontal from "../assets/lineHorizontal.svg";

const NavbarCategory = () => {
    return (
        <div className="flex justify-center gap-9  py-4">
            <p className="cursor-pointer hover:text-red-500">Laptop</p>
            <p className="cursor-pointer hover:text-red-500">Smartphone</p>
            <p className="cursor-pointer hover:text-red-500">Elektronik</p>
            <p className="cursor-pointer hover:text-red-500">Fashion</p>
            <p className="cursor-pointer hover:text-red-500">Olahraga</p>
            <p className="cursor-pointer hover:text-red-500">Kesehatan</p>
        </div>
    );
};

const Navbar = () => {
    return (
        <div >
            <div className="flex justify-around items-center bg-white p-5">
                {/* Navbar */}
                <div className="flex ml-9 mt-3 w-full items-center gap-13">
                    {/* Logo */}
                    <img src={tokokuIcon} alt="Tokoku Icon" className="w-40 h-10" />

                    {/* Kategori */}
                    <p className="text-md font-[poppins] whitespace-nowrap">Kategori</p>

                    {/* Search bar */}
                    <div className="relative flex-1 max-w-2xl">
                        <img
                            src={searchIcon}
                            alt="Search Icon"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
                        />
                        <input
                            type="text"
                            placeholder="Cari kategori..."
                            className="pl-10 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-7">
                        {/* Wishlist */}
                        <img
                            src={wishlistIcon}
                            alt="Wishlist"
                            className="w-7 h-7 cursor-pointer transition duration-300 hover:scale-120 hover:brightness-125"
                        />

                        {/* Cart */}
                        <img
                            src={cartIcon}
                            alt="Cart"
                            className="w-7 h-7 cursor-pointer transition duration-300 hover:scale-120 hover:brightness-125"
                        />

                        {/* Line  */}
                        <img
                            src={lineIcon}
                            alt="Line"
                            className="w-7 h-7"
                        />
                    </div>


                    {/* Buttons */}
                    <div className="flex items-center gap-3">
                        {/* Masuk Button */}
                        <button className="font-[poppins] bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded hover:bg-red-500 hover:text-white hover:border-red-500 transition duration-300 cursor-pointer">
                            Masuk
                        </button>

                        {/* Daftar Button */}
                        <button className="font-[poppins] bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 cursor-pointer">
                            Daftar
                        </button>
                    </div>

                </div>
            </div>

            {/* Navbar Category */}
            <NavbarCategory />
            <img src={lineHorizontal} alt="" className="w-full drop-shadow-md  " />
        </div>
    );
};

export default Navbar;

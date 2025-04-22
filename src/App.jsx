import React from "react";
import TopBar from "./component/topBar";
import Navbar from "./component/navbar";
import Banner from "./component/banner";
import  FlashSale from "./component/flashSale";
import Kategori from "./component/kategori";
import ProductKategori from "./component/productKategori";
import KategoriSearch from "./component/kategoriSearch";
import Kolaborasi from "./component/kolaborasi";
import "./App.css";

const App = () => {
  return (
    <div className="bg-white">
      <TopBar />
      <Navbar />
      <Banner />
      <FlashSale />
      <Kategori />
      <ProductKategori />
      <KategoriSearch />
      <Kolaborasi />
    </div>
  );
}

export default App;

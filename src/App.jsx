import React from "react";
import TopBar from "./component/topBar";
import Navbar from "./component/navbar";
import Banner from "./component/banner";
import  FlashSale from "./component/flashSale";
import Kategori from "./component/kategori";
import ProductKategori from "./component/productKategori";
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
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./CSS/Style.css";
import CardProduct from "./components/CardProduct";
import SearchBar from "./components/SearchBar";
import useFetch from "./components/useFetch";


const API_URL = "https://fakestoreapi.com/products?sort=desc";

function Home() {
  // state
  const { data: products, isloading, error } = useFetch(API_URL);

  const [searchProduct, setSearchProduct] = useState("");
  const [filterProduct, setfilterProduct] = useState([]);

  // function

  const ProductFiltered = () => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchProduct.toLowerCase())||
      product.category.toLowerCase().includes(searchProduct.toLowerCase())||
      product.description.toLowerCase().includes(searchProduct.toLowerCase())
    );
    
    setfilterProduct(filtered);
  };

  const handleSearch = (e) => {
    setSearchProduct(e.target.value);
    ProductFiltered();

    const newSearchProduct = e.target.value;
    setSearchProduct(newSearchProduct);

    if (newSearchProduct === "") {
      setfilterProduct(products);
    } else {
      ProductFiltered();
    }
  };

  return (
    <div className="app">
      <SearchBar searchProduct={searchProduct} handleSearch={handleSearch}/>

      {error && <h1>{error}</h1>}
      {isloading && (
        <div class="loading-container">
          <div class="loading-text">Loading...</div>
        </div>
      )}

      <div className="container">
        {products && (
          <CardProduct
            searchProduct={searchProduct}
            filterProduct={filterProduct}
            products={products}
          />
        )}
      </div>
    </div>
  );
}

export default Home;

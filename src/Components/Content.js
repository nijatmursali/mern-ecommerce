import React, { useState, useEffect } from "react";
import "../App.css";
import Product from "./Product";
import axios from "axios";

const Content = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");

      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <section className="w3l-ecommerce-main">
        <div className="ecom-contenthny py-5">
          <div className="container py-lg-5">
            <h3 className="hny-title mb-0 text-center">
              Shop With <span>Us</span>
            </h3>
            <p className="text-center">Handpicked Favourites just for you</p>
            <div className="ecom-products-grids row mt-lg-5 mt-3">
              {products.map((product) => (
                <Product product={product} key={product._id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;

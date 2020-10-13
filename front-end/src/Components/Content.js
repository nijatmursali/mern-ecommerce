import React from "react";
import "../App.css";
import products from "../dummy-data/products";
import Product from "./Product";

const Content = () => {
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

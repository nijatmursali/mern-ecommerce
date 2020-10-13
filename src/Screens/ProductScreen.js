import React from "react";
import { Link } from "react-router-dom";
import products from "../dummy-data/products";

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <div>
      <div className="product_image_area section_padding">
        <div className="container">
          <div className="row s_product_inner">
            <div className="col-lg-5">
              <div className="product_slider_img">
                <div id="vertical">
                  <div data-thumb={product.image}>
                    <img src={product.image} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="s_product_text">
                <h3>{product.name}</h3>
                <h2>${product.price}</h2>
                <ul className="list">
                  <li>
                    <a className="active" href="#">
                      <span>Category</span> : {product.category}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span>Availibility</span> : {product.countInStock}
                    </a>
                  </li>
                </ul>
                <p>{product.description}</p>
                <div className="card_area">
                  <div className="product_count d-inline-block">
                    <span className="inumber-decrement">
                      {" "}
                      <i className="ti-minus"></i>
                    </span>
                    <input
                      className="input-number"
                      type="text"
                      value="1"
                      min="0"
                      max="10"
                    />
                    <span className="number-increment">
                      {" "}
                      <i className="ti-plus"></i>
                    </span>
                  </div>
                  <div className="add_to_cart">
                    <a href="#" className="btn_3">
                      add to cart
                    </a>
                    <a href="#" className="like_us">
                      {" "}
                      <i className="ti-heart"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;

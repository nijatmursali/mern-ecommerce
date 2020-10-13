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
                    <Link className="active" to="/category">
                      <span>Category</span> : {product.category}
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>Availibility</span> : {product.countInStock}
                    </Link>
                  </li>
                </ul>
                <p>{product.description}</p>
                <div className="card_area">
                  <div className="product_count d-inline-block">
                    <span className="inumber-decrement">
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
                      <i className="ti-plus"></i>
                    </span>
                  </div>
                  <div className="add_to_cart">
                    <Link to="/cart" className="btn_3">
                      add to cart
                    </Link>
                    <Link to="/like" className="like_us">
                      <i className="ti-heart"></i>{" "}
                    </Link>
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

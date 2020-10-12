import React from "react";
import products from "../dummy-data/products";

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
                <div
                  className="col-lg-3 col-6 product-incfhny mt-4"
                  key={product._id}
                >
                  <div className="product-grid2 transmitv">
                    <div className="product-image2">
                      <a href="#">
                        <img
                          className="pic-1 img-fluid"
                          src="product/assets/images/shop-1.jpg"
                        />
                        <img
                          className="pic-2 img-fluid"
                          src="product/assets/images/shop-11.jpg"
                        />
                      </a>
                      <ul className="social">
                        <li>
                          <a href="#" data-tip="Quick View">
                            <span className="fa fa-eye"></span>
                          </a>
                        </li>

                        <li>
                          <a href="#" data-tip="Add to Cart">
                            <span className="fa fa-shopping-bag"></span>
                          </a>
                        </li>
                      </ul>
                      <div className="transmitv single-item">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input
                            type="hidden"
                            name="transmitv_item"
                            value="Women Maroon Top"
                          />
                          <input type="hidden" name="amount" value="899.99" />
                          <button
                            type="submit"
                            className="transmitv-cart ptransmitv-cart add-to-cart"
                          >
                            Add to Cart
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="product-content">
                      <h3 className="title">
                        <a href="#">{product.name}</a>
                      </h3>
                      <span className="price">${product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;

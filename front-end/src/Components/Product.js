import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  var howMany = product.rating;

  const displayStars = (howMany) => {
    if (howMany < 5) {
      for (let i = 0; i < howMany; i++) {
        return <span className="fa fa-star checked"></span>;
      }
    } else {
      for (let i = 0; i < 5; i++) {
        return <span className="fa fa-star checked"></span>;
      }
    }
  };

  console.log(howMany);
  return (
    <div className="col-lg-3 col-6 product-incfhny mt-4" key={product._id}>
      <div className="product-grid2 transmitv">
        <div className="product-image2">
          <Link to={`/product/${product._id}`}>
            <img
              className="pic-1 img-fluid"
              src={product.image}
              alt="product"
            />
            <img
              className="pic-2 img-fluid"
              src={product.image}
              alt="product"
            />
          </Link>
          <ul className="social">
            <li>
              <Link to={`/product/${product._id}`} data-tip="Quick View">
                <span className="fa fa-eye"></span>
              </Link>
            </li>

            <li>
              <Link to="/" data-tip="Add to Cart">
                <span className="fa fa-shopping-bag"></span>
              </Link>
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
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </h3>
          <div className="stars">{displayStars(product.rating)}</div>

          <span className="price">${product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;

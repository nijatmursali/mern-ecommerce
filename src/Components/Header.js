import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="main_menu home_menu">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-11">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/">
                  <img src="img/logo.png" alt="logo" />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="menu_icon">
                    <i className="fas fa-bars"></i>
                  </span>
                </button>

                <div
                  className="collapse navbar-collapse main-menu-item"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/shop">
                        Shop
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="hearer_icon d-flex">
                  <div className="cart">
                    <Link to="/cart">
                      <i className="ti-bag"></i>
                    </Link>
                  </div>
                  <Link id="search_1" to="/search">
                    <i className="ti-search"></i>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

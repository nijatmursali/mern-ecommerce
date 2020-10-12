import React from 'react'

const Header = () => {
    return (
        <div>
    <header className="main_menu home_menu">
        <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-11">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="/"> <img src="img/logo.png" alt="logo"/> </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_icon"><i className="fas fa-bars"></i></span>
                        </button>

                        <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_1"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Shop
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                        <a className="dropdown-item" href="category.html"> shop category</a>
                                        <a className="dropdown-item" href="single-product.html">product details</a>
                                        
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_3"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        pages
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                                        <a className="dropdown-item" href="login.html"> 
                                            login
                                            
                                        </a>
                                        <a className="dropdown-item" href="tracking.html">tracking</a>
                                        <a className="dropdown-item" href="checkout.html">product checkout</a>
                                        <a className="dropdown-item" href="cart.html">shopping cart</a>
                                        <a className="dropdown-item" href="confirmation.html">confirmation</a>
                                        <a className="dropdown-item" href="elements.html">elements</a>
                                    </div>
                                </li>
                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_2"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        blog
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                                        <a className="dropdown-item" href="blog.html"> blog</a>
                                        <a className="dropdown-item" href="single-blog.html">Single blog</a>
                                    </div>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="hearer_icon d-flex">
                            <div className="dropdown cart">
                                <a className="dropdown-toggle" href="/" id="navbarDropdown3" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ti-bag"></i>
                                </a>

                            </div>
                            <a id="search_1" href="/"><i className="ti-search"></i></a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        {/* <div className="search_input" id="search_input_box">
            <div className="container ">
                <form className="d-flex justify-content-between search-inner">
                    <input type="text" className="form-control" id="search_input" placeholder="Search Here"/>
                    <button type="submit" className="btn"></button>
                    <span className="ti-close" id="close_search" title="Close Search"></span>
                </form>
            </div>
        </div> */}
    </header>
        </div>
    )
}

export default Header

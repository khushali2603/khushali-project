import React from 'react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

function Navbar() {
  const [auth, setAuth] = useState(true)
  const { cart } = useContext(CartContext)
  return (
    <div>
      <div className="px-sm-0 px-4">
        <nav className="navbar navbar-expand-lg py-3 " id='navbar'>
          <div className="container m-auto ">
            <Link className="navbar-brand" to="#">
              <img src="image/logo_150x.webp" alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

              <ul className="navbar-nav m-auto mb-2 mb-lg-0 fw-bold ">
                <li className="nav-item dropdown">
                  <Link className="nav-link text" aria-expanded="true" to="#">Home<span
                    className="material-symbols-outlined align-middle">expand_more</span></Link>
                  <ul className="dropdown-menu text-capitalize p-3 border-0 shadow-sm">
                    <li className="py-2 px-3"><Link to="/demo" className="dropdown-item text bg-white">home demo #01</Link></li>
                    <li className="py-2 px-3"><Link to="/demo" className="dropdown-item text bg-white">home demo #02</Link></li>
                    <li className="py-2 px-3"><Link to="/demo" className="dropdown-item text bg-white">home demo #03</Link></li>
                    <li className="py-2 px-3"><Link to="/demo" className="dropdown-item text bg-white">home demo #04</Link></li>
                    <li className="py-2 px-3"><Link to="/demo" className="dropdown-item text bg-white">home demo #05</Link></li>
                    <li className="py-2 px-3"><Link to="/demo" className="dropdown-item text bg-white">home demo #06</Link></li>
                    <li className="py-2 px-3"><Link to="/demo" className="dropdown-item text bg-white">home demo #07</Link></li>
                    <li className="py-2 px-3"><Link to="/demo" className="dropdown-item text bg-white">home demo #08</Link></li>
                    <li className="py-2 px-3"><Link to="/" className="dropdown-item text bg-white">home demo #09</Link></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <Link className="nav-link text" to="#">Shop
                    <span className="material-symbols-outlined align-middle">expand_more</span>
                  </Link>
                  <div className="dropdown-menu megamenu p-4 bg-light dropdown-1 rounded-0 border-0" role="menu" data-bs-popper="none">
                    <div className="row g-3">
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="col-megamenu">
                          <h6 className="fw-bold">New Arrivals</h6>
                          <hr />
                          <ul className="list-unstyled">
                            <li className="py-2 fw-normal"><Link to="/Product1" className="text-decoration-none text-dark text">Mugs</Link></li>
                            <li className="py-2 fw-normal"><Link to="/Coasters" className="text-decoration-none text-dark text">Coasters</Link></li>
                            <li className="py-2 fw-normal"><Link to="/Pillows" className="text-decoration-none text-dark text">Pillows</Link></li>
                            <li className="py-2 fw-normal"><Link to="/Candles" className="text-decoration-none text-dark text">Candles</Link></li>
                            <li className="py-2 fw-normal"><Link to="/Soap" className="text-decoration-none text-dark text">Soap</Link></li>
                          </ul>
                        </div>
                      </div>

                      <div clas className="col-lg-3 col-sm-6 col-12">
                        <div className="col-megamenu">
                          <h6 className="fw-bold">Best Selling</h6>
                          <hr />
                          <ul className="list-unstyled">
                            <li className="py-2 fw-normal"><Link to="/Product2" className="text-decoration-none text-dark text">Furniture</Link></li>
                            <li className="py-2 fw-normal"><Link to="/Blankets" className="text-decoration-none text-dark text">Blankets</Link></li>
                            <li className="py-2 fw-normal"><Link to="/Rugs" className="text-decoration-none text-dark text">Rugs</Link></li>
                            <li className="py-2 fw-normal"><Link to="/Curtains" className="text-decoration-none text-dark text">Curtains</Link></li>
                            <li className="py-2 fw-normal"><Link to="/Pillows" className="text-decoration-none text-dark text">Pillows</Link></li>
                          </ul>
                        </div>
                      </div>
                      <div clas className=" col-lg-3 col-sm-6 col-12">
                        <div className="col-megamenu">
                          <h6 className="fw-bold">Special Offers</h6>
                          <hr />
                          <ul className="list-unstyled">
                            <li className="py-2 fw-normal"><Link to="/Product3" className="text-decoration-none text-dark text">Hats</Link></li>
                            <li className="py-2 fw-normal"><Link to="/Scarves" className="text-decoration-none text-dark text">Scarves</Link></li>
                            <li className="py-2 fw-normal"><Link to="/Sculptures" className="text-decoration-none text-dark text">Sculptures</Link></li>
                            <li className="py-2 fw-normal"><Link to="/Jewelry" className="text-decoration-none text-dark text">Jewelry</Link></li>
                            <li className="py-2 fw-normal"><Link to="/Clothing" className="text-decoration-none text-dark text">Clothing</Link></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="col-megamenu">
                          <ul className="list-unstyled">
                            <img src="https://cdn.shopify.com/s/files/1/0027/0952/0502/collections/33_large.jpg?v=1667903805" alt="shop-img" className="w-100" />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>


                <li className="nav-item dropdown">
                  <Link className="nav-link text position-relative" to="#">Product<span
                    className="material-symbols-outlined align-middle">expand_more</span>
                    <span className="badge bg-secondary absolute-2 rounded-0">New</span>
                  </Link>
                  <ul className="dropdown-menu text-capitalize p-3 border-0 shadow-sm">
                    <li className="py-2"><Link to="/product1" className="dropdown-item text bg-white">Variants Product</Link>
                    </li>
                    <li className="py-2"><Link to="/product2" className="dropdown-item text bg-white">Variants Image
                      Product</Link></li>
                    <li className="py-2 position-relative"><Link to="/product3" className="dropdown-item text bg-white">Complementary
                      Product</Link>
                      <span className="badge bg-secondary absolute-3 rounded-0">New</span>
                    </li>
                    <li className="py-2"><Link to="/Product4" className="dropdown-item text bg-white">Simple Product</Link>
                    </li>
                    <li className="py-2"><Link to="/ProductApi" className="dropdown-item text bg-white">Countdown Product</Link>
                    </li>
                    <li className="py-2 position-relative"><Link to="/Unit" className="dropdown-item text bg-white">Unit Price
                      Product</Link>
                      <span className="badge bg-secondary absolute-3 rounded-0">New</span>
                    </li>
                    <li className="py-2"><Link to="/Video" className="dropdown-item text bg-white">Video Product</Link>
                    </li>
                    <li className="py-2"><Link to="/AR/3D" className="dropdown-item text bg-white">AR/3D Product</Link>
                    </li>
                    <li className="py-2"><Link to="/Gift" className="dropdown-item text bg-white">Gift Card</Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown position-relative">
                  <Link className="nav-link text" to="#">Collections<span
                    className="material-symbols-outlined align-middle">expand_more</span>
                    <span className="badge bg-secondary absolute-2 rounded-0">Hot</span>
                  </Link>
                  <ul className="dropdown-menu text-capitalize p-3 border-0 shadow-sm">
                    <li className="py-2"><Link to="/Accessories" className="dropdown-item text bg-white">Accessories</Link>
                    </li>
                    <li className="py-2"><Link to="/Garden" className="dropdown-item text bg-white">Garden Decor</Link>
                    </li>
                    <li className="py-2"><Link to="/Gift" className="dropdown-item text bg-white">Gift</Link></li>
                    <li className="py-2 position-relative"><Link to="/Handcraft" className="dropdown-item text bg-white">Handcraft</Link>
                      <span className="badge bg-secondary absolute-3 rounded-0">New</span>
                    </li>
                    <li className="py-2"><Link to="/Decor" className="dropdown-item text bg-white">Home Decor</Link>
                    </li>
                    <li className="py-2"><Link to="/Interior" className="dropdown-item text bg-white">Interior
                      Design</Link></li>
                    <li className="py-2"><Link to="/Kids" className="dropdown-item text bg-white">Kids</Link></li>
                    <li className="py-2"><Link to="/Knitting" className="dropdown-item text bg-white">Knitting &
                      Sewing</Link></li>
                    <li className="py-2"><Link to="/Toys" className="dropdown-item text bg-white">Toys</Link></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text" to="/Blogs">Blogs</Link>
                </li>

                <li className="nav-item dropdown">
                  <Link className="nav-link text" data-bs-toggle="dropdown" to="#">Pages<span
                    className="material-symbols-outlined align-middle">expand_more</span></Link>
                  <ul className="dropdown-menu text-capitalize p-3 border-0 shadow-sm">
                    <li className="py-2"><Link to="/About" className="dropdown-item text bg-white">About</Link></li>
                    <li className="py-2"><Link to="/Contact" className="dropdown-item text bg-white">Contact</Link></li>
                    <li className="py-2 position-relative"><Link to="/services" className="dropdown-item text bg-white">Services</Link>
                      <span className="badge bg-secondary absolute-3 rounded-0">New</span>
                    </li>
                    <li className="py-2 position-relative"><Link to="/Gift" className="dropdown-item text bg-white">Gift Card</Link>
                      <span className="badge bg-secondary absolute-3 rounded-0">New</span>
                    </li>
                    <li className="py-2"><Link to="/Faq" className="dropdown-item text bg-white">Faq</Link></li>
                    <li className="py-2"><Link to="/Privacy" className="dropdown-item text bg-white">Privacy Policy</Link></li>
                    <li className="py-2"><Link to="/Refund" className="dropdown-item text bg-white">Refund Policy</Link></li>
                    <li className="py-2"><Link to="/Shipping" className="dropdown-item text bg-white">Shipping Policy</Link></li>
                    <li className="py-2"><Link to="/Terms" className="dropdown-item text bg-white">Terms of Service</Link></li>
                  </ul>
                </li>

              </ul>

              <div className='d-flex'>

                <Link to="/Cart">

                  <span className="material-symbols-outlined fs-4 fw-bold d-inline-block m-2 text-muted">search</span>

                </Link>

                <li className="list-unstyled dropdown">
                  <Link className="nav-link text" aria-expanded="true" to="/"><span className="material-symbols-outlined fs-4 fw-bold d-inline-block m-2 text-muted">person</span></Link>

                  <ul className="dropdown-menu text-capitalize p-3 border-0 shadow-sm">
                    <li className="py-2"><Link to="/Account" className="dropdown-item text bg-white">My Account</Link></li>
                    <li className="py-2"><Link to="/Wishlist" className="dropdown-item text bg-white">Wishlist</Link></li>
                    <li className="py-2"><Link to="/Search" className="dropdown-item text bg-white">Search</Link></li>
                    {auth === true ?
                      <li className="py-2"><Link to="/Login" className="dropdown-item text bg-white" onClick={() => setAuth(!auth)}>Login</Link></li> :
                      <li className="py-2"><Link to="/LogOut" className="dropdown-item text bg-white" onClick={() => setAuth(!auth)}>LogOut</Link></li>}
                  </ul>
                </li>

                <Link to="/Cart">
                  <span className="material-symbols-outlined fs-4 fw-bold d-inline-block m-2 text-muted position-relative">shopping_cart
                    <div className="badge bg-dark translate-middle align-items-center position-absolute top-0 start-100 rounded-circle p-1" style={{ fontSize: "12px" }}>{cart.totalItems}</div>
                  </span>
                </Link>
              </div>

            </div>

          </div>

        </nav>
      </div>

    </div>
  )
}

export default Navbar
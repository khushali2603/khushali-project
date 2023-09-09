import React from 'react'
import { Link } from 'react-router-dom';
import Responsive from './SlickSlider';
import ProductSlider from './ProductSlider';
import FaqList from './FaqList';
import ContactInfo from './ContactInfo';
import ProductCollection from './ProductCollection';
import ProductHead from './ProductHead';

export default function Product2() {
  return (
    <div>
      {/* <!-- product section start --> */}
      <section>

        <ProductHead head="Product" data="J. l p t Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc."/>

        <div className="container">
          <div className="row py-5">
            <div className="col-lg-6 col-12">
              <img src="image/home-juri_f8b3b0ae-20b0-4467-8a00-7ecf3c1e204d_1024x1024.jpg" alt="juri" className="w-100" />
              <ProductSlider />
            </div>
            <div className="col-lg-6 col-12">

              <div style={{ borderBottom: " 2px solid #f6f4f2" }}>
                <p className="fs-6" style={{ color: " #ffbc0f" }}>
                  <span className="material-symbols-outlined align-middle fs-6 fw-bold">grade</span>
                  <span className="material-symbols-outlined align-middle fs-6 fw-bold">grade</span>
                  <span className="material-symbols-outlined align-middle fs-6 fw-bold">grade</span>
                  <span className="material-symbols-outlined align-middle fs-6 fw-bold">grade</span>
                  <span className="material-symbols-outlined align-middle fs-6 fw-bold">grade</span>
                  No Reviews
                </p>
                <h4 className="fw-bold">J. l p t Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc.</h4>
                <div className="d-flex py-2">
                  <h3 className="fw-bold"><del className="text-muted">$21.00</del> <span style={{ color: " #e66d6d" }}
                    className="px-1">$19.00</span></h3>
                  <h6 className="pt-2 px-2"><span className="badge rounded-0 text-dark" style={{ backgroundColor: "#f1f1f1" }}>Save
                    -10%</span></h6>
                </div>
                <p>Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus
                  ullamcorper ipsum rutrum nunc. Nunc nonummy metus....</p>
              </div>

              <div className="py-2 d-flex" style={{ borderBottom: " 2px solid #f6f4f2" }}>
                <ul className="list-unstyled fw-bold">
                  <li>SKU:</li>
                  <li>Vendor:</li>
                  <li>Type:</li>
                </ul>
                <ul className="list-unstyled px-5">
                  <li> 1510</li>
                  <li> Vendor J</li>
                  <li> Type J</li>
                </ul>
              </div>

              <div className="py-1">
                <button className="btn d-inline-block text-light py-3 px-4 text-capitalize rounded-0 mt-3 me-2"
                  style={{ backgroundColor: " #f8796c" }}>Add to cart</button>
                <button className="btn d-inline-block text-light py-3 px-4 text-capitalize rounded-0 mt-3 "
                  style={{ backgroundColor: " #000" }}>Buy it now</button>
                <div className="py-3 d-flex" style={{ borderBottom: "2px solid #f6f4f2" }}>
                  <div>
                    <span className="d-inline-block px-1"> <i className="icofont-heart"></i> Add to wishlist</span>
                    <span className="d-inline-block px-1"> <i className="icofont-loop"></i> Compare</span>
                    <span className="d-inline-block px-1"> <i className="icofont-ui-message"></i> Ask about this product</span>
                  </div>
                </div>
              </div>

              <div className="py-3 d-flex" style={{ borderBottom: " 2px solid #f6f4f2" }}>
                <div>
                  <span className="d-inline-block px-1">Share:</span>
                  <span className="d-inline-block px-1"> <i className="icofont-facebook"></i> facebook</span>
                  <span className="d-inline-block px-1"> <i className="icofont-twitter"></i> twitter</span>
                  <span className="d-inline-block px-1"> <i className="icofont-pinterest"></i> pinterest</span>
                </div>
              </div>

              <div className="py-3">
                <h4 className="fw-bold text-capitalize">secure payment gateway</h4>
                <div className="py-2">
                  <img src="image/shopify-secure-badge-white.svg" alt="shopify-logo" className="d-inline-block px-1" />
                  <img src="image/amazon-92e856f82cae5a564cd0f70457f11af4d58fa037cf6e5ab7adf76f6fd3b9cafe.svg" alt="amazon-logo" className="d-inline-block px-1" />
                  <img src="image/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg" alt="apple-pay" className="d-inline-block px-1" />
                  <img src="image/bitcoin-e41278677541fc32b8d2e7fa41e61aaab2935151a6048a1d8d341162f5b93a0a.svg" alt="bitcoin" className="d-inline-block px-1" />
                  <img src="image/google_pay-c66a29c63facf2053bf69352982c958e9675cabea4f2f7ccec08d169d1856b31.svg" alt="google-pay" className="d-inline-block px-1" />
                  <img src="image/paypal-49e4c1e03244b6d2de0d270ca0d22dd15da6e92cc7266e93eb43762df5aa355d.svg" alt="paypal" className="d-inline-block px-1" />
                  <img src="image/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg" alt="visa" className="d-inline-block px-1" />
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="container container-sm-fluid py-5">
          <div className="border ">
            <div className="py-5 px-2">
              <div className="d-flex flex-md-row flex-column px-md-0 px-5 m-auto">
                <div className="col-md-4  d-flex flex-md-row flex-column">
                  <img src="image/4-track.svg" alt="track" width="90" className="px-3" height="75" />
                  <div>
                    <h5 className="fw-bold">Free Shipping</h5>
                    <p>Free shipping on orders over $99.</p>
                  </div>
                </div>
                <div className="col-md-4 d-flex flex-md-row flex-column">
                  <img src="image/9-money.svg" alt="credit-card" width="90" className="px-3" height="75" />
                  <div>
                    <h5 className="fw-bold">Money Back</h5>
                    <p>15 days money back guarantee.</p>
                  </div>
                </div>
                <div className="col-md-4 d-flex flex-md-row flex-column">
                  <img src="image/10-credit-card.svg" alt="track" width="90" className="px-3" height="75" />
                  <div>
                    <h5 className="fw-bold">Secure Checkout</h5>
                    <p>We ensure 100% Payment Secure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div id="navbar-example2" className="navbar my-3" style={{ borderBottom: " 2px solid #f6f4f2" }}>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link text-dark text fw-bold" to="#scrollspyHeading1">Description</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark text fw-bold" to="#scrollspyHeading2">
                  Reviews</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark text fw-bold" to="#scrollspyHeading2">
                  Shipping Policy</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark text fw-bold" to="#scrollspyHeading2">
                  Size Chart</Link>
              </li>
            </ul>
          </div>


          <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example"
            tabindex="0">
            <p className="px-3">Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing.
              Phasellus
              ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut
              eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.
              Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet
              imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur
              ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada.</p>

            <p className="px-3">Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu.
              Phasellus
              accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus
              consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum
              fringilla pede sit amet augue. In turpis. Pellentesque posuere.</p>

          </div>
        </div>



        <div className="text-center pt-5">
          <div className="pt-5">
            <div>
              <h2 className="fw-bold display-5 text-capitalize">new arrivals</h2>
              <p>There are many variations of passages.</p>
            </div>
          </div>
        </div>
        <div className="py-5">

          <div>
            <div className="container m-auto">
              <Responsive />
            </div>
          </div>

          <div className="text-center">
            <button className="btn d-inline-block text-light py-3 px-4 text-capitalize rounded-0 mt-2"
              style={{ backgroundColor: " #f8796c" }}>shop now</button>
          </div>
        </div>

        <ProductCollection/>

      </section>

      {/* <!-- faq section start --> */}
      <section>
        <div className="text-center">
          <div>
            <div>
              <h2 className="fw-bold display-5 text-capitalize">FAQs</h2>
            </div>
          </div>
        </div>

        <FaqList />
        <ContactInfo />
      </section>
      {/* <!-- faq section end --> */}

      {/* <!-- product section end --> */}

    </div>
  )
}

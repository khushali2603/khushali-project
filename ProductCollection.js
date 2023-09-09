import React from 'react'
import {Link} from 'react-router-dom'

function ProductCollection() {
  return (
    <div>
        <div className="container py-5">
          <div className="row row-cols-lg-4 pt-5">

            <div className="banner-box ">
              <img src="image/handcraft_1_266x.png" alt="handcraft_1" className="d-block m-auto w-100" />
              <div className="text-center py-3">
                <Link to="/" className="text-dark text fw-bold text-decoration-none text-capitalize">handcraft</Link>
                <p>(12 items)</p>
              </div>
            </div>

            <div className="banner-box">
              <img src="image/dhakna-patil_266x.png" alt="dhakna" className="d-block m-auto w-100" />
              <div className="text-center py-3">
                <Link to="/" className="text-dark text fw-bold text-decoration-none text-capitalize">Knitting &
                  Sewing</Link>
                <p>(15 items)</p>
              </div>
            </div>

            <div className="banner-box">
              <img src="image/home-juri-removebg-preview_266x.png" alt="home-juri" className="d-block m-auto w-100" />
              <div className="text-center py-3">
                <Link to="/" className="text-dark text fw-bold text-decoration-none text-capitalize">Home Decor</Link>
                <p>(13 items)</p>
              </div>
            </div>

            <div className="banner-box">
              <img src="image/collection-banner-image-300x300_7_266x.png" alt="gift" className="d-block m-auto w-100" />
              <div className="text-center py-3">
                <Link to="/" className="text-dark text fw-bold text-decoration-none text-capitalize">Gift</Link>
                <p>(10 items)</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductCollection
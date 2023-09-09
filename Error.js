import React from 'react'
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div>
      <section>
        <div style={{ backgroundColor: " #f2f4f5" }}>
          <div className="text-center py-5 fw-bold">
            <h1 className="display-6 fw-bold fs-1" style={{ "fontFamily": "Outfit " }}>404 Not Found </h1>
            <p style={{ color: "#e66d6d " }}><Link Link="index.html" className="text-dark text text-decoration-none"> Home |  </Link>
              404 Not Found </p>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="error-404-inner text-center">
              <h1 className="error-404-title mt-5">404</h1>

              <h2 className="fs-1 fw-bold mt-5" style={{"margin-bottom":"15px"}}>Ooops! Error 404</h2>


              <p>Sorry, But the page you are looking for does't exist!</p>


              <div className="btn-wrapper mt-5">
                <button className="btn btn-transparent"><Link to="/" className=" text-decoration-none text-dark" ><span className="material-symbols-outlined ">arrow_left_alt</span>Go to home page</Link></button>
              </div> 

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


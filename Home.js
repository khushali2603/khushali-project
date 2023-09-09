import React from 'react';
import { Link } from 'react-router-dom';
import Responsive from './SlickSlider';

function Home() {
  return (
    <div className='overflow-hidden'>
        <div style={{"background-color": "#f5f8f9;"}}>
          <div id="carouselExampleDark" className="carousel slide " data-bs-ride="carousel">

            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active me-2"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                aria-label="Slide 2"></button>

            </div>

            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="container m-auto">

                  <div className="row d-flex">
                    <div className="col-sm-5 col-10 m-auto">
                      <div className=" d-flex justify-content-center align-items-center d-height py-4">
                        <div data-aos="fade-up">
                          <h5 style={{"color":"#f8796c"}} className="fw-bold">Special offers</h5>
                          <h1 className=" fw-bold display-5 my-3">
                            Winter Collection
                            <br/>
                            Knitting Stocking
                          </h1>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                          <button className="btn d-inline text-light py-3 px-4 text-capitalize rounded-0 mt-3"
                            style={{"background-color": "#f8796c"}}>shop now</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-5 col-10 m-auto order-1 "data-aos="fade-left">
                      <img src="image/slide-image-14_600x.png" className="w-100" alt="coffee-machine"/>
                    </div>
                  </div>

                </div>

              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="container m-auto">

                  <div className="row">
                    <div className="col-sm-6 col-10 m-auto">
                      <div className="d-flex justify-content-center align-items-center d-height py-4">
                        <div data-aos="fade-up">
                          <h5 style={{"color":"#f8796c"}} className="fw-bold">life is very easy with</h5>
                          <h1 className="fw-bold display-5 my-3">
                            Cofee Machine
                            <br/>
                            Handmade Collection
                          </h1>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas quidem debitis?</p>
                          <button className="btn d-inline text-light py-3 px-4 text-capitalize rounded-0 mt-3"
                            style={{"background-color": "#f8796c"}}>shop now</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-5 col-10 m-auto"data-aos="fade-left">
                      <img src="image/slide-image-13_600x.png" className="w-100" alt="coffee-machine"/>
                    </div>
                  </div>
                </div>

              </div>

            </div>
            <button className="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExampleDark"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon " style={{"background-color": "#e66d6d;"}} aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next text-dark" type="button" data-bs-target="#carouselExampleDark"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" style={{"background-color": 
              "#e66d6d;"}} aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>

            </button>
          </div>
        </div> 
        {/* <!--slider end-- > */}

        <div>
          <div className="container m-auto px-4 ">
            <div className="row align-items-center">
              <div className="col-10 col-sm-8 col-md-6 m-auto py-5" data-aos="fade-right">
                <img src="image/about-image-2_1_570x.webp" className="d-block w-100" alt="aboutImage" loading="lazy"/>
              </div>
              <div className="col-md-6" data-aos="fade-up">
                <h5 className="fw-bold">Kitchen Utensils</h5>
                <h2 className="fs-1 fw-bold py-2">Sale Up To 10%</h2>
                <p className="py-2">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC, making it over 2000 years old.</p>
                <button className="btn d-inline text-light py-3 px-4 text-capitalize rounded-0 mt-3"
                  style={{"background-color": "#f8796c"}}>shop now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container m-auto">
          <div className="row pt-5 pt-md-0">
            <div className="col-lg-6 p-3" data-aos="fade-right">
              <div className="overflow-hidden position-relative">
                <img src="image/banner-570x550_570x.webp" alt="banner-2" className="banner w-100"/>
                <div className="position-absolute top-0 p-4">
                  <p className=" fw-bold text-capitalize">new collection</p>
                  <Link to="/" className="text-decoration-none text-dark fw-bold fs-2 text-capitalize text">up to 15% off</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-3" data-aos="fade-down">
                <div className="overflow-hidden position-relative">

                  <img src="image/banner-570x260_3_570x.webp" alt="banner-3" className="banner w-100"/>
                  <div className="position-absolute top-0 end-0 p-4">
                    <p className=" fw-bold text-capitalize">glass collection</p>
                    <Link to="/" className="text-decoration-none text-dark fw-bold fs-2 text-capitalize text">flower vase</Link>
                  </div>
                </div>
              </div>
              <div className="p-3" data-aos="fade-up">
                <div className="overflow-hidden position-relative">
                  <img src="image/3_23962ce1-347c-4b6d-ae50-98efb8aaf9a9_570x.webp" alt="banner-1" className="banner w-100"/>
                  <div className="position-absolute top-0 p-4">
                    <p className=" fw-bold text-capitalize">special offer</p>
                    <Link to="/" className="text-decoration-none text-dark fw-bold fs-2 text-capitalize text">sale 30%</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--sale product box end-- > */}

      

        <div className="container m-auto">
          <div className="my-5">
            <div className="text-center">
              <div className="py-2">
                <div>
                  <h2 className="fw-bold display-5 text-capitalize">new arrivals</h2>
                  <p>There are many variations of passages.</p>
                </div>
              </div>
            </div>


            <div className="py-5">
              <div className="container m-auto">
                <Responsive/>
                <div className="text-center">
                  <button className="btn d-inline-block text-light py-3 px-4 text-capitalize rounded-0 mt-3 "
                    style={{"background-color": "#f8796c"}}>shop now</button>
                </div>
              </div>
            </div>

            <div className="py-4" >
              <div className="container m-auto position-relative">
                <img src="image/Video_Banner_1_1170x.png" alt="Video_Banner" className="w-100"/>
                <Link to="/" className="text-decoration-none">
                <i className="icofont-ui-play absolute-1 d-block bg-white fs-4 p-4 icon-btn"></i>
              </Link>
              </div>
            </div>

            <div className="container m-auto py-4">
              <div className="row ">
                <div className="col-md-6">
                  <div className="d-flex justify-content-center align-items-center d-height">
                    <div className="pt-5 pt-md-0" data-aos="fade-up">
                      <h5 className="fw-bold">Bundle Offer</h5>
                      <h1 className="fw-bold display-5 my-3">
                        Knitting & Sewing
                      </h1>
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical
                        Latin literature from 45 BC, making it over 2000 years old.</p>
                      <button className="btn d-inline text-light py-3 px-4 text-capitalize rounded-0 mt-3"
                        style={{"background-color": "#f8796c"}}>shop now</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6" data-aos="fade-left">
                  <img src="image/about-image-2_4_570x.webp" alt="aboutIimage" className="w-100"/>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--new arrival section end-- > */}
        
    </div>
  )
}

export default Home
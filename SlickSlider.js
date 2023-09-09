import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: false,
            arrows:false,
            autoplay:true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <Slider {...settings}>

                        <div className=" px-2 hide">
                            <div className="card h-100 rounded-0 border-0">

                                <div className="position-relative">
                                    <img src="image/26_600x.png" className="card-img-top img-hover" alt="product" />

                                    <div className="hide-icon-box bg-light">
                                        <div className="position-absolute w-100 bg-light" style={{ "bottom": "8%;" }}>
                                            <div className="text-center icon-box ">

                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">visibility
                                                </span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">repeat_one
                                                </span></Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="p-4 text-center">
                                    <Link to="/" className="fw-bold text text-decoration-none text-dark" style={{ "font-size": "14px;" }}>Y. Showpiece
                                        Rickshaw</Link>
                                    <p style={{ "color": "#e66d6d" }}><del className="text-muted"> $75.00 </del><b> $55.00</b></p>
                                </div>

                            </div>
                        </div>

                        <div className=" px-2 hide">
                            <div className="card h-100 rounded-0 border-0">

                                <div className="position-relative">
                                    <img src="image/product_3_600x.png" className="card-img-top img-hover" alt="product" />
                                    <div className="hide-icon-box">
                                        <div className="position-absolute w-100" style={{ "bottom": "8%;" }}>
                                            <div className="text-center icon-box">

                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">visibility
                                                </span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">repeat_one
                                                </span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 text-center">
                                    <Link to="/" className="fw-bold text text-decoration-none text-dark" style={{ "font-size": "14px;" }}>X.
                                        Complementary Product 3</Link>
                                    <p><b> $29.00</b></p>
                                </div>

                            </div>
                        </div>

                        <div className=" px-2 hide">
                            <div className="card h-100 rounded-0 border-0">

                                <div className="position-relative">
                                    <img src="image/product_2_600x.png" className="card-img-top img-hover" alt="product" />
                                    <div className="hide-icon-box">
                                        <div className="position-absolute w-100" style={{ "bottom": "8%;" }}>
                                            <div className="text-center icon-box">

                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">visibility
                                                </span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">repeat_one
                                                </span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 text-center">
                                    <Link to="/" className="fw-bold text text-decoration-none text-dark" style={{ "font-size": "14px;" }}>X.
                                        Complementary Product 2</Link>
                                    <p><b> $29.00</b></p>
                                </div>

                            </div>
                        </div>

                        <div className=" px-2 hide">
                            <div className="card h-100 rounded-0 border-0">

                                <div className="position-relative">
                                    <img src="image/product_1_600x.png" className="card-img-top img-hover" alt="product" />
                                    <div className="hide-icon-box">
                                        <div className="position-absolute w-100" style={{ "bottom": "8%;" }}>
                                            <div className="text-center icon-box">

                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">visibility
                                                </span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">repeat_one
                                                </span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 text-center">
                                    <Link to="/" className="fw-bold text text-decoration-none text-dark" style={{ "font-size": "14px;" }}>X.
                                        Complementary Product</Link>
                                    <p><b> $39.00</b></p>
                                </div>

                            </div>
                        </div>

                        <div className="px-2 hide">
                            <div className="card h-100 rounded-0 border-0">

                                <div className="position-relative">
                                    <img src="image/product_600x.png" className="card-img-top img-hover" alt="product" />
                                    <div className="hide-icon-box">
                                        <div className="position-absolute w-100" style={{ "bottom": "8%;" }}>
                                            <div className="text-center icon-box">

                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">visibility
                                                </span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">repeat_one
                                                </span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 text-center">
                                    <Link to="/" className="fw-bold text text-decoration-none text-dark" style={{ "font-size": "14px;" }}>New99 Gift
                                        Card</Link>
                                    <p><b> $10.00</b></p>
                                </div>

                            </div>
                        </div>
                        <div className=" px-2 hide">
                            <div className="card h-100 rounded-0 border-0">

                                <div className="position-relative">
                                    <img src="image/28_600x.png" className="card-img-top img-hover" alt="product" />
                                    <div className="hide-icon-box">
                                        <div className="position-absolute w-100" style={{ "bottom": "8%;" }}>
                                            <div className="text-center icon-box">

                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">visibility
                                                </span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">repeat_one
                                                </span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 text-center">
                                    <Link to="/" className="fw-bold text text-decoration-none text-dark" style={{ "font-size": "14px;" }}>W. Unit Price
                                        Product</Link>
                                    <p style={{ "color": "#e66d6d" }}><del className="text-muted"> $21.00 </del><b> $19.00</b></p>
                                </div>

                            </div>
                        </div>
                        <div className=" px-2 hide">
                            <div className="card h-100 rounded-0 border-0">

                                <div className="position-relative">
                                    <img src="image/e_1_600x.png" className="card-img-top img-hover" alt="product" />
                                    <div className="hide-icon-box">
                                        <div className="position-absolute w-100" style={{ "bottom": "8%;" }}>
                                            <div className="text-center icon-box">

                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">visibility
                                                </span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">repeat_one
                                                </span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 text-center">
                                    <Link to="/" className="fw-bold text text-decoration-none text-dark" style={{ "font-size": "14px;" }}>V. AR/3D
                                        Product</Link>
                                    <p><b> $39.00</b></p>
                                </div>

                            </div>
                        </div>
                        <div className=" px-2 hide">
                            <div className="card h-100 rounded-0 border-0">

                                <div className="position-relative">
                                    <img src="image/e_600x.png" className="card-img-top img-hover" alt="product" />
                                    <div className="hide-icon-box">
                                        <div className="position-absolute w-100" style={{ "bottom": "8%;" }}>
                                            <div className="text-center icon-box">

                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">visibility
                                                </span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">repeat_one
                                                </span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 text-center">
                                    <Link to="/" className="fw-bold text text-decoration-none text-dark" style={{ "font-size": "14px;" }}>U. Product
                                        Video</Link>
                                    <p><b> $79.00</b></p>
                                </div>

                            </div>
                        </div>

                        <div className=" px-2 hide">
                            <div className="card h-100 rounded-0 border-0">

                                <div className="position-relative">
                                    <img src="image/handmade-product_11_600x.png" className="card-img-top img-hover" alt="product" />
                                    <div className="hide-icon-box">
                                        <div className="position-absolute w-100" style={{ "bottom": "8%;" }}>
                                            <div className="text-center icon-box">

                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">visibility
                                                </span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">repeat_one
                                                </span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 text-center">
                                    <Link to="/" className="fw-bold text text-decoration-none text-dark" style={{ "font-size": "14px;" }}>T. c d
                                        product</Link>
                                    <p style={{ "color": "#e66d6d" }}><del className="text-muted"> $60.00 </del><b> $39.00</b></p>
                                </div>

                            </div>
                        </div>
                        <div className=" px-2 hide">
                            <div className="card h-100 rounded-0 border-0">

                                <div className="position-relative">
                                    <img src="image/handmade-product_8_600x.png" className="card-img-top img-hover" alt="product" />
                                    <div className="hide-icon-box">
                                        <div className="position-absolute w-100" style={{ "bottom": "8%;" }}>
                                            <div className="text-center icon-box">

                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">visibility
                                                </span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">repeat_one
                                                </span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 text-center">
                                    <Link to="/" className="fw-bold text text-decoration-none text-dark" style={{ "font-size": "14px;" }}>S. a
                                        product</Link>
                                    <p><b>$33.00</b></p>
                                </div>

                            </div>
                        </div>
                        <div className=" px-2 hide">
                            <div className="card h-100 rounded-0 border-0">

                                <div className="position-relative">
                                    <img src="image/tisu-box_76a339b4-acbd-4eaf-bfd2-e549fa379202_600x.jpg" className="card-img-top img-hover"
                                        alt="product" />
                                    <div className="hide-icon-box">
                                        <div className="position-absolute w-100" style={{ "bottom": "8%;" }}>
                                            <div className="text-center icon-box">

                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">visibility
                                                </span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">repeat_one
                                                </span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 text-center">
                                    <Link to="/" className="fw-bold text text-decoration-none text-dark" style={{ "font-size": "14px;" }}>R. v w s
                                        product</Link>
                                    <p style={{ "color": "#e66d6d" }}><del className="text-muted"> $75.00 </del><b> $55.00</b></p>
                                </div>

                            </div>
                        </div>
                        <div className=" px-2 hide">
                            <div className="card h-100 rounded-0 border-0">

                                <div className="position-relative">
                                    <img src="image/handmade-product_9_600x.png" className="card-img-top img-hover" alt="product" />
                                    <div className="hide-icon-box">
                                        <div className="position-absolute w-100" style={{ "bottom": "8%;" }}>
                                            <div className="text-center icon-box">

                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                <Link to="/" className="text-dark"><span
                                                    className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">visibility
                                                </span></Link>
                                                <Link to="/" className="text-dark"><span className="material-symbols-outlined m-1 p-2">repeat_one
                                                </span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 text-center">
                                    <Link to="/" className="fw-bold text text-decoration-none text-dark" style={{ "font-size": "14px;" }}>Q. s
                                        product</Link>
                                    <p><b>$39.00</b></p>
                                </div>

                            </div>
                        </div>




                  
                </Slider>
            </div>
        );
    }
}

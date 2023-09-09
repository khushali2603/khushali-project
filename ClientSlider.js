import React, { Component } from "react";
import Slider from "react-slick";

export default class ClientSlider extends Component {
    render() {
        var settings = {
            dots: false,
            arrows:false,
            autoplay:true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                }
            ]
        };
        return (
            <div>
                <Slider {...settings}>
                <div>
                        <div className="border m-1 p-3">
                            <div className="col d-flex flex-md-row flex-column">
                                <div className="p-3">
                                    <img src="image/team-2_200x.jpg" alt="client-1" className="w-100"/>
                                </div>
                                <div className="p-3">
                                    <p>Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore
                                        magna aliqua.</p>
                                    <h4 className="fw-bold">Elana</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="p-3 border m-1">
                            <div className="col d-flex flex-md-row flex-column">
                                <div className="p-3">
                                    <img src="image/team-9_200x.jpg" alt="client-2 " className="w-100"/>
                                </div>
                                <div className="p-3">

                                    <p>Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore
                                        magna aliqua.</p>
                                    <h4 className="fw-bold ">Lanal Julman</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="p-3 border m-1">
                            <div className="col d-flex flex-md-row flex-column">
                                <div className="p-3">
                                    <img src="image/team-3_200x.jpg" alt="client-2 " className="w-100"/>
                                </div>
                                <div className="p-3">

                                    <p>Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore
                                        magna aliqua.</p>
                                    <h4 className="fw-bold ">Avalan Rudu</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="p-3 border m-1">
                            <div className="col d-flex flex-md-row flex-column">
                                <div className="p-3">
                                    <img src="image/team-7_200x.jpg" alt="client-2 " className="w-100"/>
                                </div>
                                <div className="p-3">

                                    <p>Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore
                                        magna aliqua.</p>
                                    <h4 className="fw-bold ">Hr Rana</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

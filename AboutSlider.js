import React, { Component } from "react";
import Slider from "react-slick";

export default class AboutSlider extends Component {
    render() {
        var settings = {
            dots: false,
            arrows:false,
            autoplay:true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
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
                        <div className="p-5 h-100">
                            <img src="image/Brand-Logo-2_medium.png" alt="brand-logo" className="w-75 h-50 m-auto img-zoom"/>
                        </div>
                        <div className="p-5 h-100">
                            <img src="image/Brand-Logo-3_medium.png" alt="brand-logo" className="w-75 h-50 m-auto img-zoom"/>
                        </div>
                        <div className="p-5 h-100">
                            <img src="image/Brand-Logo-4_medium.png" alt="brand-logo" className="w-75 h-50 m-auto img-zoom"/>
                        </div>
                        <div className="p-5 h-100">
                            <img src="image/Brand-Logo-5_medium.png" alt="brand-logo" className="w-75 h-50 m-auto img-zoom"/>
                        </div>
                        <div className="p-5 h-100">
                            <img src="image/Brand-Logo-6_medium.png" alt="brand-logo" className="w-75 h-50 m-auto img-zoom"/>
                        </div>
                        <div className="p-5 h-100">
                            <img src="image/Brand-Logo-2_medium.png" alt="brand-logo" className="w-75 h-50 m-auto img-zoom"/>
                        </div>
                        <div className="p-5 h-100">
                            <img src="image/Brand-Logo-3_medium.png" alt="brand-logo" className="w-75 h-50 m-auto img-zoom"/>
                        </div>
                        <div className="p-5 h-100">
                            <img src="image/Brand-Logo-4_medium.png" alt="brand-logo" className="w-75 h-50 m-auto img-zoom"/>
                        </div>
                        <div className="p-5 h-100">
                            <img src="image/Brand-Logo-5_medium.png" alt="brand-logo" className="w-75 h-50 m-auto img-zoom"/>
                        </div>
                </Slider>
            </div>
        );
    }
}

import Slider from 'react-slick'
import React, { Component } from 'react'

export default class ProductSlider extends Component {
    render() {
        var settings = {
            dots: false,
            arrows: false,
            autoplay: true,
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
                        infinite: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true
                    }
                }
                
            ]
        }
        return (
            <div>
                <Slider {...settings}>
                    <div className="p-3">
                        <img src="image/mora_1ee7d1f2-d2f0-4446-9c4f-7b65d31ddf5d_x110@2x.jpg" alt="mora" className="w-100" />
                    </div>
                    <div className="p-3">
                        <img src="image/lamp_56a7520e-eb67-4042-a861-9e379fbe1a4e_x110@2x.jpg" alt="lamp" className="w-100" />
                    </div>
                    <div className="p-3">
                        <img src="image/palla_x110@2x.jpg" alt="palla" className="w-100" />
                    </div>
                    <div className="p-3">
                        <img src="image/home-juri_f8b3b0ae-20b0-4467-8a00-7ecf3c1e204d_x110@2x.jpg" alt="home-juri" className="w-100" />
                    </div>
                    <div className="p-3">
                        <img src="image/mora_1ee7d1f2-d2f0-4446-9c4f-7b65d31ddf5d_x110@2x.jpg" alt="mora" className="w-100" />
                    </div>
                    <div className="p-3">
                        <img src="image/lamp_56a7520e-eb67-4042-a861-9e379fbe1a4e_x110@2x.jpg" alt="lamp" className="w-100" />
                    </div>
                    <div className="p-3">
                        <img src="image/palla_x110@2x.jpg" alt="palla" className="w-100" />
                    </div>
                    <div className="p-3">
                        <img src="image/home-juri_f8b3b0ae-20b0-4467-8a00-7ecf3c1e204d_x110@2x.jpg" alt="home-juri" className="w-100" />
                    </div>
                </Slider>
            </div>
        )
    }
}

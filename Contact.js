import React from 'react'
import ContactForm from './ContactForm';
import ProductHead from './ProductHead';

export default function Contact() {
  return (
    <div>
        {/* <!-- about section start --> */}
    <section>
    <ProductHead data ="Contact" head="Contact"/>

        <div className="container py-5">
            <div className="row py-5">
                <div className="col-md-4 col-8 m-auto pt-3">
                    <div className="border p-5">

                        <div className="text-center">
                            <div className="">
                                <img src="image/email_80x.webp" alt="email" className="w-25"/>
                            </div>
                            <div className="mt-4">
                                <h4 className="fw-bold">Email Address</h4>
                                <p>example@gmail.com <br/>
                               example1@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-8 m-auto pt-3">
                    <div className="border p-5">

                        <div className="text-center">
                            <div className="">
                                <img src="https://cdn.shopify.com/s/files/1/0027/0952/0502/files/call_80x.png?v=1666710201" alt="contact" className="w-25"/>
                            </div>
                            <div className="mt-4">
                                <h4 className="fw-bold">Phone Number</h4>
                                <p>+0123-456789 <br/>
                               +9879-654321</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-8 m-auto pt-3">
                    <div className="border p-5">

                        <div className="text-center">
                            <div className="">
                                <img src="https://cdn.shopify.com/s/files/1/0027/0952/0502/files/location_80x.png?v=1666710334" alt="location" className="w-25"/>
                            </div>
                            <div className="mt-4">
                                <h4 className="fw-bold">Office Address</h4>
                                <p>3B, Address text here,<br/>
                                City, Country</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.2015331535617!2d-73.96471988512863!3d40.66952824815067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sin!4v1679233251940!5m2!1sen!2sin"
                width="100%" height="500" style={{border:"0"}} allowfullscreen="" loading="lazy"
                title='map'
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <ContactForm/>
    </section>
    </div>
  )
}

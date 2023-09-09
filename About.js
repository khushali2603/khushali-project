import React from 'react';
import { Link } from 'react-router-dom'
import AboutSlider from './AboutSlider';
import ClientSlider from './ClientSlider';
import ProductHead from './ProductHead';

function About(props) {
    return (
        <div>
            <section>
                <ProductHead data ="About" head="About"/>

                <div className="py-5 mt-md-0 mt-5">
                    <div className="container m-auto py-5">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="d-flex justify-content-center align-items-center d-height">
                                    <div data-aos="fade-up">
                                        <h5 className="fw-bold">Provide the best</h5>
                                        <h1 className="fw-bold py-3">
                                            Handmade Products.
                                        </h1>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                            piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
                                            up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                                            going through the cites of the word in classical literature, discovered the
                                            undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                                            Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
                                            BC.</p>
                                        <p style={{ padding: " 0", margin: " 0" }}>This book is a treatise on the theory of ethics, very
                                            popular during the Renaissance.
                                            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                                            section 1.10.32.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12" data-aos="fade-left">
                                <img src="image/about_540x.webp" alt="about" className="w-100" />
                            </div>
                        </div>
                    </div>

                    <div className="py-0 py-sm-5">

                        <div className="container m-auto position-relative">
                            <img src="image/Video_Banner_1_1170x.png" alt="Video_Banner" className="w-100" />

                            <Link to="/" className="text-decoration-none absolute-1">
                                <i className="icofont-ui-play d-block bg-white fs-4 p-4 icon-btn"></i>
                            </Link>
                        </div>

                    </div>
                </div>

            </section>
            {/* <!-- about section end --> */}

            {/* <!-- team section start --> */}
            <section>
                <div className="py-0 py-sm-5">
                    <div className="py-2">
                        <div className="text-center">
                            <div>
                                <div>
                                    <h2 className="fw-bold display-5 text-capitalize">team member</h2>
                                    <p>Our creative team members</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container py-2 pb-5">
                        <div className="row">

                            <div className="col-md-3 col-sm-6 col-10 mt-3 mt-md-0 m-auto">
                                <div className="card rounded-0 p-4 card-hover">
                                    <img src="https://cdn.shopify.com/s/files/1/0027/0952/0502/files/team-8_180x.jpg?v=1663687062" className="rounded-circle d-block m-auto w-75" alt="product" />
                                    <div className="text-center pt-4">
                                        <h6 className="fw-bold " style={{ color: "#e66d6d" }}>DIRECTOR</h6>
                                        <h6 className="fw-bold fs-5 team-member">Halbard Ali</h6>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-10 mt-3 mt-md-0 m-auto">
                                <div className="card rounded-0 p-4 card-hover">
                                    <img src="https://cdn.shopify.com/s/files/1/0027/0952/0502/files/team-1_180x.jpg?v=1663687061" className="rounded-circle d-block m-auto w-75" alt="product" />
                                    <div className="text-center pt-4">
                                        <h6 className="fw-bold " style={{ color: "#e66d6d" }}>CEO</h6>
                                        <h6 className="fw-bold fs-5 team-member">Joan Bro</h6>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-10 mt-3 mt-md-0 m-auto">
                                <div className="card rounded-0 p-4 card-hover">
                                    <img src="https://cdn.shopify.com/s/files/1/0027/0952/0502/files/team-5_180x.jpg?v=1663687061" className="rounded-circle d-block m-auto w-75" alt="product" />
                                    <div className="text-center pt-4">
                                        <h6 className="fw-bold " style={{ color: "#e66d6d" }}>DESIGNER</h6>
                                        <h6 className="fw-bold fs-5 team-member">Albard Melan</h6>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-10 mt-3 mt-md-0 m-auto">
                                <div className="card rounded-0 p-4 card-hover">
                                    <img src="https://cdn.shopify.com/s/files/1/0027/0952/0502/files/team-6_180x.jpg?v=1663687061" className="rounded-circle d-block m-auto w-75" alt="product" />
                                    <div className="text-center pt-4">
                                        <h6 className="fw-bold " style={{ color: "#e66d6d" }}>MANAGER</h6>
                                        <h6 className="fw-bold fs-5 team-member">Luchi Deniel
                                        </h6>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>


                    <div className="py-5">
                        <hr />
                        <AboutSlider />
                        <hr />
                    </div>

                </div>
            </section>
            {/* <!-- team section end --> */}

            {/* <!-- client section start --> */}
            <section>
                <div>
                    <div className="py-2">
                        <div className="text-center">
                            <div>
                                <div>
                                    <h2 className="fw-bold display-5 text-capitalize">Client Feedback</h2>
                                    <p>The valuable opinion of our clients.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="container-fluid ">
                        <ClientSlider />
                    </div>

                    <div className="container container-sm-fluid py-5">
                        <div className="border my-5">
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
                </div>
            </section>
        </div>
    )
}

export default About
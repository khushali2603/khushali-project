import React from 'react'
import { Link } from 'react-router-dom';
import ProductHead from './ProductHead';

export default function Services() {
  return (
    <div>
        <section>
            <ProductHead head="Service" data="Services"/>

            <div>

                <div className="my-5">
                    <div className="container pt-5">
                        <div className="row row-cols-md-2 row-cols-1 row-cols-lg-3">

                            <div className="feature col">
                                <div className="m-3 border p-4 card-shadow  position-relative">
                                    <div className="my-4">
                                        <img src="https://cdn.shopify.com/s/files/1/0027/0952/0502/files/pencil-and-ruler_100x.png?v=1666890608" alt="pencil"/>
                                    </div>
                                    <div className="m-2">
                                        <h5 className="fw-bold text">Custom Design</h5>
                                        <p>It is a long established fact that a reader will be distracted by the readable
                                            content of a page when
                                            looking at its layout.</p>
                                        <Link to="/" className="icon-link fs-6 text-decoration-none" style={{color:"#8cb2b2"}}>Learn
                                            More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="feature col">
                                <div className="border m-3 p-4 card-shadow  position-relative">
                                    <div className="my-4">
                                        <img src="https://cdn.shopify.com/s/files/1/0027/0952/0502/files/living-room_100x.png?v=1666891163" alt="living-room"/>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text">Home Decoration</h5>
                                        <p>It is a long established fact that a reader will be distracted by the readable
                                            content of a page when
                                            looking at its layout.</p>
                                        <Link to="/" className="icon-link fs-6 text-decoration-none" style={{color:"#8cb2b2"}}>Learn
                                            More</Link>
                                    </div>
                                </div>
                            </div>


                            <div className="feature col">
                                <div className="border m-3 p-4 card-shadow  position-relative">
                                    <div className="my-4">
                                        <img src="https://cdn.shopify.com/s/files/1/0027/0952/0502/files/stairs_100x.png?v=1666891265" alt="interior-design"/>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text">Interior Design</h5>
                                        <p>It is a long established fact that a reader will be distracted by the readable
                                            content of a page when
                                            looking at its layout.</p>
                                        <Link to="/" className="icon-link fs-6 text-decoration-none" style={{color:"#8cb2b2"}}>Learn
                                            More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="feature col">
                                <div className="border m-3 p-4 card-shadow  position-relative">
                                    <div className="my-4">
                                        <img src="https://cdn.shopify.com/s/files/1/0027/0952/0502/files/handcraft_100x.png?v=1666891562" alt="handcraft"/>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text">Handcraft</h5>
                                        <p>It is a long established fact that a reader will be distracted by the readable
                                            content of a page when
                                            looking at its layout.</p>
                                        <Link to="/" className="icon-link fs-6 text-decoration-none" style={{color:"#8cb2b2"}}>Learn
                                            More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="feature col">
                                <div className="border m-3 p-4 card-shadow  position-relative">
                                    <div className="my-4">
                                        <img src="https://cdn.shopify.com/s/files/1/0027/0952/0502/files/sewing-machine_100x.png?v=1666891716" alt="sewing-machine"/>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text">Knitting & Sewing</h5>
                                        <p>It is a long established fact that a reader will be distracted by the readable
                                            content of a page when
                                            looking at its layout.</p>
                                        <Link to="/" className="icon-link fs-6 text-decoration-none" style={{color:"#8cb2b2"}}>Learn
                                            More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="feature col">
                                <div className="border m-3 p-4 card-shadow  position-relative">
                                    <div className="my-4">
                                        <img src="https://cdn.shopify.com/s/files/1/0027/0952/0502/files/gift_100x.png?v=1666891808" alt="interior-design"/>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text">Gift Ideas</h5>
                                        <p>It is a long established fact that a reader will be distracted by the readable
                                            content of a page when
                                            looking at its layout.</p>
                                        <Link to="/" className="icon-link fs-6 text-decoration-none" style={{color:"#8cb2b2"}}>Learn
                                            More</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5 my-5">
            <div style={{backgroundColor:" #f2f4f5"}}>
                <div className="text-center py-5 fw-bold">
                    <h6 style={{color:"#e66d6d "}}>Custom Order</h6>
                    <h2 className="display-5 fw-bold">+0123-456789</h2>
                    <button className="btn d-inline text-light py-3 px-4 text-capitalize rounded-0 mt-3"
                        style={{backgroundColor:" #f8796c"}}>make a call</button>

                    <button className="btn d-inline text-dark bg-white shadow py-3 px-4 mx-2 text-capitalize rounded-0 mt-3">send
                        message</button>
                </div>
            </div>
        </div>

        </section>
    {/* <!-- service section end --> */}
    </div>
  )
}

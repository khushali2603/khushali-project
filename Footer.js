import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            {/* <!-- footer section start --> */}
            <div>
                <hr/>
                    <div className="container m-auto">
                        <div className="text-center p-1 p-sm-5">
                            <div className="p-1 p-sm-4 ">
                                <div style={{"width":"180px"}} className="p-3 m-auto">
                                    <img src="image/logo_150x.webp" alt="logo" className="w-100 d-block"/>
                                </div>
                                <p className="lh-lg"><b>Address: </b> 3B, Sectior 1, Address, City, Country</p>
                                <p className="lh-lg"><b>Phone: </b>+0123-456789</p>
                                <p className="lh-lg"><b>Email: </b> example@example.com</p>
                                <div className="footer-icon">
                                    <Link to="/" className="d-inline-block fs-5 text-decoration-none text-dark lh-lg"><i
                                        className="icofont-facebook "></i></Link>
                                    <Link to="/" className="d-inline-block fs-5 text-decoration-none text-dark lh-lg"><i
                                        className="icofont-twitter "></i></Link>
                                    <Link to="/" className="d-inline-block fs-5 text-decoration-none text-dark lh-lg"><i
                                        className="icofont-youtube-play"></i></Link>
                                    <Link to="/" className="d-inline-block fs-5 text-decoration-none text-dark lh-lg"><i
                                        className="icofont-instagram "></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                        <div className="footer-copyright ">
                            <div className="container">
                                <div className="d-md-flex justify-content-between align-items-center py-3 text-center text-md-start">
                                    {/* <!-- copyright text --> */}
                                    <div className="copyright-text">Copyright <span className="fw-bold">©New99</span> All Right Reserved.</div>
                                    {/* <!-- copyright links--> */}
                                    <div className="copyright-links primary-hover mt-3 mt-md-0">
                                        <ul className="list-inline">
                                            <li className="list-inline-item ps-1"><Link className="list-group-item-action text-decoration-none text fw-bold"
                                                to="/">Privacy Policy</Link></li>
                                            <li className="list-inline-item ps-1"><Link className="list-group-item-action text-decoration-none text fw-bold"
                                                to="/">Refund Policy</Link></li>
                                            <li className="list-inline-item ps-1"><Link className="list-group-item-action text-decoration-none text fw-bold"
                                                to="/">Terms of Service
                                            </Link></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" position-fixed bottom-0 end-0 m-4 p-1 px-2 page-link" style={{"backgroundColor": "#f2f4f5"}}>
                        <Link to="/" className="text-decoration-none text-dark "><i
                            className="icofont-rounded-up fs-4 align-middle"></i></Link>
                    </div>
        </div>
    )
}

export default Footer
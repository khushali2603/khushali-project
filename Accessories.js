import React from 'react'
import { Link } from 'react-router-dom'
import ProductCollection from './ProductCollection'
import ProductHead from './ProductHead'
export default function Accessories() {
  return (
    <div>
    <section>

    <ProductHead data="Accessories" head="Accessories" />

        <div className="container-lg">
            <div className="row">
                <div className="col-lg-3">

                    <div className="my-5">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        Availability
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <div>
                                            <input type="checkbox" name="stock" id="stock"/>
                                            <label for="stock">In stock (12)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="stock" id="stock"/>
                                            <label for="stock">In stock (12)</label>
                                        </div>
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                        Price
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <div className="d-flex">
                                            <div className="col-6">
                                                <label for="price-from">From $</label><br/>
                                                <input type="number" name="price-from" id="price-from" min="0"
                                                    max="100"/>
                                            </div>
                                            <div className="col-6"><label for="price-to">To $</label><br/>
                                                <input type="number" name="price-to" id="price-to" min="0" max="100"
                                                    value="100"/>
                                            </div>


                                        </div>
                                        <div >
                                            <button
                                            className="btn text-light py-2 w-100 px-4 text-capitalize rounded-0 mt-3 "
                                            style={{backgroundColor:" #f8796c"}}>Filter</button>
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        Product Type
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <div className="my-3">
                                            <input type="checkbox" name="type1" id="type1"/>
                                            <label for="type1">Type A (1)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type1" id="type1"/>
                                            <label for="type2">Type D (1)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type3" id="type3"/>
                                            <label for="type3">Type E (4)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type4" id="type4"/>
                                            <label for="type4">Type G (4)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type5" id="type5"/>
                                            <label for="type5">Type H (1)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type6" id="type6"/>
                                            <label for="type6">Type I (1)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type7" id="type7"/>
                                            <label for="type7">Type K (2)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type8" id="type8"/>
                                            <label for="type8">Type L (1)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFour" aria-expanded="false"
                                        aria-controls="flush-collapseFour">
                                        Brand
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <div className="my-3">
                                            <input type="checkbox" name="type1" id="type1"/>
                                            <label for="type1">Vendor A (1)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type1" id="type1"/>
                                            <label for="type2">Vendor D (1)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type3" id="type3"/>
                                            <label for="type3">Vendor E (4)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type4" id="type4"/>
                                            <label for="type4">Vendor G (4)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type5" id="type5"/>
                                            <label for="type5">Vendor H (1)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type6" id="type6"/>
                                            <label for="type6">Vendor I (1)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type7" id="type7"/>
                                            <label for="type7">Vendor K (2)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type8" id="type8"/>
                                            <label for="type8">Vendor L (1)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFive">
                                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFive" aria-expanded="false"
                                        aria-controls="flush-collapseFive">
                                        Color
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <div className="my-3">
                                            <input type="checkbox" name="type1" id="type1"/>
                                            <label for="type1">Cream (1)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type1" id="type1"/>
                                            <label for="type2">
                                                Orange (1)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type3" id="type3"/>
                                            <label for="type3">
                                                Platinum (1)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type4" id="type4"/>
                                            <label for="type4">Yellow (1)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type5" id="type5"/>
                                            <label for="type5">black (2)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type6" id="type6"/>
                                            <label for="type6">
                                                blue (3)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type7" id="type7"/>
                                            <label for="type7">cream (1)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type8" id="type8"/>
                                            <label for="type8">gold (2)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type8" id="type8"/>
                                            <label for="type8">gray (2)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type8" id="type8"/>
                                            <label for="type8">
                                                green (3)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type8" id="type8"/>
                                            <label for="type8">maroon (2)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type8" id="type8"/>
                                            <label for="type8">
                                                navy (2)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingSix">
                                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseSix" aria-expanded="false"
                                        aria-controls="flush-collapseSix">
                                        Size
                                    </button>
                                </h2>
                                <div id="flush-collapseSix" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <div className="my-3">
                                            <input type="checkbox" name="type1" id="type1"/>
                                            <label for="type1">s (2)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type1" id="type1"/>
                                            <label for="type2">m (2)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type3" id="type3"/>
                                            <label for="type3">
                                                l (2)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type4" id="type4"/>
                                            <label for="type4">Vendor G (4)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type5" id="type5"/>
                                            <label for="type5">Vendor H (1)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type6" id="type6"/>
                                            <label for="type6">Vendor I (1)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type7" id="type7"/>
                                            <label for="type7">Vendor K (2)</label>
                                        </div>
                                        <div className="my-3">
                                            <input type="checkbox" name="type8" id="type8"/>
                                            <label for="type8">Vendor L (1)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-9">
                    <div className="py-5">
                        <div className="container m-auto">
                            <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1">

                                <div className=" px-2 hide">
                                    <div className="card h-100 rounded-0 border-0">

                                        <div className="position-relative">
                                            <img src="image/26_600x.png" className="card-img-top img-hover" alt="product"/>
                                            <div className="hide-icon-box">
                                                <div className="position-absolute w-100" style={{bottom:" 8%"}}>
                                                    <div className="text-center icon-box">

                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">visibility
                                                            </span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">repeat_one
                                                            </span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 text-center">
                                            <Link to="/" className="fw-bold text text-decoration-none text-dark"
                                                style={{fontSize:"14px"}}>Y. Showpiece
                                                Rickshaw</Link>
                                            <p style={{color:"#e66d6d"}}><del className="text-muted"> $75.00 </del><b>
                                                    $55.00</b></p>
                                        </div>

                                    </div>
                                </div>

                                <div className=" px-2 hide">
                                    <div className="card h-100 rounded-0 border-0">

                                        <div className="position-relative">
                                            <img src="image/product_3_600x.png" className="card-img-top img-hover"
                                                alt="product"/>
                                            <div className="hide-icon-box">
                                                <div className="position-absolute w-100" style={{bottom:"8%"}}>
                                                    <div className="text-center icon-box">

                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">visibility
                                                            </span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">repeat_one
                                                            </span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 text-center">
                                            <Link to="/" className="fw-bold text text-decoration-none text-dark"
                                                style={{fontSize:"14px"}}>X.
                                                Complementary Product 3</Link>
                                            <p><b> $29.00</b></p>
                                        </div>

                                    </div>
                                </div>

                                <div className=" px-2 hide">
                                    <div className="card h-100 rounded-0 border-0">

                                        <div className="position-relative">
                                            <img src="image/product_2_600x.png" className="card-img-top img-hover"
                                                alt="product"/>
                                            <div className="hide-icon-box">
                                                <div className="position-absolute w-100" style={{bottom:" 8%"}}>
                                                    <div className="text-center icon-box">

                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">visibility
                                                            </span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">repeat_one
                                                            </span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 text-center">
                                            <Link to="/" className="fw-bold text text-decoration-none text-dark"
                                                style={{fontSize:"14px"}}>X.
                                                Complementary Product 2</Link>
                                            <p><b> $29.00</b></p>
                                        </div>

                                    </div>
                                </div>

                                <div className=" px-2 hide">
                                    <div className="card h-100 rounded-0 border-0">

                                        <div className="position-relative">
                                            <img src="image/product_1_600x.png" className="card-img-top img-hover"
                                                alt="product"/>
                                            <div className="hide-icon-box">
                                                <div className="position-absolute w-100" style={{bottom:" 8%"}}>
                                                    <div className="text-center icon-box">

                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">visibility
                                                            </span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">repeat_one
                                                            </span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 text-center">
                                            <Link to="/" className="fw-bold text text-decoration-none text-dark"
                                                style={{fontSize:"14px"}}>X.
                                                Complementary Product</Link>
                                            <p><b> $39.00</b></p>
                                        </div>

                                    </div>
                                </div>

                                
                                <div className=" px-2 hide">
                                    <div className="card h-100 rounded-0 border-0">

                                        <div className="position-relative">
                                            <img src="image/product_600x.png" className="card-img-top img-hover"
                                                alt="product"/>
                                            <div className="hide-icon-box">
                                                <div className="position-absolute w-100" style={{bottom:" 8%"}}>
                                                    <div className="text-center icon-box">

                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">visibility
                                                            </span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">repeat_one
                                                            </span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 text-center">
                                            <Link to="/" className="fw-bold text text-decoration-none text-dark"
                                                style={{fontSize:"14px"}}>New99 Gift
                                                Card</Link>
                                            <p><b> $10.00</b></p>
                                        </div>

                                    </div>
                                </div>
                                <div className=" px-2 hide">
                                    <div className="card h-100 rounded-0 border-0">

                                        <div className="position-relative">
                                            <img src="image/28_600x.png" className="card-img-top img-hover" alt="product"/>
                                            <div className="hide-icon-box">
                                                <div className="position-absolute w-100" style={{bottom:" 8%"}}>
                                                    <div className="text-center icon-box">

                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">visibility
                                                            </span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">repeat_one
                                                            </span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 text-center">
                                            <Link to="/" className="fw-bold text text-decoration-none text-dark"
                                                style={{fontSize:"14px"}}>W. Unit Price
                                                Product</Link>
                                            <p style={{color:"#e66d6d"}}><del className="text-muted"> $21.00 </del><b>
                                                    $19.00</b></p>
                                        </div>

                                    </div>
                                </div>
                                <div className=" px-2 hide">
                                    <div className="card h-100 rounded-0 border-0">

                                        <div className="position-relative">
                                            <img src="image/e_1_600x.png" className="card-img-top img-hover" alt="product"/>
                                            <div className="hide-icon-box">
                                                <div className="position-absolute w-100" style={{bottom:" 8%"}}>
                                                    <div className="text-center icon-box">

                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">visibility
                                                            </span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">repeat_one
                                                            </span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 text-center">
                                            <Link to="/" className="fw-bold text text-decoration-none text-dark"
                                                style={{fontSize:"14px"}}>V. AR/3D
                                                Product</Link>
                                            <p><b> $39.00</b></p>
                                        </div>

                                    </div>
                                </div>
                                <div className=" px-2 hide">
                                    <div className="card h-100 rounded-0 border-0">

                                        <div className="position-relative">
                                            <img src="image/e_600x.png" className="card-img-top img-hover" alt="product"/>
                                            <div className="hide-icon-box">
                                                <div className="position-absolute w-100" style={{bottom:" 8%"}}>
                                                    <div className="text-center icon-box">

                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">visibility
                                                            </span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">repeat_one
                                                            </span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 text-center">
                                            <Link to="/" className="fw-bold text text-decoration-none text-dark"
                                                style={{fontSize:"14px"}}>U. Product
                                                Video</Link>
                                            <p><b> $79.00</b></p>
                                        </div>

                                    </div>
                                </div>
                               

                                <div className=" px-2 hide">
                                    <div className="card h-100 rounded-0 border-0">

                                        <div className="position-relative">
                                            <img src="image/handmade-product_11_600x.png" className="card-img-top img-hover"
                                                alt="product"/>
                                            <div className="hide-icon-box">
                                                <div className="position-absolute w-100" style={{bottom:" 8%"}}>
                                                    <div className="text-center icon-box">

                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">visibility
                                                            </span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">repeat_one
                                                            </span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 text-center">
                                            <Link to="/" className="fw-bold text text-decoration-none text-dark"
                                                style={{fontSize:"14px"}}>T. c d
                                                product</Link>
                                            <p style={{color:"#e66d6d"}}><del className="text-muted"> $60.00 </del><b>
                                                    $39.00</b></p>
                                        </div>

                                    </div>
                                </div>
                                <div className=" px-2 hide">
                                    <div className="card h-100 rounded-0 border-0">

                                        <div className="position-relative">
                                            <img src="image/handmade-product_8_600x.png" className="card-img-top img-hover"
                                                alt="product"/>
                                            <div className="hide-icon-box">
                                                <div className="position-absolute w-100" style={{bottom:" 8%"}}>
                                                    <div className="text-center icon-box">

                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">visibility
                                                            </span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">repeat_one
                                                            </span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 text-center">
                                            <Link to="/" className="fw-bold text text-decoration-none text-dark"
                                                style={{fontSize:"14px"}}>S. a
                                                product</Link>
                                            <p><b>$33.00</b></p>
                                        </div>

                                    </div>
                                </div>
                                <div className=" px-2 hide">
                                    <div className="card h-100 rounded-0 border-0">

                                        <div className="position-relative">
                                            <img src="image/tisu-box_76a339b4-acbd-4eaf-bfd2-e549fa379202_600x.jpg"
                                                className="card-img-top img-hover" alt="product"/>
                                            <div className="hide-icon-box">
                                                <div className="position-absolute w-100" style={{bottom:" 8%"}}>
                                                    <div className="text-center icon-box">

                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">visibility
                                                            </span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">repeat_one
                                                            </span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 text-center">
                                            <Link to="/" className="fw-bold text text-decoration-none text-dark"
                                                style={{fontsize: "14px"}}>R. v w s
                                                product</Link>
                                            <p style={{color:"#e66d6d"}}><del className="text-muted"> $75.00 </del><b>
                                                    $55.00</b></p>
                                        </div>

                                    </div>
                                </div>
                                <div className=" px-2 hide">
                                    <div className="card h-100 rounded-0 border-0">

                                        <div className="position-relative">
                                            <img src="image/handmade-product_9_600x.png" className="card-img-top img-hover"
                                                alt="product"/>
                                            <div className="hide-icon-box">
                                                <div className="position-absolute w-100" style={{bottom:"8%"}}>
                                                    <div className="text-center icon-box">

                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">shopping_cart</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">favorite</span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">visibility
                                                            </span></Link>
                                                        <Link to="/" className="text-dark"><span
                                                                className="material-symbols-outlined m-1 p-2">repeat_one
                                                            </span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 text-center">
                                            <Link to="/" className="fw-bold text text-decoration-none text-dark"
                                                style={{fontSize:" 14px"}}>Q. s
                                                product</Link>
                                            <p><b>$39.00</b></p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="py-5 container-fluid container-md">
                    <div className="text-center">
                        <div className="py-2">
                            <div>
                                <h2 className="fw-bold display-5 text-capitalize">Featured Collection</h2>
                                <p>There are many variations of passages</p>
                            </div>
                        </div>
                    </div>

                    <ProductCollection/>
                </div>
            </div>
        </div>
      </section>
  
    </div>
  )
}

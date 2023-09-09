import React from 'react'
import { Link } from 'react-router-dom';

export default function Shipping() {
    return (
        <div className='overflow-hidden'>
            <section>
                <div style={{ backgroundColor: " #f2f4f5" }}>
                    <div className="text-center py-5 fw-bold">
                        <h1 className="display-6 fw-bold " style={{ "fontFamily": "Outfit " }}>  Shipping policy </h1>
                        <p style={{ color: "#e66d6d " }}><Link to="index.html" className="text-dark text text-decoration-none">Home |  </Link>
                            Shipping policy </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="container py-5">
                        <div className="container py-5">
                            <div className="container mx-5">
                                <div className="py-5">
                                    <h1 className=" text-center display-10 fw-bold fw-700" style={{ "fontFamily": "Outfit " }}>Shipping policy</h1>
                                </div>

                                <div className="mb-5">
                                    <h3 className=" display-10 fw-bold" style={{ "fontFamily": "Outfit " }}>Shipping policy</h3>
                                    <p className="mt-3">
                                        <strong>
                                            <em>
                                                It's important to start by clarifying to customers that your order processing times are separate from the shipping times they see at checkout.
                                            </em>
                                        </strong>
                                    </p>
                                    <p className="mt-3">All orders are processed within X to X business days (excluding weekends and holidays) after receiving your order
                                        confirmation email. You will receive another notification when your order has shipped.
                                    </p>

                                    <p className="mt-4">
                                        <strong>
                                            <em>Include any other pertinent information towards the beginning, such as potential delays due to a high
                                                volume of orders or postal service problems that are outside of your control.</em>
                                        </strong>
                                    </p>

                                    <h3 className="mt-5">Domestic Shipping Rates and Estimates</h3>
                                    <p className="mt-3">
                                        <strong>
                                            <em>For calculated shipping rates: </em>
                                        </strong>
                                        Shipping charges for your order will be calculated and displayed at checkout.
                                    </p>

                                    <p>
                                        <strong>
                                            <em>For simple flat rate shipping:</em>
                                            We offer $X flat rate shipping to [list countries].
                                        </strong>
                                    </p>

                                    <p>
                                        <strong>
                                            <em>You can also emphasize any free shipping thresholds you offer (e.g. free shipping for orders over $75).
                                                For multiple shipping options, you can list carrier options, prices, and delivery times in a table.</em>
                                        </strong>
                                    </p>

                                    <table className="mt-4">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p><strong>Shipping option</strong></p>
                                                </td>
                                                <td>
                                                    <p><strong>Estimated delivery time</strong></p>
                                                </td>
                                                <td>
                                                    <p><strong>Price</strong></p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p>Option 1</p>
                                                </td>
                                                <td>
                                                    <p>X to X business days</p>
                                                </td>
                                                <td>
                                                    <p>$X</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p>Option 2</p>
                                                </td>
                                                <td>
                                                    <p>X to X business days</p>
                                                </td>
                                                <td>
                                                    <p>$X</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p>Option 3</p>
                                                </td>
                                                <td>
                                                    <p>X to X business days</p>
                                                </td>
                                                <td>
                                                    <p>$X</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <h4>
                                        <br />
                                    </h4>
                                    <h3 className="mt-4 fw-bold">Local delivery</h3>
                                    <p className="mt-3">
                                        <strong>
                                            <em>If you offer local delivery or in-store pickup to customers in your area, you can dedicate a section
                                                of your shipping policy page to explain the process or create a separate shipping page specifically for
                                                local customers. </em>
                                        </strong>
                                        <em>
                                            <br />
                                        </em>
                                    </p>
                                    <p className="mt-4">
                                        Free local delivery is available for orders over $X within [area of coverage]. For orders under $X, we charge $X for local delivery.
                                    </p>
                                    <p className="mt-4">
                                        Deliveries are made from [delivery hours] on [available days]. We will contact you via text message with the
                                        phone number you provided at <br /> checkout to notify you on the day of our arrival.
                                    </p>
                                    <p>
                                        <strong>
                                            <em>You can list out the ZIP/postal codes you service and/or consider embedding a map here so
                                                customers can easily see if they are within your lo- <br /> cal delivery range.</em>
                                        </strong>
                                    </p>
                                    <h3 className="fw-bold mt-5" style={{ "fontFamily": "Outfit " }}>In-store pickup</h3>
                                    <p className="mt-4">
                                        You can skip the shipping fees with free local pickup at [list the locations where in-store pickup is
                                        available]. After placing your order and selecting local pickup at checkout, your order will be prepared and
                                        ready for pick up within X to X business days. We will send you an email when your order is ready along with
                                        instructions.
                                    </p>
                                    <p className="mt-4">
                                        Our in-store pickup hours are [store hours] on [available days of the week]. Please have your order
                                        confirmation email with you when you come.
                                    </p>
                                    <h3 className="fw-bold mt-5" style={{ "fontFamily": "Outfit " }}>International Shipping</h3>
                                    <p>
                                        We offer international shipping to the following countries: [list of countries].
                                    </p>
                                    <p>
                                        <strong>
                                            <em>If relevant you can also include countries you don’t ship to: </em>
                                        </strong>
                                        At this time, we do not ship to [list of countries].
                                    </p>
                                    <p className="mt-4">
                                        <strong>
                                            <em>If you’re using calculated shipping rates:</em>
                                        </strong>
                                        Shipping charges for your order will be calculated and displayed at checkout.
                                    </p>
                                    <p className="mt-4">
                                        <strong>
                                            <em>If you offer multiple international shipping options, you can list them in a table as well. You
                                                can include broader delivery timelines (e.g. 8 to 20 days) for international shipping since
                                                expectations can vary greatly depending on the destination.</em>
                                        </strong>
                                    </p>
                                    <table className="mt-5">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p><strong>Shipping option</strong></p>
                                                </td>
                                                <td>
                                                    <p><strong>Estimated delivery time</strong></p>
                                                </td>
                                                <td>
                                                    <p><strong>Price</strong></p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p>Option 1</p>
                                                </td>
                                                <td>
                                                    <p>X to X business days</p>
                                                </td>
                                                <td>
                                                    <p>$X</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p>Option 2</p>
                                                </td>
                                                <td>
                                                    <p>X to X business days</p>
                                                </td>
                                                <td>
                                                    <p>$X</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p>Option 3</p>
                                                </td>
                                                <td>
                                                    <p>X to X business days</p>
                                                </td>
                                                <td>
                                                    <p>$X</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="mt-5">
                                        Your order may be subject to import duties and taxes (including VAT), which are incurred once a shipment
                                         reaches your destination country. [Your Company] is not responsible for these charges if they are applied 
                                         and are your responsibility as the customer.
                                    </p>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

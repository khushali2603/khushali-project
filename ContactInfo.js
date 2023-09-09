import React from 'react'

function ContactInfo() {
    return (
        <div>
            <div className="text-center py-5">
                <div className="py-5">
                    <h5 className="fs-3 fw-bold">For furthermore help, contact with our support team.
                    </h5>
                    <div className="text-strat">
                        <button className="btn d-inline text-light py-3 px-4 text-capitalize rounded-0 my-4"
                            style={{ backgroundColor: "#f8796c" }}>contact us</button>
                    </div>
                    <h5 className="fs-3 fw-bold"><i className="icofont-ui-call"></i>+0123-456-789</h5>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
import React from 'react'
import ProductHead from './ProductHead'

function LogOut() {
    return (
        <div>
            <ProductHead head="Account" data="Account" />

            <div className="text-center py-5">
                <h3 className='fw-bolder'>LogOut</h3>
                <p>Please login using account detail bellow.</p>
                <button className="btn col-lg-3 text-light py-3 px-5 text-capitalize rounded-0 mt-3"
                style={{ "background-color": "#f8796c" }}>Sign Out</button>
            </div>
        </div>
    )
}

export default LogOut
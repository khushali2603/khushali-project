import React from 'react'
import { Link } from 'react-router-dom'

function ProductHead({data,head}) {
    return (
        <div style={{ backgroundColor: " #f2f4f5" }}>
            <div className="text-center py-5 fw-bold">
                <h2 className="display-5 fw-bold">{head}
                </h2>
                <p style={{ color: "#e66d6d " }}><Link to="/" className="text-dark text text-decoration-none">Home | </Link>
                    {data}
                </p>
            </div>
        </div>
    )
}

export default ProductHead
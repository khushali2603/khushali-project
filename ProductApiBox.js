import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'

function ProductApiBox({ product }) {
    const { cart, setCart } = useContext(CartContext)

    const addtoCart = (event, products) => {
        event.preventDefault()

        const _cart = { ...cart }

        if (!(_cart.items)) {
            _cart.items = {}
        }
        if (_cart.items[products.id]) {
            _cart.items[products.id] += 1
        } else {
            _cart.items[products.id] = 1
        }
        if (!(_cart.totalItems)) {
            _cart.totalItems = 0
        }
        _cart.totalItems = _cart.totalItems + 1

        setCart(_cart)
    }
    return (
        <div className='col-lg-3 py-4'>
            <Link to={`/SingleProduct/${product.id}`} className={` text-decoration-none text-dark`}>
                <div className="px-2" key={product.id}>
                    <div className="card rounded-0 border-0">

                        <div className="position-relative">
                            <img src={product.image} className="card-img-top"
                                alt={product.name} style={{ height: "100%" }} />
                        </div>

                        <div className="p-4 text-center">
                            <Link to="/" className="fw-bold text text-dark  text-decoration-none"
                                style={{ fontSize: "14px" }}>{product.name}</Link>
                            <p><b>{product.price} ₹</b></p>
                            <div>
                                <button className="btn d-inline text-light py-3 px-4 text-capitalize rounded-0 mt-3"
                                    style={{ "background-color": "#f8796c" }} onClick={(e) => addtoCart(e, product)}> Add To Cart</button>
                            </div>
                        </div>


                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductApiBox
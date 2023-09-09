import React from 'react'
import { useContext, useState } from 'react'
import { useEffect } from 'react'
import { CartContext } from '../Context/CartContext'
import axios from 'axios'

function Cart() {
    let total = 0
    const [product, setProduct] = useState([])
    const { cart, setCart } = useContext(CartContext)

    useEffect(() => {

        if (!cart.items) {
            return
        }

        const ItemId = Object.keys(cart.items)
        Promise.all(
            ItemId.map(item =>
                axios.get(`https://api.pujakaitem.com/api/products/${item}`)
            )
        )
            .then((res) => {
                const productData = res.map(response => response.data)
                setProduct(productData)
            })
            .catch((err) => console.log(err))
    }, [cart.items])

    const getQty = (productId) => {
        return cart.items[productId]
    }
    
    const DecrementHandler = (productId) => {
        const data = cart.items[productId]
        if (data===1) {
            return
        }
        const _cart = { ...cart }
        _cart.items[productId] = data - 1
        _cart.totalItems -= 1
        setCart(_cart)
    }
    const IncrementHandler = (productId) => {
        const data = cart.items[productId]
        const _cart = { ...cart }
        _cart.items[productId] = data + 1
        _cart.totalItems += 1
        setCart(_cart)
    }

    const getPrice = (productId,price) => {
        const sum = price * getQty(productId)
        total += sum
        return sum
    }
   
    const deleteHandler = (productId) => {
        const _cart = {...cart}
        delete _cart.items[productId]
        setCart(_cart)
    }

    return (
        product.length ? 
        <div>
            <div className="container py-5">
                <div className="py-5">
                    <h3>Cart Products</h3>
                </div>
                {product.map((data) => {
                    return (
                        <li key={data.id} className='py-5 list-unstyled'>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-4 row">
                                    <div className="col-lg-6">
                                        {data.image && <img src={data.image[0].url} alt={data.name} width="100%" />}
                                    </div>
                                    <div className="col-lg-6 align-self-center">
                                        <p>{data.name}</p>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <button className='btn btn-outline-secondary' onClick={() => { DecrementHandler(data.id) }}>-</button>
                                    <span className='mx-2'>{getQty(data.id)}</span>
                                    <button className='btn btn-outline-secondary' onClick={() => { IncrementHandler(data.id) }}>+</button>
                                </div>
                                <div className="col-lg-3">
                                    <h5>{getPrice(data.id,data.price)}</h5>
                                </div>
                                {/* <div className="col-lg-3">
                                    <button className="btn btn-outline-danger">DELETE</button>
                                </div> */}
                                <div className="col-lg-3">
                                    <button className="btn btn-outline-danger" onClick={()=>{deleteHandler(data.id)}}>DELETE</button>
                                </div>
                            </div>
                        </li>
                    )
                })}
                <hr />
                <div className='container pb-5'>
                    <div className='text-end'>
                        <p>Total Amount : {total}</p>
                        <button className='btn btn-outline-success'>Place Order</button>
                    </div>
                </div>

            </div>

        </div>:
        <div className="p-5">
            <img src="image/Cart.webp" alt="cart" width="50%" className='d-block m-auto' />
        </div>
    )
}

export default Cart
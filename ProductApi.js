import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ProductApiBox from './ProductApiBox'
import ProductHead from './ProductHead'

const url = "https://api.pujakaitem.com/api/products"

function ProductApi() {
    const [product, setProduct] = useState([])

    const getProductHandler = async (url) => {
        try {
            const res = await axios.get(url)
            setProduct(res.data)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProductHandler(url)
    }, [])
    console.log(product);

    return (

        <div>
            <div>
            <ProductHead head="Product" data="X. Complementary Product"/>
            </div>
            <div className='py-5'>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            {
                                product.map((product) => {
                                    return (<ProductApiBox key={product.id} product={product} />)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default ProductApi
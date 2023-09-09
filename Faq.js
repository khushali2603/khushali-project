import React from 'react'
import FaqList from './FaqList'
import ProductHead from './ProductHead'
export default function Faq() {
    return (
        <div>
            <section>
                <ProductHead data="FAQ" head="FAQ" />
                <div className="py-5">
                    <FaqList />
                </div>

            </section>
        </div>
    )
}

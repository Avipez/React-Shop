import React from 'react'
import ProductItem from "../components/ProductItem"
import "../styles/ProductList.scss"

const ProductList = () => {
    return (
        <section class="main_container">
        <div class="cards_container">
            <ProductItem />
        </div>
        </section>
    );
}

export default ProductList;
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import ProductItem from "../components/ProductItem"
import "../styles/ProductList.scss"

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(async() => {
        const response = await axios(API);
        setProducts(response.data);
    }, [])


    return (
        <section class="main_container">
        <div class="products_list">
            {products.map(products =>(
                <ProductItem />
            ) )}
        </div>
        </section>
    );
}

export default ProductList;
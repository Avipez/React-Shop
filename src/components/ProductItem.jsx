import React, { useState } from "react";
import "@styles/ProductItem.scss"

import addToCart from  "@icons/bt_add_to_cart.svg";

const ProductItem = () => {
    const [cart, setCart] = useState([])

    const handleClick = () => {
      setCart([])
    }

  return (
    <div className="product_item">
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt
        className="product_img"
      />
      <div className="product_info">
        <div>
          <p>$2500</p>
          <p>Bike</p>
        </div>
        <figure onClick ={handleClick}>
          <img src={addToCart} alt />
        </figure>
        {cart}
      </div>
    </div>
  );
};

export default ProductItem;

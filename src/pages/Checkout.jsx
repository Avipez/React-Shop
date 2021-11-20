import React from "react";
import OrderItem from "../components/OrderItem"
import "../styles/Checkout.scss"

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout_container">
        <h1 className="checkout_title">My order</h1>
        <div className="checkout_content">
          <div className="order">
            <div>
              <p>
                <span>10.03.2021</span>
                <span>6 articles</span>
              </p>
            </div>
            <p>$560.00</p>
          </div>
          <div classname="checkout_items" >
              <OrderItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

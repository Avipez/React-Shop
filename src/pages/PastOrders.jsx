import React from "react";
import Order from '../components/Order';
import "../styles/PastOrders.scss"

const PastOrders = () => {
  return (
    <div className="past_orders">
      <div className="past_orders-container">
        <h1 className="title_order">My order</h1>
        <div className="past_orders_content">
          <Order />
        </div>
      </div>
    </div>
  );
};

export default PastOrders;
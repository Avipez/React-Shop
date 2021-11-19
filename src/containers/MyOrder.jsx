import React from "react";
import OrderItem from "../components/OrderItem";
import "../styles/MyOrder.scss";

const MyOrders = () => {
  return (
    <aside className="my_order">
      <div className="my_order-container">
        <img src="../assets/icons/flechita.svg" alt="arrow" />
        <h1 className="my_order-title">My order</h1>
      </div>
      <div className="my_order-content">
        <OrderItem />
      </div>
      <button className="primary_button add_to_cart_button"> Checkout </button>
    </aside>
  );
};

export default MyOrders;

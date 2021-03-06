import React, { useContext } from "react";
import OrderItem from "../components/OrderItem";
import AppContext from "../context/AppContext";
import "../styles/MyOrder.scss";
import flechita from "../assets/icons/flechita.svg";

const MyOrder = () => {
  const { state } = useContext(AppContext)

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) =>
      accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className="my_order">
      <div className="my_order-container">
        <img src={flechita} alt="arrow" />
        <h1 className="my_order-title">My order</h1>
      </div>
      <div className="my_order-content">
        {state.cart.map( product => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary_button add_to_cart_button">
          {" "}
          Checkout{" "}
        </button>
      </div>
    </aside>
  );
};

export default MyOrder;

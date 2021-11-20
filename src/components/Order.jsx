import React from "react";
import "../styles/Order.scss"

import arrow from "@icons/flechita.svg";

const Order = () => {
  return (
    <div className="order">
      <p>
        <span>10.03.2021</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <img src={arrow} alt="arrow" />
    </div>
  );
};

export default Order;

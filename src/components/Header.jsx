import React, { useContext, useState } from "react";
import "@styles/Header.scss";
import AppContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder"
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import Menu from "@components/Menu";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { state } = useContext(AppContext)
  const [toggleOrders, setToggleOrders] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <img src={menu} alt="logo" className="menu" />
      <div className="navbar_left">
        <img src={logo} alt="logo" className="nav_logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnites</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar_right">
        <ul>
          <li className="navbar_email" onClick={handleToggle}>
            avipez@gmail.com
          </li>
          <li className="navbar_shopping_cart" onClick={() => setToggleOrders(!toggleOrders)}>
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
          </li>
        </ul>
      </div>
      {toggle ? <Menu /> : null}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;

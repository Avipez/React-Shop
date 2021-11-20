import React, { useState } from "react";
import "@styles/Header.scss";

import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import Menu from "@components/Menu"

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
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
          <li className="navbar_shopping_cart">
            <img src={shoppingCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
      {toggle ? <Menu /> : null}
    </nav>
  );
};

export default Header;

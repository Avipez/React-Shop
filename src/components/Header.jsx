import React from "react";
import "@styles/Header.scss"

import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";

const Header = () => {
  return (
    <nav>
      <img className="menu" src={menu} alt="menu" />
      <div className="navbar_left">
        <img
          src={logo}
          alt="logo"
          className="logo"
        />
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
          <li className="navbar_email">avipez@gmail.com</li>
          <li className="navbar_shopping_cart">
            <img
              src={shoppingCart}
              alt="shopping cart"
            />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import "../styles/Header.scss"

const Header = () => {
  return (
    <nav>
      <img className="menu" src="../assets/icons/icon_menu.svg" alt="menu" />
      <div className="navbar_left">
        <img
          src="../assets/logos/logo_yard_sale.svg"
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
              src="../assets/icons/icon_shopping_cart.svg"
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

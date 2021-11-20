import React from "react";
import "@styles/Menu.scss"

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <a href="/" className="title">
            My orders
          </a>
        </li>
        <li>
          <a href="/" className="account">
            My account
          </a>
        </li>
        <li>
          <a href="/" className="sign_out">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

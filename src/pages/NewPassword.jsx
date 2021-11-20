import React from "react";
import "../styles/NewPassword.scss"

import mainLogo from "../assets/logos/logo_yard_sale.svg";

const NewPassword = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img
          src={mainLogo}
          alt="logo"
          className="logo"
        />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>
        <form action className="form">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="new-password"
            className="input input-password"
            placeholder="********"
          />
          <label htmlFor="new_password" className="label">
            Password
          </label>
          <input
            type="password"
            id="new_password"
            className="input input-password"
            placeholder="********"
          />
          <input
            type="submit"
            defaultValue="Confirm"
            className="primary_button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;

import React from "react";
import "../styles/MyAccount.scss";

const MyAccount = () => {
  return (
    <div className="my_account">
      <div className="my_account-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            <p className="value">David Lopez</p>
            <label htmlFor="email" className="label">
              Email
            </label>
            <p className="value">avipez@gmail.com</p>
            <label htmlFor="password" className="label">
              Password
            </label>
            <p className="value">********</p>
          </div>
          <input
            type="submit"
            defaultValue="Edit"
            className="secondary_button edit_button"
          />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;

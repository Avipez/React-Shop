import React from "react";
import "../styles/SendEmail.scss"

import mainLogo from "@logos/logo_yard_sale.svg";
import email from "@icons/email.svg"

const SendEmail = () => {
  return (
    <div className="send_email">
      <div className="send_email-container">
        <img
          src={mainLogo}
          alt="logo"
          className="logo"
        />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email_image">
          <img src={email} alt="mail" />
        </div>
        <button className="primary_button send_email-button">Login</button>
        <p className="resend">
          <span>Didn´t receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;

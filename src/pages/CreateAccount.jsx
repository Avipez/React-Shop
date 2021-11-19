import React from "react";
import "../styles/CreateAccount.scss"

const CreateAccount = () => {
  return (
    <div classname="create_account">
      <div classname="create_account-container">
        <h1 classname="title">My account</h1>
        <form action="/" classname="form">
          <div>
            <label htmlfor="name" classname="label">
              Name
            </label>
            <input
              type="password"
              id="new-password"
              classname="input input_name"
              placeholder="Pez"
            />
            <label htmlfor="email" classname="label">
              Email
            </label>
            <input
              type="password"
              id="new-password"
              classname="input input_name"
              placeholder="avipez@gmail.com"
            />
            <label htmlfor="password" classname="label">
              Password
            </label>
            <input
              type="password"
              id="new_password"
              classname="input input-password"
              placeholder="********"
            />
          </div>
          <input
            type="submit"
            defaultvalue="Create"
            classname="primary_button create_account-button"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;

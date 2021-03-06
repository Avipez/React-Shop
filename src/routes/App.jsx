import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import PasswordRecovery from "../pages/PasswordRecovery";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SendEmail from "../pages/SendEmail";
import NewPassword from "../pages/NewPassword";
import MyAccount from "../pages/MyAccount";
import CreateAccount from "../pages/CreateAccount";
import Checkout from "../pages/Checkout";
import PastOrders from "../pages/PastOrders";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import "../styles/global.css";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter /* basename={"/react-shop"} */>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/login" element={<Login />} />
              <Route path="/password-recovery" element={<PasswordRecovery />} />
              <Route path="/send-email" element={<SendEmail />} />
              <Route path="/new-password" element={<NewPassword />} />
              <Route path="/account" element={<MyAccount />} />
              <Route path="/signup" element={<CreateAccount />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/orders" element={<PastOrders />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;

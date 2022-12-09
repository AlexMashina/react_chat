import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import { LoginForm, RegisterForm } from "../../modules";
import "./Auth.scss";

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__wrapper">
        <Routes>
          <Route index path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
        <Outlet />
      </div>
    </section>
  );
};

export default Auth;

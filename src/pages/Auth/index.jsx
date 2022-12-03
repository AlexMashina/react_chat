import React from "react";
import { Routes, Route } from "react-router-dom";

import { LoginForm, RegisterForm } from "../../modules";
import "./Auth.scss";

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__wrapper">
        <Routes>
          <Route path={["/", "/login"]} element={<LoginForm />} />
          <Route exact path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
    </section>
  );
};

export default Auth;

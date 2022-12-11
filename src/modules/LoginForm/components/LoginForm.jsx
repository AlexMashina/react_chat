import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";

import { Button, Block } from "../../../components";

const LoginForm = (props) => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
  props;

    return (
      <div>
        <div className="auth__top">
          <h2 className="auth__top-title">Войти в аккаунт</h2>
          <p className="auth__top-desc">Пожайлуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onSubmit={handleSubmit}
          >
            <Form.Item
              name="username"
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              validateStatus={
                !touched.password ? "" : errors.password ? "error" : "success"
              }
              hasFeedback
              help={!touched.password ? "" : errors.password}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                size="large"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item 
              className="button_wrp"               
              validateStatus={!touched.email ? "" : errors.email ? "error" : "success"}
              hasFeedback
              help={!touched.email ? "" : errors.email}
            >
              <Button type="primary" htmlType="submit" className="button">
                Войти в аккаунт
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/register">
              Зарегистрироваться
            </Link>
          </Form>
        </Block>
      </div>
    );
  }


export default LoginForm;

import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";

import { Button, Block } from "../../../components";

class LoginForm extends React.Component {
  onFinish = (values) => {
    console.log("Ввведенные значения формы ", values);
  };

  render() {
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
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                size="large"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item className="button_wrp">
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
}

export default LoginForm;

import React from "react";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";

import { Button, Block } from "../../../components";

const RegisterForm = (props, { success = true }) => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    props;

  return (
    <div>
      <div className="auth__top">
        <h2 className="auth__top-title">Регистрация</h2>
        <p className="auth__top-desc">
          Для входа в чат, вам нужно зарегистрироваться
        </p>
      </div>
      <Block>
        {success ? (
          <Form
            onSubmit={handleSubmit}
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="email"
              validateStatus={
                !touched.email ? "" : errors.email ? "error" : "success"
              }
              hasFeedback
              help={!touched.email ? "" : errors.email}
            >
              <Input
                id="email"
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                type="text"
                size="large"
                placeholder="Ваше имя"
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
                id="password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                size="large"
                placeholder="Пароль"
                onChange={handleChange}
                onBlur={handleBlur}
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
                placeholder="Повторите пароль"
              />
            </Form.Item>
            <Form.Item className="button_wrp">
              <Button
                onClick={handleSubmit}
                type="primary"
                htmlType="submit"
                className="button"
              >
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/login">
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <InfoCircleTwoTone style={{ fontSize: "50px" }} />
            </div>
            <h2 className={"auth__success-title"}>Подтвердите свой аккаунт</h2>
            <p className={"auth__success-info"}>
              На Вашу почту отправлено письмо с сылкой на подтверждение
              аккаунта.
            </p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;

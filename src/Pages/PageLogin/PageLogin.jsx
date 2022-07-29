import React from "react";

import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import "./PageLoginStyles.css";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function PageLogin() {
  let navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onFinish = (values) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("Success:", values);
      localStorage.setItem("email", values.email);
      localStorage.setItem("password", values.password);
      navigate("/", { replace: true });
      setIsLoading(false);
    }, 2000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <p className="autorizationP">Авторизация</p>

          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <p className="emailContent">Email</p>
            <Form.Item
              value={email}
              name="email"
              rules={[
                {
                  required: true,
                  message: "Введите валидный email",
                },
                { type: "email", message: "Введите валидный email" },
                {
                  min: 6,
                  message: "Email должен содержать минимум 6 символов",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="input email" disabled={isLoading} />
            </Form.Item>
            <p className="emailContent">Password</p>
            <Form.Item
              value={password}
              name="password"
              rules={[
                {
                  required: true,
                  message: "Введите валидный password",
                },
                {
                  min: 8,
                  message:
                    "пароль должен содержать минимум 8 символов и заглавную букву",
                },
                { whitespace: true },
                {
                  pattern: new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/),
                  message: "Введите валидный пароль",
                },
              ]}
            >
              <Input.Password
                disabled={isLoading}
                placeholder="input password "
              />
            </Form.Item>
            {!isLoading && (
              <div className="buttonStyle">
                <Button type="primary" htmlType="submit">
                  Авторизация
                </Button>
              </div>
            )}
          </Form>
          {isLoading && <Spin indicator={antIcon} />}
        </div>
      </div>
    </>
  );
}

export default PageLogin;

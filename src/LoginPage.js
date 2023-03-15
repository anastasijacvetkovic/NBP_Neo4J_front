import "./ant-design.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Space, Checkbox, Form, Input } from "antd";
import axios from "axios";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Login = () => {
  const loginUser = (e) => {
    var u = e.target.username.value;
    console.log(u);
    var p = e.target.password.value;
    console.log(p);
    axios
      .get("https://localhost:5001/api/User/LogIn_User/" + u + "/" + p)
      .then((res) => {
        console.log(res.data);
        if (res.OK) window.location = "/favourites";
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div
      className="login-wrap"
      style={{
        display: "flex",
        margin: "10% auto",
        justifyContent: "center",
        width: "200px",
        height: "250px",
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={(e) => loginUser(e)}
      >
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            id="un"
            name="username"
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            id="ps"
            name="password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="/register">register</a>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;

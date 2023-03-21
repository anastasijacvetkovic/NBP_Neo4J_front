import axios from "axios";
import { useState, useEffect } from "react";
import {
  Divider,
  Space,
  Typography,
  Dropdown,
  Input,
  Button,
  Form,
  InputNumber,
  Menu,
  message,
} from "antd";
const { Title } = Typography;

const IngredientAdmin = () => {
  useEffect(() => {
    getProducts();
  }, []);
  const onFinish = (values) => {};
  const onFinishAI = (values) => {
    console.log("Success:", values);
    var ingn = values.name;
    var iu = values.usage;
    var ii = values.irritancy;
    const ing = {
      name: ingn,
      usage: iu,
      irritancy: ii,
    };
    axios
      .post("https://localhost:5001/api/Ingredient/Create_Ingredient/", ing)
      .then((res) => {
        message.success("successfully created an ingredient!");
      })
      .catch((err) => console.log(err.message));
  };

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];

  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState();
  const getProducts = () => {
    axios
      .get("https://localhost:5001/api/Product/Get_Products/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <Title level={3}>Ingredient</Title>
      <Divider orientation="left">Create ingredient</Divider>
      <Form
        name="basic"
        style={{
          maxWidth: 700,
        }}
        onFinish={onFinishAI}
      >
        <Form.Item
          label="Ingredient name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input ingredient's name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ingredient usage"
          name="usage"
          rules={[
            {
              required: true,
              message: "Please input ingredient's usage!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Ingredient irritancy"
          name="irritancy"
          rules={[
            {
              required: true,
              message: "Please input ingredient's irritancy!",
            },
          ]}
        >
          <InputNumber min={1} max={10} defaultValue={3} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Create ingredient
          </Button>
        </Form.Item>
      </Form>
      <Divider orientation="left">Update ingredient</Divider>
      <Space size="large" align="start">
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>Pick ingredient you want to update</Space>
          </a>
        </Dropdown>
        <Form
          name="basic"
          style={{
            maxWidth: 700,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Ingredient name"
            name="UpdateIngredientName"
            rules={[
              {
                required: true,
                message: "Please input ingredient's name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Ingredient usage"
            name="UpdateIngredientUsage"
            rules={[
              {
                required: true,
                message: "Please input ingredient's usage!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Ingredient irritancy"
            name="updateIngredientIrritancy"
            rules={[
              {
                required: true,
                message: "Please input ingredient's irritancy!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Update ingredient
            </Button>
          </Form.Item>
        </Form>
      </Space>
      <Divider orientation="left">Delete ingredient</Divider>
      <div
        style={{
          display: "flex",
          justifyContent: "inline-block",
          paddingLeft: "50px",
        }}
      >
        <Space size="large">
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>Pick ingredient you want to delete</Space>
            </a>
          </Dropdown>
          <Button type="primary" htmlType="onCLick">
            Delete ingredient
          </Button>
        </Space>
      </div>
    </>
  );
};
export default IngredientAdmin;

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

const BrandAdmin = () => {
  useEffect(() => {
    getProducts();
  }, []);
  const onFinish = (values) => {};
  const onFinishAB = (values) => {
    var bn = values.name;
    var bf = values.founder;
    var bs = values.summary;
    const brand = {
      name: bn,
      founder: bf,
      summary: bs,
    };
    axios
      .post("https://localhost:5001/api/Brand/Create_Brand/", brand)
      .then((res) => {
        message.success("successfully created a brand!");
      })
      .catch((err) => console.log(err.message));
  };
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState();

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
      <Title level={3}>Brand</Title>
      <Divider orientation="left">Create brand</Divider>
      <Form
        name="basic"
        style={{
          maxWidth: 700,
        }}
        onFinish={onFinishAB}
      >
        <Form.Item
          label="Brand name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input brand's name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Brand founder"
          name="founder"
          rules={[
            {
              required: true,
              message: "Please input brand's founder!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Brand summary"
          name="summary"
          rules={[
            {
              required: true,
              message: "Please input brand's summary!",
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
            Create brand
          </Button>
        </Form.Item>
      </Form>
      <Divider orientation="left">Update brand</Divider>
      <Space size="large" align="start">
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>Pick brand you want to update</Space>
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
            label="Brand name"
            name="UpdateBrandName"
            rules={[
              {
                required: true,
                message: "Please input brand's name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Brand founder"
            name="UpdateBrandFounder"
            rules={[
              {
                required: true,
                message: "Please input brand's founder!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Brand summary"
            name="updateBrandSummary"
            rules={[
              {
                required: true,
                message: "Please input brand's irritancy!",
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
              Update brand
            </Button>
          </Form.Item>
        </Form>
      </Space>
      <Divider orientation="left">Delete brand</Divider>
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
              <Space>Pick brand you want to delete</Space>
            </a>
          </Dropdown>
          <Button type="primary" htmlType="onClick">
            Delete brand
          </Button>
        </Space>
      </div>
    </>
  );
};
export default BrandAdmin;

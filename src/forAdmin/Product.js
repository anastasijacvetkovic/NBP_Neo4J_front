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

const ProductAdmin = () => {
  useEffect(() => {
    getProducts();
  }, []);

  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState(null);
  const onFinish = (values) => {};
  const getProducts = () => {
    axios
      .get("https://localhost:5001/api/Product/Get_Products/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err.message));
  };
  const getProduct = (productName) => {
    axios
      .get("https://localhost:5001/api/Product/Get_Product/" + productName)
      .then((res) => {
        setProductData(res.data);
      })
      .catch((err) => console.log(err.message));
  };
  const onFinishAP = (values) => {
    var pn = values.productName;
    var pu = values.use;
    var ps = values.summary;
    const prod = {
      productName: pn,
      use: pu,
      summary: ps,
    };
    axios
      .post("https://localhost:5001/api/Product/Create_Product/", prod)
      .then((res) => {
        message.success("successfully created a product!");
      })
      .catch((err) => console.log(err.message));
  };
  const SelectProduct = (productName) => {
    message.info("you selected product named " + productName + " for update");
    getProduct(productName);
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

  return (
    <>
      <Title level={3}>Product</Title>
      <Divider orientation="left">Add product</Divider>
      <Form
        name="basic"
        style={{
          maxWidth: 700,
        }}
        onFinish={onFinishAP}
      >
        <Form.Item
          label="Product name"
          name="productName"
          rules={[
            {
              required: true,
              message: "Please input product's name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product use"
          name="use"
          rules={[
            {
              required: true,
              message: "Please input product's use!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Product summary"
          name="summary"
          rules={[
            {
              required: true,
              message: "Please input product's summary!",
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
            Create product
          </Button>
        </Form.Item>
      </Form>
      <Divider orientation="left">Update product</Divider>
      <Space size="large" align="start">
        <Dropdown
          trigger={["click"]}
          menu={{
            items: products.map((product) => ({
              key: product.id,
              value: product.productName,
              label: product.productName,
              onClick: () => SelectProduct(product.productName),
            })),
            selectable: true,
          }}
        >
          <a
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Space>Pick a product you want to update</Space>
          </a>
        </Dropdown>
        <Form
          form={form}
          name="basic"
          style={{
            maxWidth: 700,
          }}
          onFinish={onFinish}
        >
          <Form.Item label="Product name" name="productName">
            <Input value={productData?.productName} />
          </Form.Item>

          <Form.Item label="Product use" name="use">
            <Input value={productData?.use} />
          </Form.Item>
          <Form.Item label="Product summary" name="summary">
            <Input value={productData?.summary} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Update product
            </Button>
          </Form.Item>
        </Form>
      </Space>
      <Divider orientation="left">Delete product</Divider>
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
              <Space>Pick product you want to delete</Space>
            </a>
          </Dropdown>
          <Button type="primary" htmlType="onClick">
            Delete product
          </Button>
        </Space>
      </div>
    </>
  );
};
export default ProductAdmin;

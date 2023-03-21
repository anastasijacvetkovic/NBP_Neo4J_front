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

const RelationshipsAdmin = () => {
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

  useEffect(() => {
    getProducts();
  }, []);
  const onFinish = (values) => {};
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
      <Title level={3}>Relationships</Title>
      <div className="rels">
        <Divider orientation="left">
          Assign or delete relationship between ingredient and product
        </Divider>
        <div
          style={{
            display: "flex",
            justifyContent: "inline-block",
            paddingLeft: "50px",
          }}
        >
          <Space size="large">
            <Dropdown
              menu={{
                items: products.map((product) => ({
                  key: product.id,
                  value: product.productName,
                  label: product.productName,
                })),
                selectable: true,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>Product</Space>
              </a>
            </Dropdown>

            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>Ingredient</Space>
              </a>
            </Dropdown>
            <Button type="primary" htmlType="onCLick">
              Delete relationship
            </Button>
          </Space>
        </div>
        <Divider orientation="left">
          Assign or delete relationship between brand and product
        </Divider>
        <div
          style={{
            display: "flex",
            justifyContent: "inline-block",
            paddingLeft: "50px",
          }}
        >
          <Space size="large">
            <Dropdown
              menu={{
                items: products.map((product) => ({
                  key: product.id,
                  value: product.productName,
                  label: product.productName,
                })),
                selectable: true,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>Product</Space>
              </a>
            </Dropdown>

            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>Brand</Space>
              </a>
            </Dropdown>
            <Button type="primary" htmlType="onCLick">
              Delete relationship
            </Button>
          </Space>
        </div>

        <Divider orientation="left">
          Assign or delete relationship between skin type and product
        </Divider>
        <div
          style={{
            display: "flex",
            justifyContent: "inline-block",
            paddingLeft: "50px",
          }}
        >
          <Space size="large">
            <Dropdown
              menu={{
                items: products.map((product) => ({
                  key: product.id,
                  value: product.productName,
                  label: product.productName,
                })),
                selectable: true,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>Product</Space>
              </a>
            </Dropdown>

            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>Skin type</Space>
              </a>
            </Dropdown>
            <Button type="primary" htmlType="onCLick">
              Delete relationship
            </Button>
          </Space>
        </div>
        <Divider orientation="left">
          Assign or delete relationship between product type and product
        </Divider>
        <div
          style={{
            display: "flex",
            justifyContent: "inline-block",
            paddingLeft: "50px",
          }}
        >
          <Space size="large">
            <Dropdown
              menu={{
                items: products.map((product) => ({
                  key: product.id,
                  value: product.productName,
                  label: product.productName,
                })),
                selectable: true,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>Product</Space>
              </a>
            </Dropdown>

            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>Product type</Space>
              </a>
            </Dropdown>
            <Button type="primary" htmlType="onCLick">
              Delete relationship
            </Button>
          </Space>
        </div>
      </div>
    </>
  );
};
export default RelationshipsAdmin;

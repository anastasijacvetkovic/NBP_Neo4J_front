import axios from "axios";
import {
  Divider,
  Space,
  Typography,
  Dropdown,
  Input,
  Button,
  Form,
} from "antd";
const { Title } = Typography;

const Admin = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
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
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Product name"
          name="ProductName"
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
          name="ProductUse"
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
          name="ProductSummary"
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
          <Dropdown menu={{ items }}>
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
          <Dropdown menu={{ items }}>
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
          <Dropdown menu={{ items }}>
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
          <Dropdown menu={{ items }}>
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
      <Title level={3}>Ingredient</Title>
      <Divider orientation="left">Create ingredient</Divider>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Ingredient name"
          name="IngredientName"
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
          name="IngredientUsage"
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
          name="IngredientIrritancy"
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
            Create ingredient
          </Button>
        </Form.Item>
      </Form>
      <Divider orientation="left">Update ingredient</Divider>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>Pick ingredient you want to update</Space>
        </a>
      </Dropdown>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
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
      <Title level={3}>Brand</Title>
      <Divider orientation="left">Create brand</Divider>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Brand name"
          name="BrandName"
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
          name="BrandFounder"
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
          name="BrandSummary"
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
            Create brand
          </Button>
        </Form.Item>
      </Form>
      <Divider orientation="left">Update brand</Divider>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>Pick brand you want to update</Space>
        </a>
      </Dropdown>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
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
          <Button type="primary" htmlType="onCLick">
            Delete brand
          </Button>
        </Space>
      </div>
    </>
  );
};
export default Admin;

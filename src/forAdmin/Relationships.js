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
  useEffect(() => {
    getProducts();
    getIngredients();
    getBrands();
    getSkinTypes();
    getProductTypes();
  }, []);
  const onFinish = (values) => {};
  const [products, setProducts] = useState([]);
  const [ing, setIng] = useState([]);
  const [brands, setBrands] = useState([]);
  const [st, setSkinTypes] = useState([]);
  const [pt, setProductTypes] = useState([]);
  const [productData, setProductData] = useState();
  const getProducts = () => {
    axios
      .get("https://localhost:5001/api/Product/Get_Products/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err.message));
  };
  const getIngredients = () => {
    axios
      .get("https://localhost:5001/api/Ingredient/Get_Ingredients")
      .then((res) => {
        setIng(res.data);
      })
      .catch((err) => console.log(err.message));
  };
  const getBrands = () => {
    axios
      .get("https://localhost:5001/api/Brand/Get_Brands")
      .then((res) => {
        setBrands(res.data);
      })
      .catch((err) => console.log(err.message));
  };
  const getSkinTypes = () => {
    axios
      .get("https://localhost:5001/api/SkinType/Get_SkinType")
      .then((res) => {
        setSkinTypes(res.data);
      })
      .catch((err) => console.log(err.message));
  };
  const getProductTypes = () => {
    axios
      .get("https://localhost:5001/api/ProductType/Get_ProductType")
      .then((res) => {
        setProductTypes(res.data);
      })
      .catch((err) => console.log(err.message));
  };
  const onFinishAssPI = (e) => {
    console.log(e);
    var pr = e.productName;
    var ing = e.ingName;
    var pre = e.prec;
    console.log(pr, ing, pre);
    axios
      .post(
        "https://localhost:5001/api/Relationships/Assign_Contains/" +
          ing +
          "/" +
          pr +
          "/" +
          pre
      )
      .then((res) => {
        console.log("pogle u neo4j");
      })
      .catch((err) => console.log(err.message));
  };
  const deleteAssPI = (e) => {
    var pr = e.productName;
    var ing = e.ingName;
    console.log(pr, ing);

    axios
      .delete(
        "https://localhost:5001/api/Relationships/Delete_Contains/" +
          ing +
          "/" +
          pr
      )
      .then((res) => {
        console.log("pogle u neo4j");
      })
      .catch((err) => console.log(err.message));
  };

  const onFinishAssPB = (e) => {
    var pr = e.productName;
    var br = e.brName;
    axios
      .post(
        "https://localhost:5001/api/Relationships/Assign_SoldBy/" +
          pr +
          "/" +
          br
      )
      .then((res) => {
        console.log("pogle u neo4j");
      })
      .catch((err) => console.log(err.message));
  };
  const deleteAssPB = (e) => {
    var pr = e.productName;
    var br = e.brName;

    axios
      .delete(
        "https://localhost:5001/api/Relationships/Delete_SoldBy/" +
          pr +
          "/" +
          br
      )
      .then((res) => {
        console.log("pogle u neo4j");
      })
      .catch((err) => console.log(err.message));
  };
  const onFinishAssPST = (e) => {
    var pr = e.productName;
    var st = e.stName;
    axios
      .post(
        "https://localhost:5001/api/Relationships/Assign_IntendedFor/" +
          pr +
          "/" +
          st
      )
      .then((res) => {
        console.log("pogle u neo4j");
      })
      .catch((err) => console.log(err.message));
  };
  const deleteAssPST = (e) => {
    var pr = e.productName;
    var st = e.stName;

    axios
      .delete(
        "https://localhost:5001/api/Relationships/Delete_IntendedFor/" +
          pr +
          "/" +
          st
      )
      .then((res) => {
        console.log("pogle u neo4j");
      })
      .catch((err) => console.log(err.message));
  };
   const onFinishAssPPT = (e) => {
     var pr = e.productName;
     var br = e.brName;
     axios
       .post(
         "https://localhost:5001/api/Relationships/Assign_UsedAs/" +
           pr +
           "/" +
           br
       )
       .then((res) => {
         console.log("pogle u neo4j");
       })
       .catch((err) => console.log(err.message));
   };
   const deleteAssPPT = (e) => {
     var pr = e.productName;
     var br = e.brName;

     axios
       .delete(
         "https://localhost:5001/api/Relationships/Delete_UsedAs/" +
           pr +
           "/" +
           br
       )
       .then((res) => {
         console.log("pogle u neo4j");
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
          <Space size="large" align="start">
            <Form
              name="basic"
              style={{
                maxWidth: 700,
              }}
              onFinish={onFinishAssPI}
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
                label="Ingredient name"
                name="ingName"
                rules={[
                  {
                    required: true,
                    message: "Please input ingredient's name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Percentage" name="prec">
                <InputNumber min={1} max={10} defaultValue={3} />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Assign relationship
                </Button>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              ></Form.Item>
            </Form>
            <Form
              name="basic"
              style={{
                maxWidth: 700,
              }}
              onFinish={deleteAssPI}
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
                label="Ingredient name"
                name="ingName"
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
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="subimt">
                  Delete relationship
                </Button>
              </Form.Item>
            </Form>
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
          <Space size="large" lign="start">
            <Form
              name="basic"
              style={{
                maxWidth: 700,
              }}
              onFinish={onFinishAssPB}
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
                label="Brand name"
                name="brName"
                rules={[
                  {
                    required: true,
                    message: "Please input brands's name!",
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
                  Assign relationship
                </Button>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              ></Form.Item>
            </Form>

            <Form
              name="basic"
              style={{
                maxWidth: 700,
              }}
              onFinish={deleteAssPB}
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
                label="Brand name"
                name="brName"
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
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="subimt">
                  Delete relationship
                </Button>
              </Form.Item>
            </Form>
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
          <Space size="large" lign="start">
            <Form
              name="basic"
              style={{
                maxWidth: 700,
              }}
              onFinish={onFinishAssPST}
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
                label="Skin type"
                name="stName"
                rules={[
                  {
                    required: true,
                    message: "Please input skin type's name!",
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
                  Assign relationship
                </Button>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              ></Form.Item>
            </Form>

            <Form
              name="basic"
              style={{
                maxWidth: 700,
              }}
              onFinish={deleteAssPST}
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
                label="Skin type"
                name="stName"
                rules={[
                  {
                    required: true,
                    message: "Please input skin type's name!",
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
                <Button type="primary" htmlType="subimt">
                  Delete relationship
                </Button>
              </Form.Item>
            </Form>
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
          <Space size="large" lign="start">
            <Form
              name="basic"
              style={{
                maxWidth: 700,
              }}
              onFinish={onFinishAssPPT}
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
                label="Product type"
                name="ptName"
                rules={[
                  {
                    required: true,
                    message: "Please input product type's name!",
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
                  Assign relationship
                </Button>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              ></Form.Item>
            </Form>

            <Form
              name="basic"
              style={{
                maxWidth: 700,
              }}
              onFinish={deleteAssPPT}
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
                label="Product type"
                name="ptName"
                rules={[
                  {
                    required: true,
                    message: "Please input product type's name!",
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
                <Button type="primary" htmlType="subimt">
                  Delete relationship
                </Button>
              </Form.Item>
            </Form>
          </Space>
        </div>
      </div>
    </>
  );
};
export default RelationshipsAdmin;

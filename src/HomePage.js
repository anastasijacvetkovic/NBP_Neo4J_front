import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input, Card, Row, Col, Checkbox, Button, Form } from "antd";
import axios from "axios";
import { HeartOutlined } from "@ant-design/icons";
import { getUsername } from "./utils";
const { Search } = Input;
const Home = () => {
  const username = getUsername();
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [ing, setIngredients] = useState([]);
  const [ptype, setPType] = useState([]);
  const [stype, setSType] = useState([]);
  /////////////////////////////////////////////////////
  const onSearch = (value) => {
    axios
      .get("https://localhost:5001/api/User/SearchEngine_Products/" + value)
      .then((res) => {
        console.log(res.data, "Pronaso");
        setProducts(res.data);
      })
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      axios
        .get("https://localhost:5001/api/Product/Get_Products")
        .then((res) => {
          console.log(res.data, "Izbacio sve");
          setProducts(res.data);
        })
        .catch((err) => console.log(err.message));
    } else {
      axios
        .get("https://localhost:5001/api/Product/GetNotLiked/" + username)
        .then((res) => {
          console.log(res.data, "Izbacio sve od usera");
          setProducts(res.data);
        })
        .catch((err) => console.log(err.message));
    }

    axios
      .get("https://localhost:5001/api/User/LikeList_User/" + username)
      .then((res) => {
        console.log(res.data, "Liked products");
        setProducts((prevProducts) => {
          return prevProducts.map((p) => {
            if (res.data.includes(p.productName)) {
              return { ...p, liked: true };
            } else {
              return p;
            }
          });
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
    //brands
    axios
      .get("https://localhost:5001/api/Brand/Get_Brands")
      .then((res) => {
        console.log(res.data);
        setBrands(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    //ingredient
    axios
      .get("https://localhost:5001/api/Ingredient/Get_Ingredients")
      .then((res) => {
        console.log(res.data);
        setIngredients(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    //productType
    axios
      .get("https://localhost:5001/api/ProductType/Get_ProductType")
      .then((res) => {
        console.log(res.data);
        setPType(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    //skinType
    axios
      .get("https://localhost:5001/api/SkinType/Get_SkinType")
      .then((res) => {
        console.log(res.data);
        setSType(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const handleLike = (productName) => {
    axios
      .post(
        "https://localhost:5001/api/Relationships/Assign_Likes/" +
          username +
          "/" +
          productName
      )
      .then((res) => {
        console.log("Liked");

        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  /////////////////////////////////////////////////
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const onFinish = (values) => {
    //var brandNames = values.name;
    console.log(values);
    //axios.get("https://localhost:5001/api/Filter/Filter");
  };
  /////////////////////////////////////////////////////
  return (
    <div>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      <Form onFinish={onFinish}>
        <Form.Item>
          <p>Brand:</p>
          {brands.map((p) => {
            return (
              <Checkbox value={p.idb} onChange={onChange}>
                {p.name}
              </Checkbox>
            );
          })}
        </Form.Item>
        <Form.Item>
          <p>Ingredients:</p>
          {ing.map((i) => {
            return (
              <Checkbox value={i.idi} onChange={onChange}>
                {i.name}
              </Checkbox>
            );
          })}
        </Form.Item>
        <Form.Item>
          <p>Product type:</p>
          {ptype.map((pt) => {
            return (
              <Checkbox value={pt.idpt} onChange={onChange}>
                {pt.name}
              </Checkbox>
            );
          })}
        </Form.Item>

        <Form.Item>
          <p>Skin type:</p>
          {stype.map((st) => {
            return (
              <Checkbox value={st.idst} onChange={onChange}>
                {st.sType}
              </Checkbox>
            );
          })}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Find
          </Button>
        </Form.Item>
      </Form>
      <Row gutter={[16, 16]}>
        {products.map((p) => {
          return (
            <Col span={6}>
              <Card
                title={
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Link to={`/product/${p.productName}`}>
                      {p.productName}
                    </Link>
                    <Button
                      type="text"
                      onClick={() => handleLike(p.productName)}
                      icon={<HeartOutlined />}
                    />
                  </div>
                }
                bordered={false}
                style={{ width: 300 }}
              >
                <p>Use : {p.use}</p>
                <p>Summary : {p.summary}</p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Home;

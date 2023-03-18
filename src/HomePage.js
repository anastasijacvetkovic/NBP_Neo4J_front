import React, { useState, useEffect } from "react";
import { Input, Card, Row, Col } from "antd";
import axios from "axios";

const { Search } = Input;
const Home = () => {
  const [products, setProducts] = useState([]);

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
    axios
      .get("https://localhost:5001/api/Product/Get_Products")
      .then((res) => {
        console.log(res.data, "Izbacio sve");
        setProducts(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    // <p>
    //   home page nas nasusni daj nam danas i oprosti nam dugove nase kao sto mi
    //   oprastamo duznicima svojim
    // </p>
    <div>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />

      {products.map((p) => {
        return (
            <Row gutter={16}>
              <Col span={8}>
                <Card title={p.productName} bordered={false}>
                  <p>Use : {p.use}</p>
                  <p>Summary : {p.summary}</p>
                </Card>
              </Col>
            </Row>
        );
      })}
    </div>
  );
};
export default Home;

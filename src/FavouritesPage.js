import React, { useState, useEffect } from "react";
import { Input, Card, Row, Col } from "antd";
import axios from "axios";
import { getUsername } from "./utils";

const Favourites = () => {
  const [liked, setLiked] = useState([]);
  const username = getUsername();
  useEffect(() => {
    axios
      .get("https://localhost:5001/api/User/LikeList_User/" + username)
      .then((res) => {
        console.log(res.data, "Liked products");
        setLiked(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      {liked.map((p) => {
        return (
          <Row gutter={16}>
            <Col span={8}>
              <div key={p.idp}>
                <Card title={p.productName} bordered={false}>
                  <p>Use : {p.use}</p>
                  <p>Summary : {p.summary}</p>
                </Card>
              </div>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};
export default Favourites;

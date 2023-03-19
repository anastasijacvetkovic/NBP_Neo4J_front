import React, { useState, useEffect } from "react";
import { Input, Card, Spin, Row, Col } from "antd";
import axios from "axios";
import { getUsername } from "./utils";
const Favourites = () => {
  const [liked, setLiked] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = getUsername();
  useEffect(() => {
    axios
      .get("https://localhost:5001/api/User/LikeList_User/" + username)
      .then((res) => {
        console.log(res.data, "Liked products");
        setLiked(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);
  console.log(liked);
  return (
    <div>
      <Row gutter={[16, 16]}>
        {loading ? (
          <Spin />
        ) : (
          liked.map((p) => (
            <Col span={6}>
              <Card key={p.product.idp} title={p.product.productName}>
                <p>Use: {p.product.use}</p> <p>Summary: {p.product.summary}</p>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};
export default Favourites;

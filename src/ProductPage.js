import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Divider,
  Typography,
} from "antd";
const { Title } = Typography;

const Product = () => {
  return (
    <>
      <Title level={3}>Product</Title>
      <Divider orientation="left">About product</Divider>

    </>
  );
};
export default Product;

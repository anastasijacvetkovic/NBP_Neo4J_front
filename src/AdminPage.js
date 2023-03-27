import axios from "axios";
import { useState, useEffect } from "react";
import ProductAdmin from "./forAdmin/Product";
import IngredientAdmin from "./forAdmin/Ingredient";
import BrandAdmin from "./forAdmin/Brand";
import RelationshipsAdmin from "./forAdmin/Relationships";
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

const Admin = () => {
  return (
    <>
      <h1>PLEASE FILL IN ALL THE FILEDS !</h1>
      <ProductAdmin />
      <IngredientAdmin />
      <BrandAdmin />
      <RelationshipsAdmin />
    </>
  );
};
export default Admin;

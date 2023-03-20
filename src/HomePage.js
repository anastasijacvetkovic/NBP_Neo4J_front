// import React, { useState, useEffect } from "react";
// import { Input, Card, Row, Col, List, Button } from "antd";
// import axios from "axios";
// import { HeartOutlined, HeartTwoTone } from "@ant-design/icons";
// import { getUsername } from "./utils";

// const { Search } = Input;
// const Home = () => {
//   const username = getUsername();
//   const [products, setProducts] = useState([]);
//   const [likedProducts, setLikedProducts] = useState([]);
//   const onSearch = (value) => {
//     axios
//       .get("https://localhost:5001/api/User/SearchEngine_Products/" + value)
//       .then((res) => {
//         console.log(res.data, "Pronaso");
//         setProducts(res.data);
//       })
//       .catch((err) => console.log(err.message));
//   };
//   useEffect(() => {
//     axios
//       .get("https://localhost:5001/api/Product/Get_Products")
//       .then((res) => {
//         console.log(res.data, "Izbacio sve");

//         setProducts(res.data);
//       })
//       .catch((err) => console.log(err.message));

//     axios
//       .get("https://localhost:5001/api/User/LikeList_User/" + username)
//       .then((res) => {
//         console.log(res.data, "Liked products");
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);
//   const handleLike = (id) => {
//     //console.log("Product liked with id: ", id); // add logic to handle liking the product
//     axios
//       .post(
//         "https://localhost:5001/api/Relationships/Assign_Likes/" +
//           username +
//           "/" +
//           id
//       )
//       .then((res) => {
//         console.log("Liked");
//         setLikedProducts([...likedProducts, id]);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };
//   return (
//     <div>
//       <Search placeholder="input search text" onSearch={onSearch} enterButton />
//       <Row gutter={[16, 16]}>
//         {products.map((p) => {
//           const isLiked = likedProducts.includes(p.productName);
//           return (
//             <Col span={6}>
//               <Card
//                 title={
//                   <div
//                     style={{ display: "flex", justifyContent: "space-between" }}
//                   >
//                     <span>{p.productName}</span>
//                     <Button
//                       type="text"
//                       onClick={() => handleLike(p.productName)}
//                       icon={
//                         isLiked ? (
//                           <HeartTwoTone twoToneColor="#eb2f96" />
//                         ) : (
//                           <HeartOutlined />
//                         )
//                       }
//                     />
//                   </div>
//                 }
//                 bordered={false}
//                 style={{ width: 300 }}
//               >
//                 <p>Use : {p.use}</p>
//                 <p>Summary : {p.summary}</p>
//               </Card>
//             </Col>
//           );
//         })}
//       </Row>
//     </div>
//   );
// };
// export default Home;

import React, { useState, useEffect } from "react";
import { Input, Card, Row, Col, Checkbox, Button, Form } from "antd";
import axios from "axios";
import { HeartOutlined, HeartTwoTone } from "@ant-design/icons";
import { getUsername } from "./utils";
const { Search } = Input;
const Home = () => {
  const username = getUsername();
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
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
    axios
      .get("https://localhost:5001/api/Product/Get_Products")
      .then((res) => {
        console.log(res.data, "Izbacio sve");
        setProducts(res.data);
      })
      .catch((err) => console.log(err.message));
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
        setLikedProducts([...likedProducts, productName]); // add the liked product to likedProducts state
        setProducts((prevProducts) => {
          return prevProducts.map((p) => {
            if (p.productName === productName) {
              return { ...p, liked: true }; // set the 'liked' property of the product to true
            } else {
              return p;
            }
          });
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  /////////////////////////////////////////////////
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  /////////////////////////////////////////////////////
  return (
    <div>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      <Form>
        <p>Brand:</p>
        {brands.map((p) => {
          return (
            <Checkbox value={p.idb} onChange={onChange}>
              {p.name}
            </Checkbox>
          );
        })}
        <p>Ingredients:</p>
        {ing.map((i) => {
          return (
            <Checkbox value={i.idi} onChange={onChange}>
              {i.name}
            </Checkbox>
          );
        })}
        <p>Product type:</p>
        {ptype.map((pt) => {
          return (
            <Checkbox value={pt.idpt} onChange={onChange}>
              {pt.name}
            </Checkbox>
          );
        })}
        <p>Skin type:</p>
        {stype.map((st) => {
          return (
            <Checkbox value={st.idst} onChange={onChange}>
              {st.sType}
            </Checkbox>
          );
        })}
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
                    <span>{p.productName}</span>
                    <Button
                      type="text"
                      onClick={() => handleLike(p.productName)}
                      icon={
                        likedProducts.includes(p.productName) ? (
                          <HeartTwoTone twoToneColor="#eb2f96" />
                        ) : (
                          <HeartOutlined />
                        )
                      }
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

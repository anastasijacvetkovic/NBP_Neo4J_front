import "./App.css";
import "./ant-design.css";
import { LoginOutlined, HomeOutlined, HeartOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./LoginPage";
import Register from "./RegisterPage";
import Home from "./HomePage";
import Favourites from "./FavouritesPage";
import MenuItem from "antd/es/menu/MenuItem";
const { Header, Content, Footer } = Layout;
function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Router>
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" style={{ display: "block" }}>
            <MenuItem
              key={"1"}
              icon={<HomeOutlined />}
              style={{ float: "left" }}
            >
              <Link to={"/home"}>Home</Link>
            </MenuItem>
            <MenuItem
              key={"2"}
              icon={<HeartOutlined />}
              style={{ float: "left" }}
            >
              <Link to={"/favourites"}>Favourites</Link>
            </MenuItem>

            <Menu.Item
              key={"3"}
              icon={<LoginOutlined />}
              style={{ float: "right" }}
            >
              <Link to={"/register"}>Register/Login</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          style={{
            padding: "50px 50px",
          }}
        >
          {/* part for breadcrumbs, look up layout page */}
          <div
            className="site-layout-content"
            style={{
              background: colorBgContainer,
            }}
          >
            {/* content of each page */}
            <Routes>
              <Route path="/" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/favourites" element={<Favourites />} />
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          noFil[lt]er ©2023 Created by GOFC
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;

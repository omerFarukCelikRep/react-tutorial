import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import SelectorSample from "./cssSamples/SelectorSample";
import About from "./routerSample/About";
import Contact from "./routerSample/Contact";
import EmployeeDetails from "./routerSample/EmployeeDetails";
import Employees from "./routerSample/Employees";
import Home from "./routerSample/Home";
import NoMatch from "./routerSample/NoMatch";
import CustomerList from "./uygulama3/CustomerList";
import { Layout, Menu, Breadcrumb } from "antd";
import ProductsTable from "./antDesignSample/ProductsTable";
import AddProduct from "./antDesignSample/AddProduct";
import "antd/dist/antd.css";
import SiteProductPage from "./contextSample/SiteProductPage";
import { CartProvider } from "./store/context/CartContext";
import LayoutEffectSample from "./otherHooks/LayoutEffectSample";
import MemoHook from "./otherHooks/MemoHook";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Layout>
            <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/products">Products</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/addproduct">Add Product</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/siteproducts">Site Products</Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to="/layouteffectsample">Layout Effect</Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to="/memohooksample">Memo Hook</Link>
                </Menu.Item>
              </Menu>
            </Header>

            <Content
              className="site-layout"
              style={{ padding: "0 50px", marginTop: 64 }}
            >
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-content">
                <Switch>
                  <Route exact path="/">
                    <Home></Home>
                  </Route>
                  <Route path="/home">
                    <Home />
                  </Route>
                  <Route exact path="/about">
                    <About />
                  </Route>
                  <Route exact path="/contact">
                    <Contact />
                  </Route>
                  <Route exact path="/employees">
                    <Employees />
                  </Route>
                  <Route path="/employees/:id">
                    <EmployeeDetails />
                  </Route>
                  <Route path="/customers">
                    <CustomerList />
                  </Route>
                  <Route exact path="/selectorsample">
                    <SelectorSample />
                  </Route>
                  <Route exact path="/products">
                    <ProductsTable />
                  </Route>
                  <Route exact path="/addproduct">
                    <AddProduct />
                  </Route>
                  <Route exact path="/siteproducts">
                    <SiteProductPage />
                  </Route>
                  <Route exact path='/layouteffectsample'>
                    <LayoutEffectSample />
                  </Route>
                  <Route exact path='/memohooksample'>
                    <MemoHook />
                  </Route>
                  <Route path="*">
                    <NoMatch />
                  </Route>
                </Switch>
              </div>
            </Content>

            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;

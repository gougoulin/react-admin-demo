import React from "react";
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import "./sass/style.scss";
import Home from "./pages/home";
import Product from "./pages/product";
import User from "./pages/user";
import Order from "./pages/order/";
import CreateOrder from "./pages/order/createorder";
import ViewOrder from "./pages/order/vieworder";
// import { useSelector } from "react-redux";

function Router({ children }) {
  // const state = useSelector((state) => state.CurrentUserReducer);
  const sidebarMenuContent = [
    { id: "sidebar_menu_home", name: "Home", path: "/" },
    { id: "sidebar_menu_product", name: "Product", path: "/product" },
    { id: "sidebar_menu_order", name: "Order", path: "/order" },
    { id: "sidebar_menu_user", name: "User", path: "/user" },
  ];

  const sidebarMenu = sidebarMenuContent.map((item) => {
    return (
      <li className="nav__item" key={item.id}>
        <NavLink className="nav__item__link" to={item.path}>
          {item.name}
        </NavLink>
      </li>
    );
  });

  const routes = {
    Home: (
      <Route key="routes_home" exact path="/">
        <Home sidebarMenu={sidebarMenu} />
      </Route>
    ),
    Product: (
      <Route key="routes_product" exact path="/product">
        <Product sidebarMenu={sidebarMenu} />
      </Route>
    ),
    Order: (
      <Route key="routes_order" exact path="/order">
        <Order sidebarMenu={sidebarMenu} />
      </Route>
    ),
    User: (
      <Route key="routes_user" exact path="/user">
        <User sidebarMenu={sidebarMenu} />
      </Route>
    ),
  };

  const enabledRoutes = sidebarMenuContent.map((item) => {
    return routes[item.name];
  });

  return (
    <BrowserRouter>
      {/* <div>testing store</div> */}
      <Switch>
        {/* <Route exact path="/">
          <Home sidebarMenu={sidebarMenu} />
        </Route>
        <Route exact path="/product">
          <Product sidebarMenu={sidebarMenu} />
        </Route>
        <Route exact path="/order">
          <Order sidebarMenu={sidebarMenu} />
        </Route>
        <Route exact path="/user">
          <User sidebarMenu={sidebarMenu} />
        </Route> */}
        {enabledRoutes}
        <Route exact path="/order/new">
          <CreateOrder sidebarMenu={sidebarMenu} />
        </Route>
        <Route exact path="/order/view/:id">
          <ViewOrder sidebarMenu={sidebarMenu} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

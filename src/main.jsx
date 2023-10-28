import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main.jsx";
import Home from "./pages/Home/Home.jsx";
import Order from "./pages/Orders/Order.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Favorite from "./pages/Favorite/Favorite.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Details from "./pages/Details/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <Order />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/details/:id",
        element: <Details />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/favorite",
        element: <Favorite />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import Dashboard from "../Layout/Dashboard";
import PrivateRouter from "./PrivateRouter";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "additem",
        element: <AdminRoute><AddItem></AddItem></AdminRoute>,
      },
      {
        path: "manageitems",
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>,
      },
    ],
  },
]);
export default router;

import { NavLink, Outlet } from "react-router-dom";
import {
  FaBars,
  FaCcAmazonPay,
  FaHome,
  FaMailBulk,
  FaMoneyCheck,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";
const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-orange-400">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="p-8 uppercase font-bold">
            <h1 className="text-3xl">Bistro Boss</h1>
            <p className="text-xl">Reataurant</p>
          </div>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <NavLink to={"/"}>
                <FaHome></FaHome> User Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                <FaMoneyCheck></FaMoneyCheck> Reservation
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                <FaCcAmazonPay></FaCcAmazonPay> Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/mycart"}>
                <FaShoppingCart></FaShoppingCart> My Cart
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to={"/"}>
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>
                <FaBars></FaBars> Our Menu
              </NavLink>
            </li>
            <li>
              <NavLink to={"/order/salads"}>
                <FaShoppingBag></FaShoppingBag> Order Food
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                <FaMailBulk></FaMailBulk> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

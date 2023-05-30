import { NavLink, Outlet } from "react-router-dom";
import {
  FaBars,
  FaBook,
  FaCcAmazonPay,
  FaHome,
  FaMailBulk,
  FaMoneyCheck,
  FaOutdent,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
const Dashboard = () => {
  const [cart] = useCart();
  const isAdmin = true;
  return (
    <div className="w-full">
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
            {isAdmin ? (
              <>
                <li>
                  <NavLink to={"/dashboard/admin"}>
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/additems"}>
                    <FaUtensils></FaUtensils> Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/manageitem"}>
                    <FaOutdent></FaOutdent> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/managebooking"}>
                    <FaBook></FaBook> Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/allusers"}>
                    <FaUsers></FaUsers> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to={"/dashboard/user"}>
                    <FaHome></FaHome> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/reservation"}>
                    <FaMoneyCheck></FaMoneyCheck> Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/payment"}>
                    <FaCcAmazonPay></FaCcAmazonPay> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/mycart"}>
                    <FaShoppingCart></FaShoppingCart> My Cart
                    <span className="badge">+{cart?.length || 0}</span>
                  </NavLink>
                </li>
              </>
            )}
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
              <NavLink to={"/contact"}>
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

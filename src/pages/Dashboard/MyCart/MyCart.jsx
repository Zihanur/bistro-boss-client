import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";

const MyCart = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="uppercase flex justify-evenly items-center h-[60px]">
        <h1 className="text-2xl font-semibold">Total orders: {cart?.length}</h1>
        <h1 className="text-2xl font-semibold">total price: ${total}</h1>
        <button className="btn btn-warning btn-sm">PAY</button>
      </div>
      <div>
        <div className="overflow-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((row, index) => (
                <tr key={row._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img className="w-12 h-12 mask mask-squircle" src={row.image} alt="" />
                  </td>
                  <td>
                  {row.name}
                  </td>
                  <td className="text-end m-4">${row.price}</td>
                  <td>
                    <button className="btn btn-sm text-white bg-red-600"><FaTrashAlt></FaTrashAlt></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;

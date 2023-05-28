import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { _id, name, recipe, image, price } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart()

  const handleAddToCart = (item) => {
    console.log(item);
    //condition if user= true then send data
    if (user && user.email) {
      const cartItem = {menuItemId: _id, name, image, price, email: user.email}
      fetch("http://localhost:5000/carts",{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(cartItem)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Added Cart Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch(); //update btn click
          }
        });
    }
    else{
      Swal.fire({
        title: 'Please Login!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',{state:{from:location}})
        }
      })
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Recipe" />
      </figure>
      <p className="absolute right-0 mt-3 me-4 p-1 rounded bg-slate-950 text-white text-lg ">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end mt-4">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline btn-warning border-yellow-600 border-b-4"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

import Cover from "../../Shared/Cover/Cover";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { Link } from "react-router-dom";

const MenuCategoty = ({ items, img, title }) => {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-3 gap-4 mt-14">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
      <div className="text-center mt-2 mb-16">
        <Link to={`/order/${title}`}>
          <button className="btn btn-ghost btn-outline border-0 border-b-4 border-gray-800">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategoty;

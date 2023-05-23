import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategoty = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mt-14">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-2 mb-16">
        <button className="btn btn-ghost btn-outline border-0 border-b-4 border-gray-800">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
    </div>
  );
};

export default MenuCategoty;

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-10">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-4">
        {popular.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
      <div className="text-center py-4">
        <button className="btn btn-ghost btn-outline border-0 border-b-4 border-gray-800">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;

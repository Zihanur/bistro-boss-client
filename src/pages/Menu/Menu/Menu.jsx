import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import bgImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategoty from "../MenuCategory/MenuCategoty";

const Menu = () => {
  const [menu] = useMenu();
  
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={bgImg} title={"OUR MENU"}></Cover>
      {/* Offered */}
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"today's offer"}
      ></SectionTitle>
      <MenuCategoty items={offered}></MenuCategoty>
      {/* dessert */}
      <MenuCategoty items={dessert} title={"desserts"} img={dessertImg}></MenuCategoty>
      {/* pizza */}
      <MenuCategoty items={pizza} title={"pizzas"} img={pizzaImg}></MenuCategoty>
      {/* salad */}
      <MenuCategoty items={salad} title={"salads"} img={saladImg}></MenuCategoty>
      {/* soup */}
      <MenuCategoty items={soup} title={"soups"} img={soupImg}></MenuCategoty>
    </div>
  );
};

export default Menu;

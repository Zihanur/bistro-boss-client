import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecipies from "../ChefRecipies/ChefRecipies";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <ChefRecipies></ChefRecipies>
      <Featured></Featured>
    </div>
  );
};

export default Home;

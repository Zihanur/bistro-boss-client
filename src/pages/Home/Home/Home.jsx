import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecipies from "../ChefRecipies/ChefRecipies";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <ChefRecipies></ChefRecipies>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;

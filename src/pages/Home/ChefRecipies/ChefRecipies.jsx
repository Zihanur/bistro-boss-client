import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Recipes from "./Recipies/Recipes";

const ChefRecipies = () => {
  const [chefRes, setChefRes] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setChefRes(data));
  }, []);
  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"Should Try"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {chefRes.slice(7, 10).map((item) => (
          <Recipes key={item._id} item={item}></Recipes>
        ))}
      </div>
    </section>
  );
};

export default ChefRecipies;

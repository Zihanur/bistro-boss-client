import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from "../../../assets/home/featured.jpg"
import "../Featured/Featured.css"

const Featured = () => {
  return (
    <div className="featured bg-fixed text-white py-4
    my-8">
      <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>
      <div className="md:flex justify-center items-center md:space-x-4 p-8 bg-slate-500 bg-opacity-40">
        <div className="p-12">
          <img src={img} alt="" />
        </div>
        <div className="space-y-2">
          <h1>March 20, 2023</h1>
          <h1>WHERE CAN I GET SOME?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
          <button className="btn btn-ghost btn-outline border-0 border-b-4 border-gray-800">Order Now</button>
        </div>
        
      </div>
    </div>
  );
};
 
export default Featured;

const MenuItem = ({item}) => {
  const {name, recipe, image, price} = item;
  return (
    <div className="flex space-x-4 mb-2">
      <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[80px]" src={image} alt="" />
      <div>
        <h1>{name} -------------</h1>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItem;
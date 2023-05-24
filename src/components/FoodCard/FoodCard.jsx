const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Recipe" />
      </figure>
      <p className="absolute right-0 mt-3 me-4 p-1 rounded bg-slate-950 text-white text-lg ">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>

        <div className="card-actions justify-end mt-4">
          <button className="btn btn-outline btn-warning border-yellow-600 border-b-4">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

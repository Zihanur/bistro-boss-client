const Recipes = ({ item }) => {
  const { name, recipe, image } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Recipe" />
      </figure>
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

export default Recipes;

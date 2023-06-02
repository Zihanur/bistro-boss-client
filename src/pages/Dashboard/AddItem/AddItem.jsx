import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    //image hosting in imgBB
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        const imgUrl = imageResponse.data.display_url;
        const { name, price, category, recipe } = data;
        //create new item from the form
        const newItem = {
          name,
          price: parseFloat(price),
          category,
          recipe,
          image: imgUrl,
        };
        axiosSecure.post("/menu", newItem).then((data) => {
          if (data.data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Item added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      });
  };

  return (
    <div className="w-full max-h-full p-4">
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <SectionTitle
        subHeading="What's New?"
        heading="add an new"
      ></SectionTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-2 p-6 rounded-lg"
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-xl">Recipe name*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Recipe name"
            className="input input-bordered w-full"
            {...register("name", { required: true, maxLength: 120 })}
          />
          {errors.name && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl">Category*</span>
            </label>
            <select
              defaultValue={"pick one"}
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>pick one</option>
              <option>Salads</option>
              <option>Pizzas</option>
              <option>Soups</option>
              <option>Desserts</option>
              <option>Drinks</option>
            </select>
            {errors.category && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered w-full"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Recipe Details*</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
            {...register("recipe", { required: true })}
          ></textarea>
          {errors.recipe && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="form-control w-full max-w-xs my-4">
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <button className="btn btn-outline-ghost">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;

import { FaArrowLeft, FaHeart } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewRecipeDetails = () => {
  const recipeDetails = useLoaderData();
  const notify = () => toast.success("Added to favorites");
  const {
    pictureUrl,
    chefName,
    shortDescription,
    likes,
    recipeCount,
    experienceYears,
    id,
    recipes,
  } = recipeDetails;
  console.log(recipeDetails);

  return (
    <div>
      <Link to="/">
      <button type="button" className="text-white mt-5 ml-8 bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Back to home
    <FaArrowLeft className="w-5 h-5 ml-2"></FaArrowLeft>
</button>
      </Link>

      <div className="card  bg-base-100 shadow-xl mt-5">
        <figure className="relative group overflow-hidden rounded-lg shadow-lg">
          <img
            className="w-3/5 h-auto  transition duration-300 transform group-hover:scale-125"
            src={pictureUrl}
            alt="Album"
          />
        </figure>
        <div className="card-body mt-5">
          <h2 className="card-title text-purple-700 font-bold text-5xl">
            {chefName}
          </h2>
          <p>{shortDescription}</p>
          <div className="badge badge-outline">
            {" "}
            <p className="flex items-center">
              <FaHeart className="mr-2 text-purple-600"></FaHeart>{" "}
              <span className="text-md font-semibold">{likes}</span>
            </p>
          </div>
          <div className="badge badge-outline">
            <p className="font-semibold">Number of recipe: {recipeCount}</p>
          </div>
          <div className="badge badge-outline">
            {" "}
            <p className="font-semibold">
              Years of experience: {experienceYears}
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-5 ml-24">
        {/* recipe 1 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={recipes[0].recipePictureUrl}
              alt="Shoes"
              className="rounded-xl w-auto h-72"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{recipes[0].recipeName}</h2>
            <p>{recipes[0].description}</p>
            <p className="">
              <span className="font-bold">Ingredients:</span>{" "}
              {recipes[0].ingredients}{" "}
            </p>
            <div className="flex items-center gap-2 font-bold">
              <Rating
                style={{ maxWidth: 150 }}
                value={recipes[0].rating}
                readOnly
              />
              <span className="text-black ">{recipes[0].rating}</span>
            </div>
            <div className="card-actions">
              <button onClick={notify} className="btn bg-purple-700">
                Add to favorite<FaHeart className="ml-2 w-9 h-5"></FaHeart>
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
        {/* recipe 2 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={recipes[1].recipePictureUrl}
              alt="Shoes"
              className="rounded-xl  w-auto h-72"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{recipes[1].recipeName}</h2>
            <p>{recipes[1].description}</p>
            <p>
              <span className="font-bold">Ingredients:</span>{" "}
              {recipes[1].ingredients}{" "}
            </p>
            <div className="flex items-center gap-2 font-bold">
              <Rating
                style={{ maxWidth: 150 }}
                value={recipes[1].rating}
                readOnly
              />
              <span className="text-black ">{recipes[1].rating}</span>
            </div>
            <div className="card-actions">
              <button onClick={notify} className="btn bg-purple-700">
                Add to favorite<FaHeart className="ml-2 w-9 h-5"></FaHeart>
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
        {/* recipe 3 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={recipes[2].recipePictureUrl}
              alt="Shoes"
              className="rounded-xl w-auto h-72"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{recipes[2].recipeName}</h2>
            <p>{recipes[2].description}</p>
            <p className="">
              <span className="font-bold">Ingredients:</span>{" "}
              {recipes[2].ingredients}{" "}
            </p>
            <div className="flex items-center gap-2 font-bold">
              <Rating
                style={{ maxWidth: 150 }}
                value={recipes[2].rating}
                readOnly
              />
              <span className="text-black ">{recipes[2].rating}</span>
            </div>
            <div className="card-actions">
              <button onClick={notify} className="btn bg-purple-700">
                Add to favorite<FaHeart className="ml-2 w-9 h-5"></FaHeart>
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRecipeDetails;

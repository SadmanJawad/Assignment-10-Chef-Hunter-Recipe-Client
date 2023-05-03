import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardDetails = ({ chefData }) => {
  const { chefName, experienceYears, id, pictureUrl, likes, recipeCount } =
    chefData;
//   console.log(chefData);
  return (
      <div className="card w-96 ml-7 bg-base-100 border border-gray-400">
        <figure>
          <img className="h-60 w-4/5 rounded mt-4" src={pictureUrl} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{chefName}</h2>
          <p className="text-xl">Years of experience: {experienceYears}</p>
          <p className="text-xl">Num of recipes: {recipeCount}</p>
          <p className="text-xl flex items-center"><FaRegHeart className="mr-2 text-purple-600"></FaRegHeart>{likes}</p>
          <div>
            <Link to={`/${id}`} className="btn bg-purple-800">View Recipe</Link>
          </div>
        </div>
      </div>
  );
};

export default CardDetails;

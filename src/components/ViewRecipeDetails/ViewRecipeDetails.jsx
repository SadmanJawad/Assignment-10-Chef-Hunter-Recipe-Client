import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewRecipeDetails = () => {
    const recipeDetails = useLoaderData();

    const {pictureUrl, chefName, shortDescription, likes, recipeCount, experienceYears, id} = recipeDetails
    console.log(recipeDetails)

    return (
        <div>
                <h1>{chefName}</h1>
                <div>
                    <figure><img src={pictureUrl} alt="" /></figure>
                </div>
        </div>
    );
};

export default ViewRecipeDetails;
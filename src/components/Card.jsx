import React from "react";
import "./Card.css";


const Card = (props) => {
  const type = props.recipe.recipe.cuisineType ? props.recipe.recipe.cuisineType[0].charAt(0).toUpperCase() + props.recipe.recipe.cuisineType[0].slice(1) : null;
  const dish = props.recipe.recipe.dishType ? props.recipe.recipe.dishType[0].charAt(0).toUpperCase() + props.recipe.recipe.dishType[0].slice(1) : null;

  return (
    <div className="card bg-orange-400 text-white hover:cursor-pointer hover:scale-105" onClick={() => window.location.replace(`/recipes/${((props.recipe._links.self.href).split('/')[6]).split('?')[0]}`)}>
      <article className="overflow-hidden rounded-lg shadow-2xl h-full">
        <div className="w-full mt-1">
            <img src={props.recipe.recipe.image} alt="" className="w-full h-[350px]" />
        </div>

        <div className="flex items-center justify-between leading-tight pl-2 pr-2 md:p-4">
          <h3 className="text-3xl">
            {props.recipe.recipe.label}
          </h3>
        </div>

        <div className="flex items-center justify-between leading-none p-2 md:p-4">
          <h4 className="text-3xl text-gray-200">
            {type}
          </h4>
        </div>

        {dish ? (<div className="flex items-center justify-between leading-none p-2 md:p-4">
          <h4 className="text-gray-200 text-3xl">
            {dish}
          </h4>
        </div>) : ('')}

        <div className="flex items-center justify-between leading-none p-2 md:p-4">
          <p className="text-gray-200 text-xl">
              {(props.recipe.recipe.calories).toFixed(2)} Calories
          </p>
        </div>
      </article>
    </div>
  );
};

export default Card;
import React from "react";

const RecipeeCard = ({ id, title, category, image, ingredients, process }) => {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 group">
      {/* Image */}
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text content */}
      <div className="p-5">
        <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">
          {category}
        </span>

        <h3 className="mt-1 text-lg font-bold text-white">{title}</h3>

        {/* Ingredients preview */}
        
        <p className="mt-2 text-sm text-gray-300">
          <strong>Ingredients:</strong> {ingredients.slice(0, 3).join(", ")}...
        </p>

        {/* View Recipe button */}
        <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400">
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeeCard;

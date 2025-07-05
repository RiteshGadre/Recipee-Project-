import React, { useContext, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { recipeContext } from "../contexts/RecipeContext";

const Recipee = () => {
  const { recipeCollection } = useContext(recipeContext);

  return (
    <div className="py-6 px-10">
      <h1 className="text-center pb-8 text-2xl font-thin">Recipees</h1>
      <div className="grid grid-cols-4 gap-6">
        {recipeCollection.map((recipe, index) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            category={recipe.category}
            image={recipe.image}
            ingredients={recipe.ingredients}
            process={recipe.process}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipee;

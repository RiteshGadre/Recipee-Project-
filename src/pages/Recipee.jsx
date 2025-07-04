import React, { useContext, useState } from "react";
import { recipeData } from "../utils/RecipeData";
import RecipeeCard from "../components/RecipeCard";

const Recipee = () => {
  const [recipeCollection, setRecipeCollection] = useState(recipeData);
  return (
    <div className="py-6 px-10">
      <h1 className="text-center pb-8 text-2xl font-thin">Recipees</h1>
      <div className="grid grid-cols-4 gap-6">
        {recipeCollection.map((recipe, index) => (
          <RecipeeCard
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

import React, { Children, createContext, useContext, useState } from "react";
import { recipeData } from "../utils/RecipeData";

export const recipeContext = createContext(null);

const RecipeContext = ({children}) => {
  const [recipeCollection, setRecipeCollection] = useState(recipeData);

  return (
    <recipeContext.Provider value={{ recipeCollection, setRecipeCollection }}>
      {children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;

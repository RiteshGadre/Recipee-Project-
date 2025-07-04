import React, { Children, createContext, useContext, useState } from "react";
import { recipeData } from "../utils/RecipeData";

export const recipeContext = createContext(null);

const RecipeContext = (props) => {
  
  const [recipeCollection, setRecipeCollection] = useState(recipeData);

  return (
    <recipeContext.Provider value={{recipeCollection, setRecipeCollection}}>
      {props.Children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;

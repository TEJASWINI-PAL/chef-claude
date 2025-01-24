import React, { useState } from "react";
import CloudRecipe from "./CloudRecipe";
import IngredientList from "./IngredientList";
import { getRecipeFromChefClaude} from "../ai";

const Main = () => {
  const [ingredents, setIngredients] = React.useState([]);

  const [recipe, setRecipe] = useState("");

  const addIngredients = (formData) => {
    const newIngredients = formData.get("ingredient");
    setIngredients((preValue) => [...preValue, newIngredients]);
  };
  const getRecipe = async() => {
    const recipeMarkDown = await getRecipeFromChefClaude(ingredents);
    console.log(recipeMarkDown)
     setRecipe(recipeMarkDown);
  };

  return (
    <>
      <main>
        <form action={addIngredients} className="add-ingredient-form">
          <input
            type="text"
            placeholder="eg.oregano"
            aria-label="Add ingredients"
            name="ingredient"
          />
          <button>Add Ingredients</button>
        </form>
        {ingredents.length > 0 && (
          <IngredientList ingredents={ingredents} getRecipe={getRecipe} />
        )}

        {recipe && <CloudRecipe recipe={recipe} />}
      </main>
    </>
  );
};

export default Main;

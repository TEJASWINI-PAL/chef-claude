import React, { useState } from "react";

const Main = () => {
  const [ingredents, setIngredients ] = React.useState([]);

  const allItems=ingredents.map(thing=>(
    <li key= {thing}> {thing}</li>
  ))
  const addIngredients = (formData) => {
     const newIngredients=formData.get("ingredient")
    setIngredients (preValue => [...preValue,newIngredients]);
  };
  console.log("ingred",ingredents)

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

      <div>
        {allItems}
      </div>
  
        </form>
      </main>
    </>
  );
};

export default Main;

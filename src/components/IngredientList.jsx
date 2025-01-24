import React from 'react'

const IngredientList = (props) => {
    const allItems = props.ingredents.map((thing) => <li key={thing}> {thing}</li>);
  return (
    <>
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
              {allItems}
            </ul>
            {props.ingredents.length > 3 && 
              <div className="get-recipe-container">
                <div>
                  <h3>Ready for a Recipe ?</h3>
                  <p>Generate a recipe from your list of ingredents.</p>
                </div>
                <button onClick={props.getRecipe}>Get a recipe</button>
              </div>
            }
        
</section>


    </>
  )
}

export default IngredientList
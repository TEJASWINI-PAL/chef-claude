import React from "react";
import Markdown from 'react-markdown'
const CloudRecipe = (props) => {
  
  return (
    <>
      <section className="suggested-recipe-container" aria-live="polite">
        <h2>Chef Claude Recommends:</h2>
       <Markdown>{props.recipe}</Markdown>
      </section>
    </>
  );
};

export default CloudRecipe;

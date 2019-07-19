import React from 'react';
import Receipt from './Receipt';

function Receipes(props) {
  return (
    <div className="container">
      <div className="row">
        {
          props.recipes && props.recipes.map(recipe => <Receipt key={recipe.recipe_id} data={recipe} />)
        }
      </div>
    </div>
  );
}

export default Receipes;
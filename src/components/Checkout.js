import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export default function Checkout({ingredients}){
	let history = useHistory();
	const[success, setSuccess] = useState(false);
	


	return(
		<div>{JSON.stringify(ingredients)} 
		<div>

		<h1>MY INGREDIENTS</h1>

		{Object.keys(ingredients).reduce((acc, ing) => {
            return acc + ingredients[ing] ? 1 : 0;
          }, 0) === 0 && <p>No ingredients Selected</p>}
          {Object.keys(ingredients).map((ingredient) => {
            return (
              ingredients[ingredient] && (
                <p>
                  {ingredient[0].toUpperCase()}
                  {ingredient.substr(1)}
                </p>
              )
            );
          })}


           <button
            className="proceedToCheckout"
            onClick={() => history.push("/")}
          >
            Go Back
          </button>
          
          <button
            onClick={() => setSuccess(true)}
            className="proceedToCheckout"
            style={{ marginLeft: 10 }}
          >
            Confirm
          </button>
          </div>
		<div></div>
		</div>
		);
	

}
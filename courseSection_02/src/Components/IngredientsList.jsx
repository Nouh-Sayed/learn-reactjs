


// const IngredientsList = (props) => {



//   return (
//     <div>

//        <h1 className="text-4xl font-bold text-amber-700">ingredient list component</h1>
     
     

//       <section>
//         <h1 className="text-2xl font-bold ml-5">ingredients on hand : </h1><br />
//         <ul className="bg-gray-200 rounded-4xl">
//           {props.ingredients.map((ingredient, index) => (
//             <li key={index} className="list-disc ml-50">
//               {ingredient}
//             </li>
//           ))}
//         </ul>
//         <br />
//        { props.ingredients.length >= 3 && <div className="container bg-gray-200 flex justify-around items-center h-30 rounded-xl">
//           <div className=" ">
//             <h3 className="text-s font-medium  "> ready for a recipe ? </h3>
//             <p>generate a recipe from your <br /> list of ingredients</p>
//           </div>
//           <button
//           onClick={props.toggleshown} className="bg-amber-600 ml-20 rounded-3xl p-2 h-10 mt-5 ">git a recipe</button>
//         </div>}
//         </section>
//     </div>
//   )
// }

// export default IngredientsList


import { getRecipeFromOpenAI } from "./ai";

const IngredientsList = (props) => {

  async function getRecipe() {
    const recipe = await getRecipeFromOpenAI(props.ingredients);

    console.log(recipe);
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-amber-700">
        ingredient list component
      </h1>

      <section>
        <h1 className="text-2xl font-bold ml-5">
          ingredients on hand :
        </h1>

        <br />

        <ul className="bg-gray-200 rounded-4xl">
          {props.ingredients.map((ingredient, index) => (
            <li key={index} className="list-disc ml-50">
              {ingredient}
            </li>
          ))}
        </ul>

        <br />

        {props.ingredients.length >= 3 && (
          <div className="container bg-gray-200 flex justify-around items-center h-30 rounded-xl">
            
            <div>
              <h3 className="text-s font-medium">
                ready for a recipe ?
              </h3>

              <p>
                generate a recipe from your <br />
                list of ingredients
              </p>
            </div>

            <button
              onClick={getRecipe}
              className="bg-amber-600 ml-20 rounded-3xl p-2 h-10 mt-5"
            >
              Get a recipe
            </button>

          </div>
        )}
      </section>
    </div>
  );
};

export default IngredientsList;
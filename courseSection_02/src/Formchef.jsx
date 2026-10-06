
import React from "react";
import ClaudeRecipe from "./Components/ClaudeRecipe";
import IngredientsList from "./Components/IngredientsList";


const Formchef = () => {
  const [ingredients, setIngredients] = React.useState(["chicken","meat", "rice"]);
const [recipeShown,setRecipeShown]= React.useState(false)


  function addingredients(formData) {
    const newIngredient = formData.get("ingredient");

    if (!newIngredient || newIngredient.trim() === "") {
      return;
    }
if (newIngredient.trim().length < 3) {
  alert("Ingredient must be at least 3 characters");
  return;

}

    setIngredients((prevIngredients) => [
      ...prevIngredients,
      newIngredient.trim(),
    ]);
  }

  function toggleshown(){
    setRecipeShown((prevshow)=> !prevshow)
  }

  return (
    <div>

      <form action={addingredients}
        className="flex justify-center items-center gap-5 h-30"
      // onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="e.g oregano"
          className="border border-gray-300 p-2 rounded-lg"
          name="ingredient"
        // onChange={(e) => setInputValue(e.target.value)}
        // value={inputValue}
        />


        <button
          type="submit"
          className="bg-black text-white px-2 py-2 rounded-xl hover:bg-gray-300"
        // onClick={addingredients}

        >
          + Add Ingredient
        </button>
      </form>
  {ingredients.length >0 &&
   <IngredientsList 
   ingredients = {ingredients}
   toggleshown ={toggleshown}
   
   /> 

   
  }

  { recipeShown &&  <ClaudeRecipe/> }
    </div>
  );
};

export default Formchef;



import React from "react";

const Formchef = () => {
  const [inputValue, setInputValue] = React.useState("");

  const [ingredients, setIngredients] = React.useState([
   
  ]);

  function addingredients (formData){

console.log(formData.get("ingredient"));
  // function handleSubmit(e) {
  //   e.preventDefault();

  //   const newIngredient = inputValue.trim();

  //   if (newIngredient === "") {
  //     alert("Enter the value");
  //     return;
  //   }

    // setIngredients((prevIngredients) => [
    //   ...prevIngredients,
    //   newIngredient,
    // ]);

  //   setInputValue("");
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
        onClick={addingredients}
        >
          + Add Ingredient
        </button>
      </form>

      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} className="list-disc ml-50">
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Formchef;


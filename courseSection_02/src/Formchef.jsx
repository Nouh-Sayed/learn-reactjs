
import React from "react";


const Formchef = () => {
  const [ingredients, setIngredients] = React.useState([]);
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
      {ingredients.length >0 && <section>
        <h1 className="text-2xl font-bold ml-5">ingredients on hand : </h1><br />
        <ul className="bg-gray-200 rounded-4xl">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="list-disc ml-50">
              {ingredient}
            </li>
          ))}
        </ul>
        <br />
       { ingredients.length >= 3 && <div className="container bg-gray-200 flex justify-around items-center h-30 rounded-xl">
          <div className=" ">
            <h3 className="text-s font-medium  "> ready for a recipe ? </h3>
            <p>generate a recipe from your <br /> list of ingredients</p>
          </div>
          <button
          onClick={toggleshown} className="bg-amber-600 ml-20 rounded-3xl p-2 h-10 mt-5 ">git a recipe</button>
        </div>}
        </section>}

  { recipeShown &&     <section>   <div>
      <h1>Chocolate Chip Cookies</h1>

      <p>
        Welcome to the ultimate guide for making mini chocolate chip cookies!
        These bite-sized treats are perfect for satisfying your sweet tooth
        without overindulging. Follow this simple recipe to create delicious,
        crispy-on-the-outside, chewy-on-the-inside mini chocolate chip cookies
        that everyone will love.
      </p>

      <img
        src="https://cdn.freecodecamp.org/curriculum/labs/recipe.jpg"
        alt="Ingredients for baking: three eggs, a bowl of flour, a glass of milk, and a whisk arranged on a wooden table."
      />

      <h2>Ingredients</h2>

      <ul>
        <li>1 cup all-purpose flour</li>
        <li>1/2 teaspoon baking soda</li>
        <li>1/4 cup unsalted butter, softened</li>
        <li>1/4 cup granulated sugar</li>
        <li>1/2 teaspoon vanilla extract</li>
        <li>1/2 cup mini chocolate chips</li>
      </ul>

      <h2>Instructions</h2>

      <ol>
        <li>
          Preheat your oven to 350°F (175°C) and line a baking sheet with
          parchment paper.
        </li>

        <li>In a bowl, whisk together the flour and baking soda.</li>

        <li>
          In another bowl, beat the butter, sugar, and vanilla extract until
          creamy.
        </li>

        <li>
          Gradually add the dry ingredients to the wet mixture, then fold in
          the mini chocolate chips.
        </li>

        <li>Drop small spoonfuls of dough onto the baking sheet.</li>

        <li>
          Bake for 8-10 minutes, then let cool before enjoying!
        </li>
      </ol>
    </div>
    </section>}
    </div>
  );
};

export default Formchef;


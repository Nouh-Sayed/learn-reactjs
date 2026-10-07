const IngredientsList = (props) => {
  async function getRecipe() {
    try {
      const response = await fetch("http://localhost:5000/api/recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ingredients: props.ingredients,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();

        throw new Error(
          errorData.error || "Failed to generate recipe"
        );
      }

      const data = await response.json();

      console.log(data.recipe);

      // Send recipe to Formchef
      props.setRecipe(data.recipe);

      // Show recipe
      props.toggleshown();

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-amber-700">
        ingredient list component
      </h1>

      <section>
       

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
                ready for a recipe?
              </h3>

              <p>
                generate a recipe from your <br />
                list of ingredients
              </p>
            </div>

            <button
              onClick={getRecipe}
              className="bg-amber-600 ml-20 rounded-3xl p-2 h-10 mt-5 hover:bg-amber-400"
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
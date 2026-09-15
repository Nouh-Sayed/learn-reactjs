import React from 'react'

const Formchef = () => {
  const ingredients = [
    "chiken",
    "beef",
    "pork",
    "fish",
  
  ]

    function handleSubmit(e) {
    e.preventDefault()

    console.log("form submitted")
      const formData = new FormData(e.currentTarget)
  const newIngredient = formData.get("ingredient")
  console.log(newIngredient)
  ingredients.push(newIngredient)
  console.log( ingredients);

  }
  // function mouseOver() { 
  //   console.log("mouse over")
  // }

  // function handleClick() {
  //   console.log("clicked")
  // }

  return (
    <div>
      <form
        className="flex justify-center items-center gap-5 h-30"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="e.g oregano"
          className="border border-gray-300 p-2 rounded-lg"
          // onMouseOver={mouseOver}
          name = "ingredient"
       />

        <button
          type="submit"
          className="bg-black text-white px-2 py-2 rounded-xl hover:bg-gray-300"
          // onClick={handleClick}
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
  )
}

export default Formchef
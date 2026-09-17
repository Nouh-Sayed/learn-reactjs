import React from "react";

const ArrayState = () => {
const [inputValue, setInputValue] = React.useState("")

  const allfavthings = ["shehla", "lele", "sehlaaaa", "sehlooo"];

  const [myFavoriteThings, setMyfavoriteThings] = React.useState(allfavthings);

  const things = myFavoriteThings.map((thing) => <p key={thing}>{thing}</p>);

  function addFavoriteThing() {
    setMyfavoriteThings((prevThings) => [...prevThings, inputValue]);
    if (inputValue.trim() === ""){
alert("enter the value")
}
setInputValue("");
  }

  return (
    <div className="ml-30">
      <h1>what is your favorite things</h1> <br />
      <br />
      <br />
      <input className="border-1 "  type="text" value={inputValue}
onChange={(e) => setInputValue(e.target.value)}/> <br />
      <br />
      <button
        className="bg-gray-300 p-6 border-3 border-red-300"
        onClick={addFavoriteThing}
      >
        add item
      </button>
      <h1>{things}</h1>
    </div>
  );
};

export default ArrayState;

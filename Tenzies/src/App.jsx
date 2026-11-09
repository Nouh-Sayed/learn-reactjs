
import Die from "./Die";
import React from "react";

const App = () => {
  function allNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => Math.floor(Math.random() * 6) + 1);
  }

  const [dice, setDice] = React.useState(allNewDice);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  function rollDice() {
    setDice(allNewDice());
  }

  function handleResize() {
    setWindowWidth(window.innerWidth);
  
  }

  React.useEffect(() => {   
      console.log("resized")
    window.addEventListener("resize", handleResize);

    return () => {
   
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="bg-sky-900 w-full min-h-screen flex justify-center items-center">
      <section className="bg-white w-160 h-160 rounded-lg shadow-lg flex flex-col justify-center items-center">

        <p>Window Width: {windowWidth}px</p>

        <div className="grid grid-cols-5 gap-8">
          {dice.map((die, index) => (
            <Die key={index} value={die} />
          ))}
        </div>

        <button
          onClick={rollDice}
          className="bg-amber-950 text-white px-4 py-2 rounded-lg mt-8 shadow-lg hover:bg-amber-800"
        >
          Roll
        </button>

      </section>
    </main>
  );
};

export default App;

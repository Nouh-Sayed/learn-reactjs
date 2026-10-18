import Die from "./Die";

const App = () => {

const [ dice, setDice] = React.useState(allNewDice());


  function allNewDice() {
    return new Array(10).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
  }


 function rollDice() {
    setDice(allNewDice());
  }



  return ( 
    <main className="bg-sky-900 w-full min-h-screen flex justify-center items-center">
      <section className="bg-white w-160 h-160 border-amber-950  rounded-lg shadow-lg flex justify-center items-center">
      
      <div className="grid grid-cols-5 gap-8">
<Die value={1} />
<Die value={2} />
<Die value={3} />
<Die value={4} />
<Die value={5} />
<Die value={6} />
<Die value={7} />
<Die value={8} />
<Die value={9} />
<Die value={10} />
      </div>

      </section>
    </main>
  );
};

export default App;



import React from 'react'

const Die = (props) => {
    function handleClick() {
        console.log("Die clicked")
      
    }
function allNewDice() {
    const randomDice = [];
for (let i = 0; i < 10; i++) {
    randomDice.push(Math.floor(Math.random() * 6) + 1)
   
}
return randomDice;}
 console.log(allNewDice())

  return (
    <button className="w-20 h-20 bg-gray-300 text-black flex 
  justify-center items-center rounded-lg text-2xl font-bold  border-b-3 border-sky-900 shadow-lg" onClick={handleClick}>  
      {props.value}
    </button>
  )
}

export default Die

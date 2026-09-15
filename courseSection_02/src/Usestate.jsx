import React from 'react'

const Usestate = () => {
// let[isImportant,setIsImportant] = React.useState("yes")
// function handleClick(){
//    setIsImportant ("no")
// }
 const [count,setCount] =React.useState(0)
 function add(){
  console.log("addddd")
  setCount (prevCount => prevCount+1)
 }
 function del() {
    console.log("del")

    setCount(prevCount => Math.max(prevCount - 1, 0))
  }
  return (
    <div>
        <h1>what are you doing today</h1>
    <div className="counter">

      <button className ="minus border-5 border-blue-300 p-5 w-15 ml-50 " aria-label="Decrease count" onClick={del}>
        -
        </button>
        <h2 className="value border-3 border-red-300 p-5 w-15 ml-50">{count}</h2>
        <button className ="plus border-5 border-green-300 p-5 w-15 ml-50" aria-label="Increase count" onClick={add}>
+
        </button>
    </div>
  
    </div>
  )
}

export default Usestate

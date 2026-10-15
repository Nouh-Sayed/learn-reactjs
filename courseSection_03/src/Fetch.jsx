import React from 'react'

const Fetch = () => {

const [data, setData] = React.useState(null)
const [count, setCount] = React.useState(0)
   console.log("render")  
React.useEffect(() => {
      console.log("function ran")  
    fetch("https://swapi.dev/api/people/1/")
    .then (res=> res.json())
    .then (data =>setData(data))
}, [count])

function add() {
  setCount (prevCount => prevCount +1)
}
  return (
    <div>
   
      <h2>Count: {count}</h2>
  <button onClick={add}  className="bg-blue-500 text-white px-4 py-2 rounded">
    add
  </button> 
  <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Fetch

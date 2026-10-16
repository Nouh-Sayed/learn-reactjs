// import React from 'react'

// const Fetch = () => {

// const [data, setData] = React.useState(null)
// const [count, setCount] = React.useState(0)

// React.useEffect(() => {
//       console.log("function ran")  
//     fetch("https://swapi.dev/api/planets/?page=2")
//     .then (res=> res.json())
//     .then (data =>setData(data))
// }, [])







// function add() {
//   setCount (prevCount => prevCount +1)
// }
//   return (
//     <div>
   
//       <h2>Count: {count}</h2>
//   <button onClick={add}  className="bg-blue-500 text-white px-4 py-2 rounded">
//     add
//   </button> 
//   <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   )
// }

// export default Fetch





import React from 'react'
import WindowTracker from './WindowTracker'

const Fetch = () => {

const [show, setShow] = React.useState(true)
const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
function toggle () {
  setShow(prevShow => !prevShow)
}
React.useEffect(() => {
  console.log("effect ran") 
    window.addEventListener("resize", () => {
      console.log("resized")
    })
}, [])
  return (

    <div>
<button onClick={toggle} className="bg-blue-500 text-white px-4 py-2 rounded">
  toggle window tracker
</button>
<WindowTracker />
    </div>
  )
}

export default Fetch

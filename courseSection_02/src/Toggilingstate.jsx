import React from 'react'

const Toggilingstate = () => {


const  [isgoingout , setisgoingout]= React.useState(Boolean);

let answar= isgoingout ? 'yes':'no';
function isgo()
{
    setisgoingout (true)
}
  return (

     <div>
        <h1>what are you doing today</h1>


      <button className ="value border-5 border-blue-300 p-5 w-15 ml-50 " onClick={setisgoingout}>
       yes
        </button>
       </div>
  ) 
}

export default Toggilingstate

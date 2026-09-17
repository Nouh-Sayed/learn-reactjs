import React from 'react'

const Toggilingstate = () => {


const  [isgoingout , setisgoingout]= React.useState(Boolean);


function isgo()
{
    setisgoingout (prev => !prev)
}
  return (

     <div>
        <h1>what are you doing today</h1>


      <button className ="value border-5 border-blue-300 p-5 w-15 ml-50 " onClick={isgo}>
       {isgoingout ? 'yes':'no'}
        </button>
       </div>
  ) 
}

export default Toggilingstate

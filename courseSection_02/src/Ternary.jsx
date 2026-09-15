import React from 'react'

const Ternary = () => {
    const isgoingout= true
    let answar =isgoingout? 'YAAAAAAAAA': "NPPPPPP";
    // if (isgoingout === true){
    //     answar= "yessssssssss"
    // } 
    // else{
    //     answar= "noooo"
    // }
// ------------------------------------------------
function checkGoingOut(value){
    return value ?" outsideeL" : "insideeee"
}

  return (
    <div> 

   <h1>{checkGoingOut(true)}</h1>
    <h1>{checkGoingOut(false)}</h1> 
    <h1>{checkGoingOut(isgoingout)}</h1>

      <h1>
        {answar }
      </h1>
    </div>
  )
}

export default Ternary

// import React from 'react'

// const Jokes = (props) => {
//    const [isShown,setIsShown] = React.useState(false)
//    function toggleShown ()
//     {
// setIsShown (prevShown => !prevShown)
//     }
  
//   return (
//     <div>
      
//       <h3 className="text-lg font-bold">setup:<br /> {props.setup}</h3>
     
//      {isShown &&  <p className="text-gray-600">Punchline:<br /> {props.punchline}</p> } 
//      <button className='border' onClick={toggleShown}>{isShown ? "hide Punchline " :"show Punchline"}</button>
//      {/* <h3 className="text-red-500">Writer: {props.writer}</h3>
//      <p className="text-gray-600">Rating: {props.rate}</p>
//      <p className="text-gray-600">Is Pun: {props.isPun ? "Yes" : "No"}</p>
//      <p className="text-gray-600">comments: {props.comments}</p>
//      <hr /> */}
//     </div>
//   )
// }

// export default Jokes

import React from "react";

const Jokes = (props) => {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }

  return (
    <div>
      <h3>
        Setup:
        <br />
        {props.setup}
      </h3>

      {isShown && (
        <p>
          Punchline:
          <br />
          {props.punchline}
        </p>
      )}

      <button   className="border" onClick={toggleShown}>
        {isShown ? "Hide Punchline" : "Show Punchline"}
      </button>
    </div>
  );
};

export default Jokes;
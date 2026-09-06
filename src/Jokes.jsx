import React from 'react'

const Jokes = (props) => {
  return (
    <div>
      
      <h3 className="text-lg font-bold">setup:<br /> {props.setup}</h3>
      <p className="text-gray-600">Punchline:<br /> {props.punchline}</p>  
     <h3 className="text-red-500">Writer: {props.writer}</h3>
     <p className="text-gray-600">Rating: {props.rate}</p>
     <p className="text-gray-600">Is Pun: {props.isPun ? "Yes" : "No"}</p>
     <p className="text-gray-600">comments: {props.comments}</p>
     <hr />
    </div>
  )
}

export default Jokes

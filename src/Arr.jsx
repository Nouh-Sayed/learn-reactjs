import React from 'react'

const Arr = () => {
    
    const ninjaTurtle = ["nouh", "leonardo", "raphael", "michelangelo"];
  const turtle = ninjaTurtle.map((turtle) => (
 turtle[0].toUpperCase() + turtle.slice(1)));

  return (
    <div>

 

  
{ninjaTurtle.map((turtle) => (
  <h3 key={turtle}> {turtle} </h3>
))}
  <hr />
{turtle.map((turtle) => (
  <h3 key={turtle}> {turtle} </h3>
))}

    </div>
  )
}

export default Arr

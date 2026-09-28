import React from 'react'


const Count = () => {

const [count, setCount] = React.useState(0);

function subnum (){
setCount((prevCount) => prevCount - 1);
}
function addnum (){
setCount((prevCount) => prevCount + 1);
  
}

  return (
    <div className='counter m-50'>
      <button className='border p-3' onClick={subnum}> - </button>
      <h2>{count}</h2>
      <button className='border p-3 ' onClick={addnum}> + </button>
    </div>
  )
}

export default Count

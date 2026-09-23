import React from "react";
import {useState} from "react";

const Stateprec = () => {

// eslint-disable-next-line no-undef
const [names,setNames] = React.useState([]);
const [fvalue,setFvlaue] = useState("");
    
  function handlename() {
    setNames((prevNames) => [...prevNames, fvalue]);
    setFvlaue("");
  }


  return (
    <div>
      <main>
      <input type="text" className='border-2 border-amber-600  m-5'placeholder="first name " value={fvalue} onChange={(e) =>setFvlaue(e.target.value)} />
      <input type="text" className='border-2 border-amber-600  m-5 ' placeholder="last name " />
      <button className='border-2 border-amber-600  m-5 ' onClick={handlename}>add name </button>
    </main>
   <ul> {names.map((name,index)=>(
    <li key={index}>{name}</li>))}</ul>
    </div>
  )
}

export default Stateprec

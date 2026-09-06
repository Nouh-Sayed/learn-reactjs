import React from "react";
const nums = [1, 2, 3, 4, 5];

const names = ["john", "sayed", "ahmed", "nouh"];
const namess = names.map((name) => name[0].toUpperCase() + name.slice(1));

const bokmon = ["jan", "feb", "mar", "apr", "may"];
const mon = bokmon.map((mon) => `<p>${mon}</p>`);
const Tasks = () => {
  return (
    <div>
        <h1>Task 1 </h1>
      {nums.map((num) => (
        <h3 key={num}> {num * num} </h3>
      ))}
       <br />
      <hr />
      <br />
<h1>Task 2 </h1>
      {namess.map((name) => (
        <h3 key={name}> {name} </h3>
      ))}
       <br />
      <hr />
      <br />
      <h1>Task 3 </h1>
        <h3 > {mon} </h3>
     
    </div>
  );
};

export default Tasks;

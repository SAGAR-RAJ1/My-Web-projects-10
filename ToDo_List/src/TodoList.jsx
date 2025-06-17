import { useState } from "react";
export default function TodoList() {
  const [Todo, setTodo] = useState([]);
  const [New, setNew] = useState("");
  function btnclick() {
    // console.log("button click to add todo")
    Todo.push(New)
//Address re refrence krne k liye spread operator use krte h kuki change detect hoga react ko tb update krega
// setTodo([...Todo,New])  aise v likh shkte {array or object same case pdega}
    setTodo([...Todo]);
    setNew("")
  }
  let updatevalue = (event) => {
    // console.log(event.target)
    setNew(event.target.value);
  };
  return (
    <div>
      <input placeholder="Add a Task" onChange={updatevalue} value={New} />
      <button onClick={btnclick}>Add</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h3>Tasks</h3>
      <ul>
        {Todo.map((a) => (
          <li>{a}</li>
        ))}
      </ul>
    </div>
  );
}

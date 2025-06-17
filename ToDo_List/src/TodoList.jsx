import { useState } from "react";
export default function TodoList() {
  const [Todo, setTodo] = useState(["Sagar will made this todo app"]);
  const [New, setNew] = useState("");
  function btnclick() {
    // console.log("button click to add todo")
    

    setTodo([...Todo,New]);
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

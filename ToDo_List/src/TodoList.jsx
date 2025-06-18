import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  const [Todo, setTodo] = useState([{task:"Sample Task",id: uuidv4()}]);
  const [New, setNew] = useState("");
  function btnclick() {
    // console.log("button click to add todo")
    // Todo.push({task:New , id:uuidv4()})
// //Address re refrence krne k liye spread operator use krte h kuki change detect hoga react ko tb update krega
// // setTodo([...Todo,New])  aise v likh shkte {array or object same case pdega}
//     setTodo([...Todo]);

//Better method to do it
setTodo((prevTodo)=>{
    return [...prevTodo,{task:New,id:uuidv4()}]
  })

    setNew("")
  }
  function DeleteTodo(key){
   
        // console.log(key)
        let copy = Todo.filter((todo)=>(todo.id!=key))
        setTodo(copy);
    
  }

  function HandleKeyPress(event) {
    if (event.key === "Enter") {
      btnclick();
    }
  }
  let updatevalue = (event) => {
    // console.log(event.target)
    setNew(event.target.value);
  };
  return (
    <div>
      <input placeholder="Add a Task" onChange={updatevalue} value={New} onKeyDown={HandleKeyPress}/>
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
          <li key={a.id}>
            <span>{a.task} </span>
            <button onClick={()=>DeleteTodo(a.id)}>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  );
}

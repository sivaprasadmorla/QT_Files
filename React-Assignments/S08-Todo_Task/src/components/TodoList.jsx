import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = () => {
    let newItem = {
      title: text,
      id: new Date().toDateString() + text,
    };
    setTodo([...todo, newItem]);
    setText("");
  };

  const handleDelete = (id) => {
    const updatedTodo = todo.filter((item) => item.id !== id);
    setTodo(updatedTodo);
  };

  const handleEditTodo=(id,newTodo)=>{
    let updatedTodo = todo.map((element)=>{
      if(element.id === id){
          return {...element,title : newTodo}
      }
      return element;
    })
    setTodo(updatedTodo)
  }


  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        <TodoItem todo={todo} handleDelete={handleDelete} handleEditTodo={handleEditTodo}/>
      </ul>
    </div>
  );
};

export default TodoList;

import React from "react";
import { emitter } from "./Notification";


const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));

    
  };
 
  const completeHandler = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item, completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={() => {completeHandler(todo)
            emitter.emit("NOTIFICATION","To-do is completed succcesfully")}} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            

            <button onClick={() => {deleteHandler(todo)  
              emitter.emit("NOTIFICATION","To-do is removed succcesfully")
              }} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
  );
};

export default Todo;
import React from 'react'

import Todoitom from "../MyComponents/Todoitom";
const Todos = (props) => {
console.log(props);
  return (
    <div className="container">
    <h3 className="text-center my-3">Todo List</h3>
    {props.todos.length===0? "No Todos to display":
    props.todos.map((todo)=>{
      return <Todoitom todo={todo} key={todo.sno} onDelete={props.onDelete}/>
    
    })
   }
    </div>
  )
}

export default Todos

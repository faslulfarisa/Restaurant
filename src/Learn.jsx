import { useState } from 'react'
import './index.css'
import Todo from "./Components/Todo"

const Learn = () => {
    const [todoList,setTodoList]=useState([]);
    const [todo,setTodo]=useState("");
    return (
        <div className="container">
            <h1><center>Todos</center></h1>
            <div className="input-section">
            <input type="text" value={todo} 
            onChange={(e)=>{
                setTodo(e.target.value);
            }}></input>
             <button className="todo-button"
            onClick={()=>{
                console.log(todoList);
                if(!todo)return
                setTodoList(prev=>[...prev,{text:todo,status:false}]);
                setTodo("")

            }}>ADD</button>
            </div>
          
            {todoList.map((data,i)=>
            <Todo
            {...data}
            key={i}
            i={i}
            setTodoList={setTodoList}
            todoList={todoList}
            />
            )}
        </div>
    )
}

export default Learn

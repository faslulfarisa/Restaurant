import { useState } from 'react'

const Learn = () => {
    const [todoList,setTodoList]=useState([]);
    const [todo,setTodo]=useState("");
    return (
        <div>
            <input type="text" value={todo}
            onChange={(e)=>{
                setTodo(e.target.value);
            }}></input>
            <button
            onClick={()=>{
                setTodoList(prev=>[...prev,todo]);
                setTodo("")

            }}>Add</button>
            {todoList.map((value,i)=>
            <div
            onClick={()=>{
                setTodoList(todoList.filter(
                  (_value,index)=>i!==index  
                ))
            }}>{value}</div>
            )}
        </div>
    )
}

export default Learn

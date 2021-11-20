import { useState } from 'react'
import './index.css'
import Todo from "./Components/Todo"

const Learn = () => {
    const [todoList,setTodoList]=useState([]);
    const [todo,setTodo]=useState("");
    const[duplicateError,setDuplicateError]=useState(false);

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
                if(!todo)return
                if(todoList.filter(({text})=>todo.toLowerCase() === text.toLowerCase()).length){
                    setDuplicateError(true);
                    setTimeout(()=>{
                        setDuplicateError(false);
                    },1500)
                    return
                }
                setTodoList(prev=>[...prev,{
                    text:todo,
                    status:false,
                    isEditMode:false}]);
                setTodo("")

            }}>ADD</button>
            </div>
            {duplicateError && <div className="duplicate-error">
                Already Exists
            </div>}
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

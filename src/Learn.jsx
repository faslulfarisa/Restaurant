import {useState} from 'react'

const Learn = () => {
    const [todoList,setTodoList]=useState([]);
    const[todo,setTodo]=useState("");
    return (
        <div>
            <input type="text" value={todo} onChange={(e)=>{
                setTodo(e.target.value);
                }}/>
            <button 
            onClick={()=>{
                setTodoList(prev=>[...prev,todo]);
                setTodo("")
            }}
               >Submit</button>
            {todoList.map((value,i)=><div 
            key={i}
            onClick={()=>{
                setTodoList(todoList.filter(
                    (_value,index)=> i!==index
                ))
            }}
            >{value}</div>)}
        </div>
     
    )
}

export default Learn

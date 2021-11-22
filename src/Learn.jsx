import { useState,useEffect} from 'react'
import './index.css'
import Todo from "./Components/Todo"
import postData from './Services/postData';

const Learn = ({history}) => {
    const user=localStorage.getItem("userName");
    const [todoList,setTodoList]=useState([]);
    const [todo,setTodo]=useState("");
    const [duplicateError,setDuplicateError]=useState(false);
  
    useEffect(() => {
        fetch(`http://192.168.1.42:8086/todos/${user}`)
        .then((result)=>result.json())
        .then((value)=>{
            if(!value.length){
                localStorage.removeItem("userName");
                history.push("/learn");
                return;
            }
            setTodoList(value[0].todos.map(({text,status})=>{
                return{
                    text,
                    status,
                    isEditMode:false
                }
            }));
        })
    },
    []);
    if (!localStorage.getItem("userName")){
        history.push("/learn/login")
    }
    return (
        <div className="container">
            <div className="todo-add">
            <h1><center>Todos ({user})</center></h1>
            <div className="logout-section">
            <button onClick={()=>{
                localStorage.removeItem("userName");
                history.push("/learn/login");
            }}>Logout</button>
            </div>
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
                postData("/todos",{
                    user,
                    todos:[
                        ...todoList.map(({text,status})=>{
                            return{
                                text,
                                status
                            }
                        }),
                        {
                            text:todo,
                            status:false
                        }

                    ]
                });
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
            <ul>
            {todoList.map((data,i)=>
            <Todo
            {...data}
            key={i}
            i={i}
            setTodoList={setTodoList}
            todoList={todoList}
            user={user}
            />
            )}
            </ul>
            </div>
        </div>
    )
}

export default Learn

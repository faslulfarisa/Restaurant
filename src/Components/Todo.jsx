const Todo=({
    status,
    text,
    i,
    setTodoList,
    todoList,
})=>{
    return(
        <li className="todo-item"
            key={i}>
               <div className={`status-circle ${status? "status-circle--active": ""}`}
               onClick={
                   ()=>{
                       setTodoList(
                           prev=>{
                               let newTodoList=[...prev];
                               let newTodo={...newTodoList[i]};
                               newTodo.status=!newTodo.status;
                               newTodoList[i]=newTodo;
                               return newTodoList
                           }
                       )
                   }
               }
               />
                <div className="todo-text">
                   {text}  
                </div>
                <div
                   onClick={()=>{ 
                    setTodoList(todoList.filter(
                      (_value,index)=>i!==index  
                    ))
                    }}
                    className="todo-close-button"/>
                  <div  className="todo-edit-button"/>
                   
               
            </li>
    )}

 export default Todo
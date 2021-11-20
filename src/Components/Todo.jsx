const Todo=({
    status,
    text,
    i,
    setTodoList,
    todoList,
    isEditMode=true,
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
               {isEditMode?
               <>
               <div className="todo-edit-text-container">
                   <input type="text" className="todo-edit-text-field" value={text}/>
                   <div className="todo-edit-cancel-button"/>
               </div>
               <div className="todo-edit-save-button"/>
               </>
               :
               <>
                <div className="todo-text">
                   {text}  
                </div>
                <div  className="todo-edit-button"/>
                </>}
                <div
                   onClick={()=>{ 
                    setTodoList(todoList.filter(
                      (_value,index)=>i!==index  
                    ))
                    }}
                    className="todo-close-button"/>   
            </li>
    )}

 export default Todo
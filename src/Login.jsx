import { useState} from "react";
import {Link} from 'react-router-dom';
const CreateUser = ({history}) => {

    const[userName,setUserName]=useState("");
    const[errorTextVisibility,setErrorTextVisibility]=useState(false);
    const loginUser=(e)=>{
        e.preventDefault();
        if(!userName)return 
        fetch(`http://192.168.1.42:8086/todos/${userName}`)
        .then((result)=>result.json())
        .then((value)=>{
            if(!value.length){
                setErrorTextVisibility(true);
                setTimeout(()=>{
                    setErrorTextVisibility(false);
                },1500)
                setUserName("");
                return;
            }
            localStorage.setItem("userName",userName);
            history.push("/learn/user");  
        })     
    }
    if (localStorage.getItem("userName")){
        history.push("/learn/user");
    }
    return (
            <div className="container">
                <h1>Login User</h1> 
                <form style={{
                    display:"grid",
                    gridTemplateColumns:"auto auto",
                    justifyContent:"center"
                }}

                onSubmit={loginUser}
                >
                    <input type="text" value={userName}
                    onChange={
                        (e)=>{setUserName(e.target.value);
                        }
                    }></input>
                    <button type="submit">Submit</button>      
                </form>
                {errorTextVisibility &&<div className="error-text">
                Invalid UserName
                </div>}
                <div className="link-section">
                    Create New User
                    <Link to="/learn" style={{
                        marginLeft:"5px"
                    }}>Create User</Link>
                </div>
            </div>
    )
}

export default CreateUser

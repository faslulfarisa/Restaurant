import { useState} from "react";
import postData from "./Services/postData";
import {Link} from "react-router-dom";

const CreateUser = ({history}) => {

    const[userName,setUserName]=useState("");
    const[errorTextVisibility,setErrorTextVisibility]=useState(false);

    const createNewUser=(e)=>{
        e.preventDefault();
        if(!userName)return
        fetch(`http://192.168.1.42:8086/todos/${userName}`)
        .then((result)=>result.json())
        .then((value)=>{
            if(value.length){
                setErrorTextVisibility(true);
                setTimeout(()=>{
                    setErrorTextVisibility(false);
                },1500)
                setUserName("");
                return;
            }
        postData("/todos",{
            user:userName,
            todos:[]
        }).then(result=>{
            if(result){
                localStorage.setItem("userName",userName);
                history.push(`/learn/user`);
            }

        })
    })     
        
    }
    if (localStorage.getItem("userName")){
        history.push("/learn/user");
    }
    return (
            <div className="container">
                <h1>Create User</h1> 
                <form style={{
                    display:"grid",
                    gridTemplateColumns:"auto auto",
                    justifyContent:"center"
                }}

                onSubmit={createNewUser}
                >
                    <input type="text" value={userName}
                    onChange={
                        (e)=>{setUserName(e.target.value);
                        }
                    }></input>
                    <button type="submit">Submit</button>      
                </form>
                {errorTextVisibility &&<div className="error-text">
                User Already Exists!!
                </div>}

                <div className="link-section">
                    Already have an account
                    <Link to="/learn/login">Click Here!</Link>
                </div>
            </div>
    )
}

export default CreateUser

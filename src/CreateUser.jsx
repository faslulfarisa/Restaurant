import { useState} from "react";
import postData from "./Services/postData";
const CreateUser = ({history}) => {

    const[userName,setUserName]=useState("");
    const createNewUser=(e)=>{
        e.preventDefault();
        postData("/todos",{
            user:userName,
            todos:[]
        }).then(result=>{
            if(result){
                history.push(`/learn/${userName}`);
            }

        })
             
        console.log("New User ",userName)
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
            </div>
    )
}

export default CreateUser

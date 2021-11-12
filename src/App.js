import {useState} from 'react';
import './App.css';

function App() {
  const[count,setCount]=useState(0);
  const[val,setVal]=useState(1);

  
  return (
    <div className="App">
       <div className="count_button"
       onClick={
        ()=>{
          setCount(count-1);
        }
      }>-</div>
       <div className="count_value">{count}</div>
     
       <div className="count_button"
       onClick={
         ()=>{
           setCount(count+1);
         }
       }>+</div>      

       <div className="count_button"
       onClick={
        ()=>{
          setVal(val*2);
        }
        }>*</div>
       <div className="count_value">{val}</div>
     
       <div className="count_button"
       onClick={
         ()=>{
           setVal(val/2);
         }
       }>/</div> 
       <Heading number={2}/>     
    </div>
  );
}

const Heading = ({number})=>{
  return(
    <h1>Header {number} </h1>
  )
}
export default App;

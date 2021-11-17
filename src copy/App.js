import {useState} from 'react';
import './App.css';
import ProductComponent from './ProductComponent'

function App() {

  const[count,setCount]=useState(0);

  return(
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
       <ProductComponent/>
    </div>
  )
}


export default App;

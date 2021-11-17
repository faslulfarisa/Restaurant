import {useState} from 'react'

const ProductComponent = () => {
    const[val,setVal]=useState(1);
    return (
        <>
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
         }}></div>
        </>
    )
}

export default ProductComponent

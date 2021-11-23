import { useEffect } from "react"


const AsyncSum = () => {
    
    useEffect(async() =>{
        const myPromise = (array) =>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    let sum=0;
                    array.forEach(element=> {
                        sum+=element;
                    });
                    resolve(sum);
                },1000);
               
            })
        }
        const result=await myPromise([1,2,3,4,5]);
        console.log(result)
    },[]);
    return(
        <div>
            <h1>hello</h1>
        </div>
    )
    
}

export default AsyncSum

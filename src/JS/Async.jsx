import React, { useEffect } from 'react'

const Async = () => {
    useEffect(async() =>{
        const myPromise = (a,b) =>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    let c = a + "," + b;
                    reject({error:true});
                },1500);
               
            })
        }
            
        // myPromise("Hello","There")
        // .then((result)=>{
        //     console.log(result);
        // }).catch(result=>{
        //     console.log("catch",result);
        // })
        try{
            const result = await myPromise("Hello","There");
            console.log(result)
        }catch(error){
            console.log("catch",error)
        }
        
        },[]);
    return (
        <div>
            <h1>Promise , Async and Await</h1>
        </div>
    )
}

export default Async

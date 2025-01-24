import { useState } from "react"


const Count=()=>{

    var [value,setvalue]=useState("0")
   
    function handleinc(){
        setvalue(value++)
    }
    
    function handledec(){
        setvalue(value--)
    }
   
    function reset()
    {
        setvalue("0")
    }


    return(
    <>
    
    
    <div className="one">
        
        <h1>{value}</h1>
        <div className="two">
            
        <button onClick={handleinc}>Increment</button>
        <button onClick={handledec} >Decrement</button>
        <button onClick={reset}>Reset</button>

        </div>

    </div>
    </>)
}
export default Count
import { useState } from "react"

export default function Counter(){

    const [Count,setCount]=useState(0)

    const handleAdd=()=>{
        const newCount=Count+1;
        setCount(newCount)
    }
     const handleNoAdd=()=>{
        const newCount=Count-1;
        setCount(newCount)
     }
    return(
        <div style={{border:'3px solid red'}}>
            <h3>Counter: {Count}</h3>
            <button onClick={handleAdd}>Add</button>

            <button onClick={handleNoAdd}>No Add</button>
        </div>
    )
}
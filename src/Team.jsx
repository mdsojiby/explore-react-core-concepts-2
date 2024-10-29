import { useState } from "react"

export default function Team(){

    const [team,setTeam]=useState(11)

    const addPlayer=()=>{
        const newPlayer=team+1;
        setTeam(newPlayer)
    }

    const removePlayer=()=>{
        const newPlayer=team-1;
        setTeam(newPlayer);
    }

    const teamStyle={
        border:'2px solid yellow',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
    return(
        <div style={teamStyle}>
            <h2>Players:{team}</h2>
            <button onClick={addPlayer}>Add</button>
            <button onClick={removePlayer}>Remove</button>
        </div>
    )
}
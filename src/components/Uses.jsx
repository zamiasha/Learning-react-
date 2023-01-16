import React from "react";

function Uses(props)  {
     return (
        <div>
         <h3>   Uses parent Component </h3>
         <button onClick={()=>props.data()}>Call data function</button>
        </div>
     )
}

export default Uses;
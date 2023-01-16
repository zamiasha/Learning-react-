import React from "react";

function MemberUses(props)  {
     return (
        <div>
         <h3> MemberUses Child  Component </h3>
         <button onClick={()=>props.data()}>Call data function</button>
        </div>
     )
}

export default MemberUses;
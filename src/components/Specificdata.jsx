import React, { useEffect, useState } from "react";


function Specificdata(props) {
    
    
    useEffect(() => {
        alert(" counter" + props.counter);
        }, [props.counter] );
         

    return (
        <div>
           
        <h3>Conter Props :  {props.counter} </h3>
        <h3>Data Props : {props.data} </h3> 
        </div>
    )
}


export default Specificdata;
import React, { useEffect, useState, usestate} from 'react';
// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Specificdata from './components/Specificdata';
// import Login from './components/Login';



function App() { 
    
    const [data, setData] = useState(0);
        const [counter, setCounter] = useState(100);
     
       useEffect(() => {
        console.log("Called with data states");
        }, [data] );
         
        useEffect(() => {
            console.log("Called with counter states");
            }, [counter] );
             

    return (
        <div className="App"> 
      
         
         
        <Specificdata counter={counter} data={data} />
       
           <button onClick={() => setCounter(counter + 1)}>update the counter state</button>
           <button onClick={() => setData(data + 1)}>update the data state </button>


        </div>
    )
}


   


export default App;
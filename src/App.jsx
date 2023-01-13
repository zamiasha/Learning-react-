import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import User  from './components/User';

function App() {
    
   const [status, setStatus]=React.useState(false)

    return ( 
        <div className="App">
        {
            status?
            <h1>Hide and  show ) 😮</h1> : null
        }

       
        {/* <button onClick={()=>setStatus(false)}>hide</button>
        <button onClick={()=>setStatus(true)}>show</button> */}
        <button onClick={()=>setStatus(!status)}>Toogle</button>

       
       </div>
    );

}



export default App;
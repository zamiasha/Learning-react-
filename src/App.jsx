import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import User  from './components/User';

function App() {
    
    
    
    
    const [name,setName]=useState("Ali")


    return ( 
        <div className="App">

        <h1>Props in React😯) </h1>
        <Student name={name} /> 
       <button onClick={()=>{setName("Zaman")}}>Update Name</button>
       
       
       




    
       
       </div>
    );

}



export default App;
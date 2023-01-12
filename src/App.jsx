import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import User  from './components/User';

function App() {


    const [data, setData]=useState(0)
    function updateData() {
        setData(data )
    }
    setInterval(()=> {
        console.log("");
    },100000)
    console.warn("__________________");
    return ( 
        <div className="App">
        <h1>{data} </h1>
        <button onClick={updateData}>Update Date</button>


    
    <Student name={"Zaman"} email="zaman@gmail.com"/>
    
        
       
       </div>
    );

}



export default App;
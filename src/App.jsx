import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import User  from './components/User';

function App() {


    const [data, setData]=useState(0)
    function updateData() {
        setData(data + 1)
    }
    setInterval(()=> {
        console.log("");
    })
    console.warn("__________________");
    return ( 
        <div className="App">
        <h1>{data} </h1>
        <button onClick={updateData}>Update Date</button>


    
    <Student name={"Zaman"}  />
    <Student name={"azan"}  />
        
       
       </div>
    );

}



export default App;
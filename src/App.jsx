import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User';

function App() {

    const [data, setData]=useState("ali")
    function updateData() {
        setData("zaman")
    }
    console.warn("__________________");
    return ( 
        <div className="App">
        <h1>{data} </h1>
        <button onClick={updateData}>Update Date</button>
        <User />
       
       </div>
    );
}



export default App;
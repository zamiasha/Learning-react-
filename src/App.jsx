import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import User from './components/User';

function App() {

    const [data, setData]=useState(0)
    function updateData() {
        setData(data + 1)
    }
    console.warn("__________________");
    return ( 
        <div className="App">
        <h1>{data} </h1>
        <button onClick={updateData}>Update Date</button>
        
       
       </div>
    );
}



export default App;
import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import User  from './components/User';

function App() {
    
    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)
    


    function getData(val) {
        console.warn(val.target.value)
        setData(val.target.value)
    }

    return ( 
        <div className="App">

        <h1>Get input box value😯) </h1>
        {
            print?
            <h2>{data}</h2>
            :null
        }
        <input type="text" onChange={getData} />
        <button onClick={()=>setPrint(true)} >Print Data</button>
        

       
       </div>
    );

}



export default App;
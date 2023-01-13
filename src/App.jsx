import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
    
    const [name, setName]=useState("");
    const [tnc, setTnc]=useState(false);
    const [intrest, setIntrest]=useState("");
   function getFormData(e) {
    console.warn(name,tnc,intrest)
    e.preventDefault()
   }

    return ( 
        <div className="App">
        <h1>Handle from in React ) 😏</h1>

        <form onSubmit={getFormData}>
            <input type="text" placeholder="Enter name"  onChange={(e)=>setName(e.target.value)}/> <br /> <br />
            <select onChange={(e)=>setIntrest(e.target.value)}>
            <option>Select Option </option>
                <option>Captain America</option>
                <option>Avengers</option>
                <option>Fast and furious</option>
            </select> <br /> <br />
            <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)}/> <span>Accept terms and conditions</span>
            <br /> <br />
            <button type='submit'>Submit</button>
        </form> 
       </div>
    );

}



export default App;
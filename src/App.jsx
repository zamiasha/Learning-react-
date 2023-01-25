// import React from 'react';
import React, {useState, use} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Login from './components/Login';






function App() { 
         
    const [data, setData] = useState("zaman");
    return (
        <div className="App">         
              <h1>{data}</h1>
        
              <button onClick={() => setData("sher")}>update data </button>
        </div>
    )

}


   


export default App;
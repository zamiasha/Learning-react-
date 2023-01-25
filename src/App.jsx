// import React from 'react';
import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Login from './components/Login';






function App() { 
      const [count, setCount] = useState(0)

      useEffect(() => {
        const interval = setInterval(() => {
          setCount(count + 1);
        }, 1000);
        return () => clearInterval(interval);
      }, [count]);
      
   
    return (
        <div className="App">         
              <h1> use Effect  component   {count} </h1> 
              <button onClick={() => setCount(count + 1)}>Counter  changer  </button>       
        </div>
    )

}


   


export default App;
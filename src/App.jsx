// import React from 'react';
import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Login from './components/Login';






function App() { 
      
      const [data, setData] = useState(10);
      const [count, setCount] = useEffect(100);

   //code merge may its possible 
   useEffect(()=> {
    console.log("use effect called ")
   })

    return (
        <div className="App">         
              <h1> Count : {count}  </h1> 
               

              <button onclick={() => setCount(count + 1 )  }>update counnt</button>     
        </div>
    )

}


   


export default App;
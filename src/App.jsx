import React, {useState} from 'react';
// import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Login from './components/Login';
// import Uses from './components/Uses'
// import MemberUses from './components/MemberUses'
// import Constructtrlifecycle from './components/Constructtrlifecycle';
import Renderlifecycle from './components/Renderlifecycle';




function App() { 
         
    
   const [hide, setHide] = useState("ali");

    return (
        <div className="App">         
              <h1>Lifecycle Methode</h1>

              <Renderlifecycle  />



              
        </div>
    )

}



export default App;
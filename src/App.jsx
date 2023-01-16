import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Uses from './components/Uses'
import MemberUses from './components/MemberUses'


function App() {
    
       function getData() {
        alert("hellow from app")
       }
    return ( 
        <div className="App">
        <h1>Pass Function as Props ) 😯</h1>

        <Uses data={getData} />

        <div className="Member-Uses">
        <MemberUses data={getData} />
        </div>
        

      
       </div>
    );

}



export default App;
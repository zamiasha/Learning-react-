import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import User  from './components/User';

function App() {


    return ( 
        <div className="App">

        <h1>Props in React😯) </h1>
        
          
    
    <Student name="Zaman" email="@gmail.com"/>
    <Student name="haseeb" email="@gmail.com"/>    
    <Student name="asad" email="@gmail.com"/>
    
        
       
       </div>
    );

}



export default App;
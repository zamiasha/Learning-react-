import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import User  from './components/User';

function App() {


    return ( 
        <div className="App">

        <h1>Props in React😯) </h1>
        
          
    
    <Student name="Zaman" email="@gmail.com"  address="punjab" phone="123456789" />
    <Student name="haseeb" email="@gmail.com" address="lahore" phone="987654321"/>    
    <Student name="asad" email="@gmail.com" address="layyah" phone="456321789"/>
    
        
       
       </div>
    );

}



export default App;
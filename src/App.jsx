// import React, { useEffect, useState, usestate} from 'react';
import React from 'react';
import "./custom.css";
import style from './Custom.module.css'
// import logo from './logo.svg';
import './App.css';
// import { Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import De from './components/De'
// import Login from './components/Login';



function App() { 
      
   const student = ['user1', 'user2', 'user3', 'zahib'];

  student.map((item)=>{
    console.log("my name is : ", item)
  })
  for (let i=0; i<student.length; i++) {
    console.warn("in for loop my name is :", student[i]) 
  }
    return (
        <div className="App"> 
        <h3>User testing </h3>
        {/* {
          student.map((data)=>
            <h1>Name is : {data}</h1>
          )
        } */}
     
    
        </div>
    )
}

export default App;
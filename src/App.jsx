// import React, { useEffect, useState, usestate} from 'react';
import React from 'react';
import "./custom.css";
import style from './Custom.module.css'
// import logo from './logo.svg';
import './App.css';
// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import De from './components/De'

// import Login from './components/Login';



function App() { 
    
console.log("style???", style);
    return (
        <div className="App"> 
     
       <h1 className='primary'>Style 1  user here </h1>
       <h1 style={{color: 'red',backgroundColor:  'yellow' }}>Style 2  user here </h1>
       <h1 className={style.success}>Style 3  user here </h1>

       <Button onClick={()=> alert("button work ")}>Hello Testing user here</Button>
       <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>

       <De />
      

       


        </div>
    )
}


   


export default App;
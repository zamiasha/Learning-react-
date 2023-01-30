// import React, { useEffect, useState, usestate} from 'react';
import React from 'react';
import "./custom.css"
import style from './Custom.module.css'
// import logo from './logo.svg';
import './App.css';
import Specificdata from './components/Specificdata';
// import Login from './components/Login';



function App() { 
    
console.log("style???", style);
    return (
        <div className="App"> 
     
       <h1 className='primary'>Style 1  user here </h1>
       <h1 style={{color: 'red',backgroundColor:  'yellow' }}>Style 2  user here </h1>
       <h1 className={style.success}>Style 3  user here </h1>


        </div>
    )
}


   


export default App;
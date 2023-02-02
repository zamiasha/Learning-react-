// import React, { useEffect, useState, usestate} from 'react';
import React from 'react';
import "./custom.css";
import style from './Custom.module.css'
// import logo from './logo.svg';
import './App.css';
import userEvent from '@testing-library/user-event';
import { Table } from 'react-bootstrap';
import { useIsRTL } from 'react-bootstrap/esm/ThemeProvider';
// import Button from 'react-bootstrap/Button';
// import De from './components/De'
// import Login from './components/Login';



function App() { 
      
    // const student = ['user1', 'user2', 'user3', 'zahib'];
     const student = [
      {name : "user", email : "user@gmail.com", address : 
      [{ hn:"10", city : "jaapur", country: "pak"},
      { hn:"15", city : "jhaniya", country: "pak"},
      { hn:"99", city : "mardan", country: "pak"},
      { hn:"56", city : "purali", country: "pak"}
    ]},
      {name : "user2", email : "user2@gmail.com", address : 
      [{ hn:"10", city : "jaapur", country: "pak"},
      { hn:"15", city : "jhaniya", country: "pak"},
      { hn:"99", city : "mardan", country: "pak"},
      { hn:"56", city : "purali", country: "pak"}
    ]},
      {name : "user3", email : "user3@gmail.com", address : 
      [{ hn:"10", city : "jaapur", country: "pak"},
      { hn:"15", city : "jhaniya", country: "pak"},
      { hn:"99", city : "mardan", country: "pak"},
      { hn:"56", city : "purali", country: "pak"}
    ]},
      ]
      
    return (
        <div className="App"> 
        <h3>User testing </h3>

        <Table  striped bordered hover>
        <tbody>
          <tr>
              <td>Name</td>
              <td>Email</td>
              <td> {
                student[0].address.map((data)=>
                <tr>
              <td>{data.hn}</td>
              <td>{data.city}</td>
              <td>{data.country}</td>
              </tr>)
              } </td>
            </tr>
         {/* {
          student.map((data,i)=>
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
            </tr>
          )
        } */}
        </tbody>
        {
          student.map((item)=>
          <tr>
              <td>{item.name} </td>
              <td>{item.email}</td>
              <td>Address</td>
            </tr>)
        }
        </Table>
     
    
        </div>
    )
}

export default App;
// import React, { useEffect, useState, usestate} from 'react';
import React from 'react';
import "./custom.css";
import style from './Custom.module.css'
// import logo from './logo.svg';
import './App.css';
import userEvent from '@testing-library/user-event';
import { Table } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import De from './components/De'
// import Login from './components/Login';



function App() { 
      
    // const student = ['user1', 'user2', 'user3', 'zahib'];
     const student = [
      {name : "user", email : "user@gmail.com", phone : "3333"},
      {name : "user2", email : "user2@gmail.com", phone : "888"},
      {name : "user3", email : "user3@gmail.com", phone : "2342"},
      {name : "user4", email : "user4@gmail.com", phone : "1111"}
     ]
      
    return (
        <div className="App"> 
        <h3>User testing </h3>

        <Table  striped bordered hover>
        <tbody>
          <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
         {
          student.map((data,i)=>
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
            </tr>
          )
        }
        </tbody>
        </Table>
     
    
        </div>
    )
}

export default App;
// import React, {useState} from 'react';
import React from 'react';
// import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Login from './components/Login';
// import Uses from './components/Uses'
// import MemberUses from './components/MemberUses'
// import Constructtrlifecycle from './components/Constructtrlifecycle';

// import DidMountlifecycle from './components/DidMountlifecycle'




// testing and  impletation  Comment 
// function App() { 
         
//     return (
//         <div className="App">         
//               <h1>Lifecycle Methode DidMountlifecycle</h1>
              
//         </div>
//     )

// }



 class  App extends React.Component {

    constructor () {
        super();
         console.warn("tetsing start here ");
    } 
    componentDidMount () {
        console.warn("all over  them s")
    }
    render () {
        console.warn("lets finsih ")
        return (
            <div className='App'>
                <h1>
                     life cycle => didmount methode 
                </h1>
            </div>
        )
    }
}


   


export default App;
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
         this.state={
            name:"ali"
         }
    } 
    componentDidMount () {
        console.warn("all over  them s")
    }
    render () {
        console.warn("lets finsih ")
        return (
            <div className='App'>
                <h1 style={{color: 'red'}}>
                     life cycle => didmount methode {this.state.name} 
                </h1>
                <button onClick={() => {this.setState({name:"zamnan"})}} >Update  state content</button>
            </div>
        )
    }
}


   


export default App;
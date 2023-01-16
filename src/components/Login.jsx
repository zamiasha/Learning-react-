import React, { useState } from 'react';



function Login() {


    //states define  code  start here 
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    //states define  code  close  here 

    //submint  button function start here
    function loginHandel(e) {
        if (user.length<3 || password.length<3) {
            alert("type correct values")
        }
        else {
            alert("all good :) ")
        }

        e.preventDefault()
    }
    //submint  button function close here


    //data collect function user handler start here 
    function userHandler(e) {
        let item = e.target.value;
        //added validation
        if (item.length == 3) {
            setUserErr(true);
        } else {
            setUserErr(false);
        }
        setUser(item)
        console.warn(e.target.value)
    }

    //data collect function user handler start here on password 
    function passwordHandler(e) {
        let item = e.target.value;
        //added validation
        if (item.length == 3) {
            setPassErr(true);
        } else {
            setPassErr(false);
        }
        setPassword(item)
        console.warn(e.target.value)
    }


    return (
        <div>
            <h1>login Component Form</h1>
            <form onSubmit={loginHandel}>
                <input type="text" placeholder="Enter User Id" onChange={userHandler} /> {userErr ? <span>User Not Valid</span> : ""}
                <br /><br />
                <input type="password" placeholder="Enter User Password" onChange={passwordHandler} /> {passErr ? <span>Password Not Valid</span> : ""}
                <br /><br />
                <button type="submit">Login</button>
            </form>

        </div>
    )
}

export default Login;
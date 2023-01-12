import React from 'react'
import '../../src/App.css';
function Student ({name,email,address,phone}) {
  return (
        <div className="begin">
            <h1>hi {name} </h1>
            <h2>Email {email} </h2>
            <h3>Living in {address} </h3>
            <h4>Your phone number {phone} </h4>
        </div>

)
}

export default Student;
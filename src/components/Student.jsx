import React from 'react'
import '../../src/App.css';
function Student ({name,email}) {
  return (
        <div className="begin">
            <h1>hi {name} </h1>
            <h1>Email {email} </h1>
        </div>

)
}

export default Student;
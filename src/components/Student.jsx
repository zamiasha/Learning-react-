import React from 'react'

function Student (props) {
    console.log(props)
  return (
    <h1>hi {props.name} </h1>
    <h2>Email : {props.email}</h2>
  )
}

export default Student;
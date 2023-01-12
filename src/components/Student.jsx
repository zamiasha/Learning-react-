import React from 'react'

function Student (props) {
    console.log(props.name)
  return (
    <h1>hi {props.name} </h1>
  )
}

export default Student;
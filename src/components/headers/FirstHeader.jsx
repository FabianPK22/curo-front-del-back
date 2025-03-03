import React from 'react'

const FirstHeader = (props) => {
        
  return (
    <>
    <h1>Web Development curriculum</h1>
    <h2>{props.courses[0].name}</h2>
    </>
  )
}

export default FirstHeader
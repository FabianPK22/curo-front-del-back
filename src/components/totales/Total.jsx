import React from 'react'


const Total = (props) => {
  const sumaTotal = props.courses[0].parts.reduce((total,part) => total + part.exercises,0)
  return (
    
    <p>Total of {sumaTotal} excercises</p>
  )
}

export default Total
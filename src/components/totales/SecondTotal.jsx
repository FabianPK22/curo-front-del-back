import React from 'react'


const SecondTotal = (props) => {
  const sumaTotal = props.courses[1].parts.reduce((total,part) => total + part.exercises,0)

  return (
    
    <p>Total of {sumaTotal} excercises</p>
  )
}

export default SecondTotal
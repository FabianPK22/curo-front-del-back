import Content from './Content'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Course = () => {
  const [course, setCourse] = useState([])
 
  useEffect(() => {
    axios
      .get('http://localhost:3001/course')
      .then(response => {
        setCourse(response.data)
      })
  }, [])
      

  return (
    <>

     <Content courses={course} /> 
   
    </>
  )
}

export default Course
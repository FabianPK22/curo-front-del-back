import Content from './Content'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Course = () => {
  

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
 const [course, setCourse] = useState([])
 
  useEffect(() => {
    axios
      .get(`${API_URL}/course`)
      .then(response => setCourse(response.data))
      .catch(err => console.error(err))
}, [API_URL])

  return (
    <>

     <Content courses={course} /> 
   
    </>
  )
}

export default Course
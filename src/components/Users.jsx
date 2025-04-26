import axios from 'axios'
import { useEffect, useState } from 'react'
import { UsersData } from './UsersData'

const Users = () => {
    
 const API_URL2 = import.meta.env.VITE_TESTING ? import.meta.env.VITE_API_URL  : 'http://localhost:3001'


 const [users, setUsers] = useState([])
 
  useEffect(() => {
    axios
      .get(`${API_URL2}/users`)
      .then(response => setUsers(response.data))
      .catch(err => console.error(err))
}, [API_URL2])

console.log(users[0])

    return (

        <>
        <UsersData users={users}/>
        </>
    )
}

export default Users
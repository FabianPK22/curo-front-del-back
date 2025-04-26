import React from "react"


interface User {
  _id: string
  name: string
  email: string
  password: string
  isActive: boolean
}


export function UsersData({ users }: { users: User[] }) {
   
   
   
   
   
    return (
      <div>
      {users.map(u => (
        <div key={u._id} style={{ marginBottom: 12 }}>
          <strong>Nombre:</strong> {u.name}<br/>
          <strong>Email:</strong> {u.email}<br/>
          <strong>Activo:</strong> {u.isActive ? 'Sí' : 'No'}
        </div>
      ))}
    </div>
    )
  }
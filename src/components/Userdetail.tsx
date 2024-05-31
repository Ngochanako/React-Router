import React from 'react'
import { useParams } from 'react-router-dom'

export default function Userdetail() {
    const users=[
        {
            id:1,
            name:'nnn',
            address:'uegfeygfye'
        },
        {
            id:2,
            name:'nnn',
            address:'uegfeygfye'
        },
        {
            id:3,
            name:'nnn',
            address:'uegfeygfye'
        }
    ]
    const {id}=useParams();
    console.log(1);
    
    let user:any;
    if (id){
        user=users.find(user=>user.id===parseInt(id))
    }
  return (
    <div>
      <h1>User Detail</h1>
            {user ? (
                <div>
                    <p>ID: {user.id}</p>
                    <p>Name: {user.name}</p>
                    <p>Address: {user.address}</p>
                </div>
            ) : (
                <p>User not found</p>
            )}
    </div>
  )
}

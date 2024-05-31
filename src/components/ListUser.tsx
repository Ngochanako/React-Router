import React from 'react'
import { useNavigate,Link } from 'react-router-dom'

export default function ListUser() {
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
    const navigate=useNavigate();
  return (
    <div style={{display:'flex',gap:'30px'}}>
      {users.map(item=>(
        <div key={item.id}>
        <p>id: {item.id}</p>
        <p>name:{item.name}</p>
        <p>address:{item.address}</p>
        <Link to={`/user-detail/${item.id}`}>
                        <button>Xem chi tiết</button>
        </Link>
        </div>
      ))}
    </div>
  )
}

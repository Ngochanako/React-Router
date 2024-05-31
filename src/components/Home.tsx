import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Home() {
  const activeStyle=({isActive}:{isActive:boolean})=>{
    return {
      color:isActive?'white':'',
      backgroundColor:isActive?'red':'',
      padding:'5px'
    }
  }
  const styleB8=({isActive}:{isActive:boolean})=>{
    return {
      color:isActive?'white':'',
      backgroundColor:isActive?'blue':'',
      padding:'5px'
    }
  }
  return (
    <div>
      <p>Bài 6</p>
      <ul style={{display:'flex',gap:'20px'}}>
        <li><Link to='home'>Home</Link></li>
        <li><Link to='contact'>Contact</Link></li>
      </ul>
      <Outlet />
      <p>Bài 7</p>
      <ul style={{display:'flex',gap:'20px'}}>
        <li><NavLink style={activeStyle} to='home'>Home</NavLink></li>
        <li><NavLink style={activeStyle} to='product'>Product</NavLink></li>
        <li><NavLink style={activeStyle} to='detail'>Detail</NavLink></li>
      </ul>
      <Outlet />
      <p>Bài 8</p>
      <ul style={{display:'flex',gap:'20px'}}>
        <li><NavLink style={styleB8} to='admin'>Admin</NavLink></li>
        <li><NavLink style={styleB8} to='account'>Account</NavLink></li>
      </ul>
      <Outlet/>
      <p>Bài 9</p>
      <Link to='custumLink'>CustumLink </Link>
      <p>Bài 10</p>
      <Link to='/listUser'>List User</Link>
    </div>
  )
}

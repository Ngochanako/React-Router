import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './style.css'
export default function Login() {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
        <form action="" style={{width:'300px'}}>
            <h3>Login Account</h3>
            <label htmlFor="">Your email</label>
            <br />
            <input type="text" placeholder='name@company.com' />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="text" placeholder='********' />
            <br /> <br />
            <Button variant="primary" style={{width:'300px'}}>Login</Button>
            <br />
            <span style={{color:'grey'}}>Already have an account?</span><span style={{fontWeight:'600'}}>Register here</span>
        </form>
    </div>
  )
}

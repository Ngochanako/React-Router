import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
export default function Register() {
  return (
       <div style={{display:'flex',justifyContent:'center'}}>
        <form action="" style={{width:'300px'}}>
            <h3>Create Account</h3>
            <label htmlFor="">Your email</label>
            <br />
            <input type="text" placeholder='name@company.com' />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="text" placeholder='********' />
            <br />
            <label htmlFor="">Confirm Password</label>
            <br />
            <input type="text" placeholder='********' /> <br />
            <Button variant="primary" style={{width:'300px'}}>Create an account</Button>
            <br />
            <span style={{color:'grey'}}>Already have an account?</span><span style={{fontWeight:'600'}}>Login here</span>
        </form>
    </div>
  )
}

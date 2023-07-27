import React from 'react';
import '../css/StudentLogin.css';
import { FaBuildingColumns } from 'react-icons/fa6'

function AdminLogin() {
  return (
    <>
    <div className="login-container">
        <div className="logo">
            <FaBuildingColumns className='img'/>
        </div>
        <h2>Administration Login</h2>
        <form action="/">
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='password' />
            <button type='submit'>Log In</button>
        </form>
    </div>
    </>
  )
}

export default AdminLogin
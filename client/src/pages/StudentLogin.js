import React from 'react'
import '../css/StudentLogin.css'
import { PiStudentBold } from 'react-icons/pi';
function StudentLogin() {
  return (
    <>
    <div className="login-container">
        <div className="logo">
            <PiStudentBold className='img'/>
        </div>
        <h2>Student Login</h2>
        <form action="/">
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='password' />
            <button type='submit'>Log In</button>
        </form>
    </div>
    </>
  )
}

export default StudentLogin
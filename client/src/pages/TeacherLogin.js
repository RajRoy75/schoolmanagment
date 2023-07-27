import React from 'react'
import '../css/StudentLogin.css';
import { FaChalkboardTeacher } from 'react-icons/fa'
function TeacherLogin() {
  return (
    <>
    <div className="login-container">
        <div className="logo">
            <FaChalkboardTeacher className='img'/>
        </div>
        <h2>Teacher Login</h2>
        <form action="/">
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='password' />
            <button type='submit'>Log In</button>
        </form>
    </div>
    </>
  )
}

export default TeacherLogin
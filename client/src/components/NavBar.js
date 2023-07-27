import React from 'react';
import '../css/NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
    <a href="/" className="navbar-brand">School Name</a>
    <ul className="navbar-menu">
      <li className="navbar-item"><a href="/about">About</a></li>
      <li className="navbar-item"><a href="/academic">Academic</a></li>
      <li className="navbar-item"><a href="/student">Student</a></li>
      <li className="navbar-item"><a href="/admission">Admission</a></li>
      <li className="navbar-item dropdown">
        <a href="/">Login</a>
        <div className="dropdown-menu">
          <Link to='/studentlogin'>Student</Link>
          <Link to='/teacherlogin'>Teacher</Link>
          <Link to='/adminlogin'>Admin</Link>
        </div>
      </li>
      <li className="navbar-item">
        <Link to={'/register'}>Register</Link>
        </li>
    </ul>
  </nav>
  )
}

export default NavBar
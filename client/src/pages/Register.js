import React from 'react';
import '../css/Register.css'

function Register() {
  return (
    <div class="form-container">
    <h2>Registration Form</h2>
    <form>
      <div class="form-group">
        <label for="fullname" class="form-label">Full Name</label>
        <input type="text" id="fullname" class="form-input" required/>
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" class="form-input" required/>
      </div>
      <div class="form-group">
        <label for="password" class="form-label">Password</label>
        <input type="password" id="password" class="form-input" required/>
      </div>
      <div class="form-group">
        <label for="confirm_password" class="form-label">Confirm Password</label>
        <input type="password" id="confirm_password" class="form-input" required/>
      </div>
      <div class="form-group">
        <label for="user_type" class="form-label">Select User Type</label>
        <select id="user_type" class="form-select">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit" class="form-button">Register</button>
    </form>
  </div>
  )
}

export default Register
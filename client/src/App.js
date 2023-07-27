import StudentLogin from './pages/StudentLogin';
import TeacherLogin from './pages/TeacherLogin';
import AdminLogin from './pages/AdminLogin';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import './App.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path='/'element={<HomePage/>}/>
      <Route path='/studentlogin'element={<StudentLogin/>}/>
      <Route path='/teacherlogin'element={<TeacherLogin/>}/>
      <Route path='/adminlogin'element={<AdminLogin/>}/>
      <Route path='/register'element={<Register/>}/>
    </Routes>
    </>
  );
}

export default App;

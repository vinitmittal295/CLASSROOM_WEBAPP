import Login from "./components/Login"
import Signup  from "./components/Signup"
import Teacher from "./components/Teacher"
import Class from "./components/Class"
import Student from "./components/Student"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Dashbar from "./components/Dashbar"
import Home from './components/Home';
// import Dashboard from './components/Dashboard';
// import StudentDataShow
import StudentDataShow from './components/StudentDataShow';
import TeacherDataShow from './components/TeacherDataShow';
import ClassDataShow from './components/ClassDataShow';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <>
    <BrowserRouter>
    <Dashbar/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/class" element={<Class/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/teacher" element={<Teacher/>}></Route>
    <Route path="/student" element={<Student/>}></Route>
    <Route path="/studentdata" element={<StudentDataShow/>}></Route>
    <Route path="/teacherdata" element={<TeacherDataShow/>}></Route>
    <Route path="/classdata" element={<ClassDataShow/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


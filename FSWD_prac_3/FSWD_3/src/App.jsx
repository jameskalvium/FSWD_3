import {Routes, Route, Router} from "react-router-dom"

import StudentForm from "./componenets/StudentForm"
import './App.css'
import StudentList from './componenets/StudentList'


function App() {
  

  return (
    <Routes>
      <Route path='/' element={<StudentList />} />
      <Route path='/add-student' element={<StudentForm />} />
    </Routes>
  )
}

export default App
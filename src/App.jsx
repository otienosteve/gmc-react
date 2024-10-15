import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import FeePayment from './components/StudentDashboard/FeePayment'
import StudentDashboard from './components/StudentDashboard/StudentDashboard'
import ViewGrade from './components/StudentDashboard/ViewGrade'
import Details from './components/StudentDashboard/Details'
import TeacherDashboard from './components/TeacherDashboard/TeacherDashboard'
import Students from './components/TeacherDashboard/Students'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<p>Home Page</p>} />
      <Route path='/student' element={< StudentDashboard />}>
        <Route path='view-grades' element={<ViewGrade/>}/>
        <Route path='fee-payment' element={<FeePayment/>} />
        <Route path='details' element={<Details/>} />
      </Route>

      <Route path='/teacher' element={< TeacherDashboard />}>
        <Route path='students' element={<Students/>}/>
      </Route>
    </Routes>
      
    </>
  )
}

export default App

import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
const TeacherDashboard = () => {
  return (
    <div className='page-grid'>
        <div className="sidebar">
        <ul>
            <li className="sidebar-link"> <Link to='students' >Grades</Link></li>
            {/* <li className="sidebar-link"> <Link to='fee-payment' >Fee Payment</Link></li> */}
    </ul>
        </div>
<div className="main">
<Outlet></Outlet>

</div>

    </div>
  )
}

export default TeacherDashboard
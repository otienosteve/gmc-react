import React from 'react'
import StudentSidebar from './StudentSidebar'
import { Outlet } from 'react-router'
function StudentDashboard() {
  return (
    <div className='page-grid'>
        <div className="sidebar">
        <StudentSidebar/>
        </div>
    <div className="main">
    <Outlet/>
    </div>
    </div>
  )
}

export default StudentDashboard
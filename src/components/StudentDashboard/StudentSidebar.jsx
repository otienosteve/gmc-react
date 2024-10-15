import React from 'react'
import { Link } from 'react-router-dom'
const StudentSidebar = () => {
  return (
    <div className='sidebar'>
        <ul>
            <li className="sidebar-link"> <Link to='view-grades' >Grades</Link></li>
            <li className="sidebar-link"> <Link to='fee-payment' >Fee Payment</Link></li>
            <li className="sidebar-link"> <Link to='details' >Details</Link></li>
        </ul>



    </div>
  )
}

export default StudentSidebar
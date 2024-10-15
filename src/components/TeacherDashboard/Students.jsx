import { useEffect,useState } from "react"
const Students = () => {
    const [grades, setGrades] = useState([])
useEffect(()=> {
    fetch('http://localhost:3000/grades').then(res=> res.json()).then(data=> {
        let studentGrades = data.filter(datum=>datum.subject==='RE' )
    setGrades(studentGrades)}).catch(err=> {
            console.log(err)
        })
},[])
  return (
    <div>{grades[0]?.subject} Students Grades
        {grades?.map(grade=>{ return (
<p key={grade.id}>{grade.grade}</p>
            
        )})}

    </div>
  )
}

export default Students
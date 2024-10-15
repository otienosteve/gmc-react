import  {useState, useEffect}from 'react'

function Details() {
    const [student, setStudent] = useState({})
useEffect(()=> {
fetch('http://localhost:3000/students').then(res=> res.json()).then(data=> {
    let found_student = data.find(datum=>datum.id===1 )
    setStudent(found_student)
}).catch(err=> {
    console.log(err)
})
},[])



  return (
    <div>
        <p>{student.first_name}</p>
        <p>{student.last_name}</p>
        <p>{student.email}</p>
        <p>{student.gender}</p>
    </div>
  )
}

export default Details
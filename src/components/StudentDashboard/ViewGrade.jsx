import {useState, useEffect} from 'react'

const ViewGrade = () => {
    const [grade, setGrade] = useState({})

    useEffect(()=> {
        fetch('http://localhost:3000/grades').then(res=> res.json()).then(data=> {
            let found_grade = data.find(datum=>datum.student_id===1 )
        setGrade(found_grade)}).catch(err=> {
                console.log(err)
            })
    


    })
  return (
    <div><p>{grade.grade}</p>
    <p>{grade.subject}</p>
    
    </div>
  )
}

export default ViewGrade
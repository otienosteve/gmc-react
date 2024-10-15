import React, {useState, useEffect} from 'react'

const FeePayment = () => {
    const [fee, setFee] = useState({})

useEffect(()=> {
    fetch('http://localhost:3000/fees').then(res=> res.json()).then(data=> {
        let found_fee = data.find(datum=>datum.student_id===1 )
        setFee(found_fee)}).catch(err=> {
            console.log(err)
        })


}, [])
  return (
    <div>
        <p>{fee.amount}</p>
        <p></p>

    </div>
  )
}

export default FeePayment
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Student = () => {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[phone,setPhone]=useState('')  

  const[qualification,setQualification]=useState('')
  const[fee,setFee]=useState('')
  const[gender,setGender]=useState('')
  const[rollno,setRollno]=useState('')
  const[batchname,setBatchName]=useState('')
  const[joindate,setJoinDate]=useState("")
  const[address,setAddress]=useState("")

  const navigate=useNavigate()

  const data={
    name,
    email,
    phone,
    qualification,
    fee,
    gender,
    rollno,
    batchname,
    joindate,
    address
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const res=await axios.post("http://localhost:3005/students/post",data)
    console.log(res);
    if(res.status===200){
      alert("data added")
      navigate("/studentDataShow")
    }
    
  }
  
  return (
    <div>
      <h1>Student</h1>
      <form onSubmit={handleSubmit}>

      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">phone</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={phone} onChange={(e)=>setPhone(e.target.value)} />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">qualification</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={qualification} onChange={(e)=>setQualification(e.target.value)} />
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">fee</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={fee} onChange={(e)=>setFee(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">gender</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={gender} onChange={(e)=>setGender(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">rollno</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={rollno} onChange={(e)=>setRollno(e.target.value)} />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">batchname</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={batchname} onChange={(e)=>setBatchName(e.target.value)} />
  </div>


{/* <label>Batch Name:</label>
                    <select onChange={handleBatchselect} value={selectedbatch}>
                    <option value="" >select batch</option>
                    {
                        classes.map((item)=>(
                            <option key={item.id} value={item._id}> {item.batchName}</option>
                        ))
                    }
                   </select> */}

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">joindate</label>
    <input type="date" className="form-control" id="exampleInputPassword1" value={joindate} onChange={(e)=>setJoinDate(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">address</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={address} onChange={(e)=>setAddress(e.target.value)} />
  </div>
  <button type="submit" className="btn btn-primary">create student</button>
</form>


    </div>
  )
}

export default Student
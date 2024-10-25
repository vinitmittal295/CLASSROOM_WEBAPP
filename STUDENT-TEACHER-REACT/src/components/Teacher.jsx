import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const teacher = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [qualification,setQualification] = useState("")
    const [salary,setSalary] = useState("")
    const [batchname,setBAtchname] = useState("")
    const [experience,setExperience] = useState("")
    const [phone,setPhone] = useState("")
    const [role,setRole] = useState("")
    const[joinDate,setJoinDate] = useState("")
    const[employeId,setEmployeeId] = useState("")


    const navigate=useNavigate()
    
    const handleSubmit=async(e)=>{
      e.preventDefault()
      const data={
        name,
        email,
        qualification,
        salary,
        batchname,
        experience,
        phone,
        role,
        joinDate,
        employeId
      }

      const res=await axios.post("http://localhost:3005/teachers/post",data)
      console.log(res);
      if(res.status===200){
        alert("data added successfully")
      }
      

      navigate("/TeacherDataShow")
    }

  return (
    <div>
    <h1>teacher</h1>

    <form onSubmit={handleSubmit}>

      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label"> Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e)=>setName(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">email </label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">qualification</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={qualification} onChange={(e)=>setQualification(e.target.value)} />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">salary</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={salary} onChange={(e)=>setSalary(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">batchName</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={batchname} onChange={(e)=>setBAtchname(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">experience</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={experience} onChange={(e)=>setExperience(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">phone</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={phone} onChange={(e)=>setPhone(e.target.value)}  />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">role</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={role} onChange={(e)=>setRole(e.target.value)}  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">joinDate</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={joinDate} onChange={(e)=>setJoinDate(e.target.value)}  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">employeId</label>
    <input type="text" className="form-control" id="exampleInputPassword1"  value={employeId} onChange={(e)=>setEmployeeId(e.target.value)} />
  </div>
  
  <button type="submit" className="btn btn-primary">Create teacher</button>
</form>
  </div>
  )
}

export default teacher
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    const [name, setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [password,setPassword]=useState("")
    const [role,setRole]=useState("")
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{

        e.preventDefault()
        const data={name,email,phone,password,role}
        console.log(`>>>>>>>>data>>>>>>`,data)
        const res = await axios.post("http://localhost:3005/user/signup",data)
        console.log(`>>>>>>res>>>>>>>>`,res)
        if(res.status===201){
          alert("data save succeesfully")
        }
        else if(res.status===400){
          alert("all field required")
        }
        else if(res.status===500){
          alert("internel server error")
        }

        navigate("/login")
    }
  return (
    <div>
      <h1>Signup</h1>
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
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)} />
  </div>


  <div className="mb-3">
    <label htmlFor="roleSelect" className="form-label">Role</label>
      <input value=""/>
      <label><input type='radio' value="student" checked={role === "student"} onChange={(e) => setRole(e.target.value)} />Student</label>
      <label><input type='radio' value="teacher" checked={role === "teacher"} onChange={(e) => setRole(e.target.value)}/>Teacher</label>
      <label><input type='radio' value="admin"  checked={role === "admin"}  onChange={(e) => setRole(e.target.value)}/>Admin</label>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const login = () => {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const navigate = useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const data={email,password}
    console.log(`>>>>>data`,data);
    
    const res=await axios.post("http://localhost:3005/user/login",data)
    console.log(`>>>>>res.data.token`,res.data.token);
    console.log(`>>>>>res`,res);
    if(res.data.token){
      console.log("token is coming in local storage",res.data.token);
      localStorage.setItem("token",res.data.token)
    }
    if(res.status===200){
      alert("login succesfully")
    }
    
    if(res.data.existingUser.role==="student"){
      navigate("/Student")
    }
    if(res.data.existingUser.role==="admin"){
      navigate("/Class")
    }
    if(res.data.existingUser.role==="teacher"){
      navigate("/Teacher")
    }


  }

  return (
    <div>
      <h1>login</h1>

      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)} />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>


    </div>
  )
}

export default login
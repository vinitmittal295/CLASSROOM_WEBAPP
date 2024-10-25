import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Class = () => {
  const [batchName, setBatchName] = useState('');
  const[timing, setTiming] = useState('');
  const[duration,setDuration] = useState('');
  const[subject, setSubject] = useState('');
  const[fee,setFee]=useState("")
  const[weekoff,setWeekoff]=useState("")
  const[numofsheet, setNumofsheet]=useState("")

  const navigate = useNavigate();

const handleSubmit = async(e) => {
  e.preventDefault();
  const data={
    batchName,
    timing,
    duration,
    subject,
    fee,
    weekoff,
    numofsheet
  }

  const res= await axios.post("http://localhost:3005/class/post",data)
  console.log(res);
  if(res.status===200){
    alert("data added")
  }

  navigate("/classDataShow")

}

  return (
    <div>
      <h1>Class</h1>

      <form onSubmit={handleSubmit}>

      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Batch Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={batchName} onChange={(e) => setBatchName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Time </label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={timing} onChange={(e) => setTiming(e.target.value)}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Duration</label> 
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={duration} onChange={(e) => setDuration(e.target.value)}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">subject</label>
    <input type="text" className="form-control" id="exampleInputPassword1"  value={subject} onChange={(e) => setSubject(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">fee</label>
    <input type="text" className="form-control" id="exampleInputPassword1"  value={fee} onChange={(e) => setFee(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">week off</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={weekoff} onChange={(e) => setWeekoff(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Number of Seat</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={numofsheet} onChange={(e) => setNumofsheet(e.target.value)}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Create class</button>
</form>
    </div>
  )
}

export default Class
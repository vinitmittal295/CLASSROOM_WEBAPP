import axios from 'axios'
import React, { useEffect, useState } from 'react'


const TeacherDataShow = () => {
    const[data,setData]=useState([])
    const[view,setView]=useState([])
    const[modelview,setModelView]=useState(false)
    const[delet,setDelet]=useState()

    useEffect(()=>{
        fetch()
    },[])

    const fetch=async()=>{
        
        const token=localStorage.getItem('token')
        const res=await axios.get("http://localhost:3005/teachers/get",{Headers:{'Authorization':`Bearer ${token}`}})
        console.log(res,token);
        setData(res.data)
        
    }

    const getdetails=async(id)=>{
      const token=localStorage.getItem('token')
        console.log(">>>id >>>",id)
        const res=await axios.get(`http://localhost:3005/teachers/${id}`,{Headers:{'Authorization':`Bearer ${token}`}})
        console.log(res.data)
        setView(res.data)
        setModelView(true)
    };

    const modelclose=()=>{
        setModelView(false)
    }

    const deletedata=async(id)=>{
      const token=localStorage.getItem('token')
      console.log(id)
      const res=await axios.delete(`http://localhost:3005/teachers/${id}`,{Headers:{'Authorization':`Bearer ${token}`}})
      setDelet(res.data)
      fetch()


    }
  return (
    <div>
    <h1>TeacherDataShow</h1>
    <div>
    {
        (
            data.map((item,index)=>(
                <div key={index} style={{border:"1px solid black",margin:"10px",padding:"10px"}}>
                <p>name:-{item.name}</p>
                <p>email:-{item.email}</p>
                <p>qualification:-{item.qualification}</p>
                <p>salary:-{item.salary}</p>
                <p>batchname:-{item.batchname}</p>
                <p>experience:-{item.experience}</p>
                <p>role:-{item.role}</p>
                <p>joinDate:-{item.joinDate}</p>
                <p>employeId:-{item.employeId}</p>
                <button onClick={()=>getdetails(item._id)}>get deails</button>
                <button onClick={()=>deletedata(item._id)}>delete details</button>
                </div>
            ))
        )
    }
    </div>


    {/* model start */}

    {modelview && view &&(
        <div className="modal" tabIndex={-1}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal name:{view.name}-</h5>
        <h5 className="modal-title">Modal email:- {view.email}</h5>
        <h5 className="modal-title">Modal qualification:- {view.qualification}</h5>
        <h5 className="modal-title">Modal salary:- {view.salary}</h5>
        <h5 className="modal-title">Modal experience:- {view.experience}</h5>
        <h5 className="modal-title">Modal phone:- {view.phone}</h5>
        <h5 className="modal-title">Modal role:- {view.role}</h5>
        <h5 className="modal-title">Modal joinDate:- {view.joinDate}</h5>
        <h5 className="modal-title">Modal employeId:- {view.employeId}</h5>
        

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={modelclose}>Close</button>
      </div>
    </div>
  </div>
</div>
     )}

    </div>
  )
}

export default TeacherDataShow

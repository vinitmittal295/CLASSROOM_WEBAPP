import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ClassDataShow = () => {
    const [data,setData]=useState([])
    const[delet,setDelet]=useState()

    useEffect(()=>{
        fetch()
    },[])

    const fetch=async()=>{
        const token=localStorage.getItem('token')
        const res=await axios.get("http://localhost:3005/class/getall",{headers:{'Authorization':`Bearer ${token}`}})
        setData(res.data)
        // if(res.status===200){
        //     alert("data fethced")
        // }
    }
    const getdetails=async(id)=>{
        const token=localStorage.getItem('token')
        console.log(">>>id >>>",id)
        const res=await axios.get(`http://localhost:3005/class/${id}`,{headers:{'Authorization':`Bearer ${token}`}})
        console.log(res.data)
        setData(res.data)
    };

    const deletedata=async(id)=>{
        const token=localStorage.getItem('token')
        console.log(">>>>>>>delete id",id)
        const res=await axios.delete(`http://localhost:3005/class/${id}`,{headers:{'Authorization':`Bearer ${token}`}})
        console.log(res.data)
        setDelet(res.data)
        fetch()
        
      }


  return (
    <div>
    <h1>ClassDataShow</h1>

    <div>
    {
        (
            data.map((item,index)=>(
                <div key={index} style={{border:"1px solid black",margin:"10px",padding:"10px"}} >
                <p>batchName:- {item.batchName}</p>
                <p>timing:- {item.timing}</p>
                <p>duration:- {item.duration}</p>
                <p>subject:- {item.subject}</p>
                <p>fee:- {item.fee}</p>
                <p>weekoff:- {item.weekoff}</p>
                <p>numofsheet:- {item.numofsheet}</p>
                <button onClick={()=>getdetails(item._id)}>get deails</button>
                <button onClick={()=>deletedata(item._id)}>delete details</button>
                </div>
            ))
        )
    }

    </div>
    </div>
  )
}

export default ClassDataShow
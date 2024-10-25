import React from 'react';
import axios from 'axios';
import './Dashboard.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Dashboard = () => {
    const[Teacher,SetTeacher]=useState(0);
    const[Class,SetClass]=useState(0);
    const[Student,SetStudent]=useState(0);
    const token = localStorage.getItem('token');

    useEffect(()=>{
        fectchStudents()
        fectchClasses()
        fectchTeachers()

    },[])
    
    const fectchStudents=async()=>{
        
        const response=await axios.get("http://localhost:3005/students/get",{headers:{"Authorization":`Bearer ${token}`}})
        console.log(response);
        
        SetStudent(response.data.length)
    }

    const fectchClasses=async()=>{
        // const token = localStorage.getItem('token');
        const response=await axios.get("http://localhost:3005/class/getall",{headers:{"Authorization":`Bearer ${token}`}})
        SetClass(response.data.length)
    }

    const fectchTeachers=async()=>{
        // const token = localStorage.getItem('token');
        const response=await axios.get("http://localhost:3005/teachers/get",{headers:{"Authorization":`Bearer ${token}`}})
        SetTeacher(response.data.length)
    }


    return (
        <div className="dashboard">
            <div className="card ">
                <h3>Total Teachers</h3>
                <p>{Teacher}</p>
            </div>
            <div className="card ">
                <h3>Total Classes</h3>
                <p>{Class}</p>
            </div>
            <div className="card">
                <h3>Total Students</h3>
                <p>{Student}</p>
            </div>
        </div>
    );
};

export default Dashboard;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Dashboard.css';

// const Dashboard = () => {
//     const [Teacher, setTeacher] = useState(0);
//     const [Class, setClass] = useState(0);
//     const [Student, setStudent] = useState(0);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const token = localStorage.getItem('token');

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 await Promise.all([
//                     fetchStudents(),
//                     fetchClasses(),
//                     fetchTeachers(),
//                 ]);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const fetchStudents = async () => {
//         const response = await axios.get("http://localhost:3005/students/", {
//             headers: { "Authorization": `Bearer ${token}` }
//         });
//         setStudent(response.data.length);
//     };

//     const fetchClasses = async () => {
//         const response = await axios.get("http://localhost:3005/class/", {
//             headers: { "Authorization": `Bearer ${token}` }
//         });
//         setClass(response.data.length);
//     };

//     const fetchTeachers = async () => {
//         const response = await axios.get("http://localhost:3005/teachers/", {
//             headers: { "Authorization": `Bearer ${token}` }
//         });
//         setTeacher(response.data.length);
//     };

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <div className="dashboard">
//             <div className="card">
//                 <h3>Total Teachers</h3>
//                 <p>{Teacher}</p>
//             </div>
//             <div className="card">
//                 <h3>Total Classes</h3>
//                 <p>{Class}</p>
//             </div>
//             <div className="card">
//                 <h3>Total Students</h3>
//                 <p>{Student}</p>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;

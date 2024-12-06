import { useEffect, useState } from 'react'
import axios from 'axios'

const StudentDataShow = () => {
    const [data, setData] = useState([]);  // All student data
    const [view, setView] = useState(null);  // Single student data for modal view
    const [modelView, setModelView] = useState(false);  // For controlling modal visibility
    const [delet, setDelet] = useState(null);  // Store delete response

    useEffect(() => {
        fetchData();
    }, []);

    // Fetch all student data
    const fetchData = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.get("http://localhost:3005/students/get", {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setData(response.data);
            console.log("Fetched all data:", response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Fetch details of a single student
    const getDetails = async (id) => {
        const token = localStorage.getItem('token');
        try {
            const res = await axios.get(`http://localhost:3005/students/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            console.log("Fetched single student:", res.data);
            setView(res.data);
            setModelView(true);  // Show modal with student data
        } catch (error) {
            console.error("Error fetching student details:", error);
        }
    };

    // Close modal
    const closeModal = () => {
        setModelView(false);  // Hide modal
    };

    // Delete student data
    const deleteData = async (id) => {
        const token = localStorage.getItem('token');
        try {
            const res = await axios.delete(`http://localhost:3005/students/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            console.log("Deleted student data:", res.data);
            setDelet(res.data);
            fetchData();  // Re-fetch data after deletion
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };

    return (
        <div style={containerStyle}>
            <h1>Student Data</h1>
            
            {/* Display student data */}
            <div style={cardContainerStyle}>
                {data.map((item, index) => (
                    <div key={index} style={cardStyle}>
                        <p><strong>Name:</strong> {item.name}</p>
                        <p><strong>Email:</strong> {item.email}</p>
                        <p><strong>Phone:</strong> {item.phone}</p>
                        <p><strong>Qualification:</strong> {item.qualification}</p>
                        <p><strong>Fee:</strong> {item.fee}</p>
                        <p><strong>Gender:</strong> {item.gender}</p>
                        <p><strong>Roll No:</strong> {item.rollno}</p>
                        <p><strong>Batch Name:</strong> {item.batchname}</p>
                        <p><strong>Join Date:</strong> {item.joindate}</p>
                        <p><strong>Address:</strong> {item.address}</p>
                        <button onClick={() => getDetails(item._id)} style={buttonStyle}>Get Details</button>
                        <button onClick={() => deleteData(item._id)} style={buttonStyle}>Delete</button>
                    </div>
                ))}
            </div>

            {/* Modal to show selected student details */}
            {modelView && view && (
                <div style={modalOverlayStyle}>
                    <div style={modalContentStyle}>
                        <h3>Student Details</h3>
                        <p><strong>Name:</strong> {view.name}</p>
                        <p><strong>Email:</strong> {view.email}</p>
                        <p><strong>Phone:</strong> {view.phone}</p>
                        <p><strong>Qualification:</strong> {view.qualification}</p>
                        <p><strong>Fee:</strong> {view.fee}</p>
                        <p><strong>Gender:</strong> {view.gender}</p>
                        <p><strong>Roll No:</strong> {view.rollno}</p>
                        <p><strong>Batch Name:</strong> {view.batchname}</p>
                        <p><strong>Join Date:</strong> {view.joindate}</p>
                        <p><strong>Address:</strong> {view.address}</p>
                        <button onClick={closeModal} style={closeButtonStyle}>Close</button>
                    </div>
                </div>
            )
            }
        </div>
    );
};

// Main container style for centering everything
const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f9',
    padding: '20px',
};

// Card container style to center cards in the page
const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
};

// Card style for displaying each student item
const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    padding: '10px',
    margin: '10px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    width: '300px',
};

// Button style for Get Details and Delete buttons
const buttonStyle = {
    padding: '8px 12px',
    marginTop: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

// Modal overlay styling
const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
};

// Modal content styling
const modalContentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '400px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
};

// Close button styling for the modal
const closeButtonStyle = {
    padding: '8px 12px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '15px',
};

export default StudentDataShow;

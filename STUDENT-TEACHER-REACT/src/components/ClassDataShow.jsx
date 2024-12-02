import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClassDataShow = () => {
    const [data, setData] = useState([]);
    const [delet, setDelet] = useState();
    const [selectedClass, setSelectedClass] = useState(null);  // For storing the selected class details
    const [isModalOpen, setIsModalOpen] = useState(false);      // For controlling modal visibility

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        const token = localStorage.getItem('token');
        const res = await axios.get("http://localhost:3005/class/getall", {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        setData(res.data);
    };

    const getdetails = async (id) => {
        const token = localStorage.getItem('token');
        const res = await axios.get(`http://localhost:3005/class/${id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        setSelectedClass(res.data);
        setIsModalOpen(true);  // Open the modal when data is fetched
    };

    const deletedata = async (id) => {
        const token = localStorage.getItem('token');
        const res = await axios.delete(`http://localhost:3005/class/${id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        setDelet(res.data);
        fetch();  // Re-fetch the list of classes after deletion
    };

    const closeModal = () => {
        setIsModalOpen(false);  // Close the modal
    };

    return (
        <div style={mainContainerStyle}>
            <h1>Class Data</h1>

            <div style={classListStyle}>
                {/* Display the list of classes */}
                {data && data.map((item, index) => (
                    <div key={index} style={cardStyle}>
                        <p><strong>Batch Name:</strong> {item.batchName}</p>
                        <p><strong>Timing:</strong> {item.timing}</p>
                        <p><strong>Duration:</strong> {item.duration}</p>
                        <p><strong>Subject:</strong> {item.subject}</p>
                        <p><strong>Fee:</strong> {item.fee}</p>
                        <p><strong>Week Off:</strong> {item.weekoff}</p>
                        <p><strong>Number of Sheets:</strong> {item.numofsheet}</p>
                        <div style={buttonContainerStyle}>
                            <button onClick={() => getdetails(item._id)} style={buttonStyle}>Get Details</button>
                            <button onClick={() => deletedata(item._id)} style={buttonStyle}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal to display selected class details */}
            {isModalOpen && selectedClass && (
                <div style={modalOverlayStyle}>
                    <div style={modalContentStyle}>
                        <h2>Selected Class Details</h2>
                        <p><strong>Batch Name:</strong> {selectedClass.batchName}</p>
                        <p><strong>Timing:</strong> {selectedClass.timing}</p>
                        <p><strong>Duration:</strong> {selectedClass.duration}</p>
                        <p><strong>Subject:</strong> {selectedClass.subject}</p>
                        <p><strong>Fee:</strong> {selectedClass.fee}</p>
                        <p><strong>Week Off:</strong> {selectedClass.weekoff}</p>
                        <p><strong>Number of Sheets:</strong> {selectedClass.numofsheet}</p>
                        <button onClick={closeModal} style={closeButtonStyle}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

// Main container style to center everything
const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f9',
    padding: '20px',
};

// Class list styling
const classListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
};

// Card-style for each class item
const cardStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '250px',
    textAlign: 'center',
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
    },
};

// Button container style to align buttons properly
const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
};

// Button style
const buttonStyle = {
    padding: '8px 12px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
};

const buttonHoverStyle = {
    backgroundColor: '#0056b3',
};

// Modal styling for the overlay and content
const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
};

const modalContentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '400px',
    textAlign: 'center',
};

const closeButtonStyle = {
    padding: '8px 12px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '15px',
};

export default ClassDataShow;

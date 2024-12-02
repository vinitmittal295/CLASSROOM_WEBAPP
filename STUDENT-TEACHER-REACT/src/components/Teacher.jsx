import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/teacherStyle.css';  // Import the CSS for custom styles

const Teacher = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [qualification, setQualification] = useState('');
  const [salary, setSalary] = useState('');
  const [batchName, setBatchName] = useState('');
  const [experience, setExperience] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [joinDate, setJoinDate] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [classes, setClasses] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      qualification,
      salary,
      batchName,
      experience,
      phone,
      role,
      joinDate,
      employeeId,
    };

    const res = await axios.post('http://localhost:3005/teachers/post', data);
    console.log(res);
    if (res.status === 200) {
      alert('Data added successfully');
    }
    navigate('/TeacherDataShow');
  };

  useEffect(() => {
    classFetch();
  }, []);

  const classFetch = async () => {
    const response = await axios.get('http://localhost:3005/class/getall');
    console.log(response.data);
    setClasses(response.data);
  };

  const handleBatchSelect = (e) => {
    setBatchName(e.target.value);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Create Teacher</h1>

      <form onSubmit={handleSubmit} className="form-class">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="qualification" className="form-label">Qualification</label>
          <input
            type="text"
            className="form-control"
            id="qualification"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="salary" className="form-label">Salary</label>
          <input
            type="text"
            className="form-control"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="batchName" className="form-label">Batch Name</label>
          <select
            className="form-select"
            id="batchName"
            onChange={handleBatchSelect}
            value={batchName}
          >
            <option value="">Select Batch</option>
            {classes.map((item) => (
              <option key={item._id} value={item._id}>{item.batchName}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="experience" className="form-label">Experience</label>
          <input
            type="text"
            className="form-control"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role</label>
          <input
            type="text"
            className="form-control"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="joinDate" className="form-label">Join Date</label>
          <input
            type="date"
            className="form-control"
            id="joinDate"
            value={joinDate}
            onChange={(e) => setJoinDate(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="employeeId" className="form-label">Employee ID</label>
          <input
            type="text"
            className="form-control"
            id="employeeId"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Create Teacher</button>
      </form>
    </div>
  );
};

export default Teacher;

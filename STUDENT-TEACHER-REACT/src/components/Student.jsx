import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css';  // Import the custom styles

const Student = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [qualification, setQualification] = useState('');
  const [fee, setFee] = useState('');
  const [gender, setGender] = useState('');
  const [rollno, setRollno] = useState('');
  const [batchName, setBatchName] = useState('');
  const [joindate, setJoinDate] = useState('');
  const [address, setAddress] = useState('');
  const [classes, setClasses] = useState([]);

  const navigate = useNavigate();

  const data = {
    name,
    email,
    phone,
    qualification,
    fee,
    gender,
    rollno,
    batchName,
    joindate,
    address,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3005/students/post', data);
    console.log(res);
    if (res.status === 200) {
      alert('Data added');
      navigate('/studentDataShow');
    }
  };

  useEffect(() => {
    classFetch();
  }, []);

  const classFetch = async () => {
    const response = await axios.get('http://localhost:3005/class/getall');
    console.log(response.data.map((item)=>item.batchName));

    console.log(response.data);
    setClasses(response.data);
  };

  const handleBatchselect = (e) => {
    setBatchName(e.target.value);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Create Student</h1>

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
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <label htmlFor="fee" className="form-label">Fee</label>
          <input
            type="text"
            className="form-control"
            id="fee"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <input
            type="text"
            className="form-control"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="rollno" className="form-label">Roll Number</label>
          <input
            type="text"
            className="form-control"
            id="rollno"
            value={rollno}
            onChange={(e) => setRollno(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="batchName" className="form-label">Batch Name</label>
          <select
            className="form-select"
            id="batchName"
            onChange={handleBatchselect}
            value={batchName}
          >
            <option value="">Select Batch</option>
            {classes.map((item) => (
              <option key={item._id} value={item._id}>
                {item.batchName}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="joindate" className="form-label">Join Date</label>
          <input
            type="date"
            className="form-control"
            id="joindate"
            value={joindate}
            onChange={(e) => setJoinDate(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Create Student</button>
      </form>
    </div>
  );
};

export default Student;

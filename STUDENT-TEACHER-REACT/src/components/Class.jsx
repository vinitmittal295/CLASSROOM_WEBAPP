import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/style.css"

const Class = () => {
  const [batchName, setBatchName] = useState('');
  const [timing, setTiming] = useState('');
  const [duration, setDuration] = useState('');
  const [subject, setSubject] = useState('');
  const [fee, setFee] = useState('');
  const [weekoff, setWeekoff] = useState('');
  const [numofsheet, setNumofsheet] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      batchName,
      timing,
      duration,
      subject,
      fee,
      weekoff,
      numofsheet,
    };

    const res = await axios.post('http://localhost:3005/class/post', data);
    console.log(res);
    if (res.status === 200) {
      alert('Data added');
    }

    navigate('/classDataShow');
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Create Class</h1>

      <form onSubmit={handleSubmit} className="form-class">
        <div className="mb-3">
          <label htmlFor="batchName" className="form-label">Batch Name</label>
          <input
            type="text"
            className="form-control"
            id="batchName"
            value={batchName}
            onChange={(e) => setBatchName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="timing" className="form-label">Time</label>
          <input
            type="text"
            className="form-control"
            id="timing"
            value={timing}
            onChange={(e) => setTiming(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="duration" className="form-label">Duration</label>
          <input
            type="text"
            className="form-control"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
          <label htmlFor="weekoff" className="form-label">Week Off</label>
          <input
            type="text"
            className="form-control"
            id="weekoff"
            value={weekoff}
            onChange={(e) => setWeekoff(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="numofsheet" className="form-label">Number of Seats</label>
          <input
            type="text"
            className="form-control"
            id="numofsheet"
            value={numofsheet}
            onChange={(e) => setNumofsheet(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary submit-btn">Create Class</button>
      </form>
    </div>
  );
};

export default Class;



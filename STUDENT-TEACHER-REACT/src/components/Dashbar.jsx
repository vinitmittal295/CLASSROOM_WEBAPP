


import { Link } from 'react-router-dom';
import "./Dashbar.css"; // Custom CSS for additional styling

const Dashbar = () => {
  return (
    <div className="dashbar-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Classroom</h2>
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li className="dropdown">
            <Link to="#">
              <i className="fas fa-chalkboard"></i> Classes
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/class">Class List</Link></li>
              <li><Link to="/classdata">Class Data</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="#">
              <i className="fas fa-user-tie"></i> Teachers
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/teacher">Teacher List</Link></li>
              <li><Link to="/teacherdata">Teacher Data</Link></li>
            </ul>
          </li>
          <li className="dropdown disabled">
            <Link to="#">
              <i className="fas fa-user-graduate"></i> Students
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/student" >Student List</Link></li>
              <li><Link to="/studentdata" >Student Data</Link></li>
            </ul>
          </li>
          <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
          <li><Link to="/Dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</Link></li>
          <li><Link to="/signup"><i className="fas fa-user-plus"></i> Signup</Link></li>
        </ul>
      </div>
      
      <div className="content">
        <div className="container mt-4">
          <h1 className="dashboard-title">Welcome to the Classroom</h1>
        </div>
        {/* Any other content for the page */}
      </div>
    </div>
  );
};

export default Dashbar;


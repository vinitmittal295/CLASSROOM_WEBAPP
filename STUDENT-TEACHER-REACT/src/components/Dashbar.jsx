

import { Link } from 'react-router-dom';
import "./Dashbar.css"; 
import "./Dashbar.css" // Custom CSS for additional styling
// import Dashboard from './Dashboard';
import Dashboard from './Dashboard';

const Dashbar = () => {
  return (
    <div className="dashbar-container">
      <div className="container mt-4">
        <h1 className="dashboard-title">Welcome to the Classroom</h1>
        
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-chalkboard"></i> Classes
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/class">Class List</Link></li>
                  <li><Link className="dropdown-item" to="/classdata">Class Data</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-user-tie"></i> Teachers
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/teacher">Teacher List</Link></li>
                  <li><Link className="dropdown-item" to="/teacherdata">Teacher Data</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle disabled"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-user-graduate"></i> Students
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item disabled" to="/student">Student List</Link></li>
                  <li><Link className="dropdown-item disabled" to="/studentdata">Student Data</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <i className="fas fa-sign-in-alt"></i> Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Dashboard">
                  <i className="fas fa-sign-in-alt"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  <i className="fas fa-user-plus"></i> Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default Dashbar;


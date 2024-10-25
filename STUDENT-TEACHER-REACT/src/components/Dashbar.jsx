
import React from 'react';
import { Link } from 'react-router-dom';
import "./Dashbar.css"; 
import "./Dashbar.css" // Custom CSS for additional styling

const Dashbar = () => {
  return (
    <div className="dashbar-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
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
                <Link className="nav-link" to="/signup">
                  <i className="fas fa-user-plus"></i> Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <h1 className="dashboard-title">Welcome to the Admin Dashboard</h1>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-lg">
              <div className="card-body text-center">
                <i className="fas fa-chalkboard-teacher fa-3x text-primary mb-3"></i>

                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-lg">
              <div className="card-body text-center">
                <i className="fas fa-users fa-3x text-success mb-3"></i>
        
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-lg">
              <div className="card-body text-center">
                <i className="fas fa-user-graduate fa-3x text-danger mb-3"></i>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbar;


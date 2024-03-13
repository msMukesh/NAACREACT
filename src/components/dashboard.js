import React from "react";
import { useUserContext } from "../context/userContext";
import "../components/dashboard.css";
import "../components/criterion";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="navbar-brand">NAAC DB</div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="../components/dashboard" className="nav-link">Criterion 3</a>
          </li>
          <li className="nav-item">
            <button className="logout-btn" onClick={logoutUser}>Log out</button>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h1>Dashboard</h1>
        <h2>Name: {user.displayName}</h2>
        <h2>Email: {user.email}</h2>
      </div>
    </div>
  );
};

export default Dashboard;

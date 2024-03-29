import React, { useState } from "react";
import { useUserContext } from "../context/userContext";
import "../components/dashboard.css";
import "../components/criterion";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();

  // Your HTML code
  const htmlCode = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Research and Facilities</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h1 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        h2 {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #f5f5f5;
        }
    </style>
</head>
<body>
     <div className="container">
        <h1>Criterion III - Research, Innovations and Extension</h1>
        <h2>Key Indicator - 3.1 Promotion of Research and Facilities</h2>
        <p> 3.1.1 The institution's research facilities are frequently updated, and there is a well-defined policy for the promotion of research, which is uploaded on the institutional website and implemented.</p>
        <p>upload relevant supporting document</p>
         
     </div>
</body>    
</html>`;

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

      {/* Render the HTML code inside the formStart div */}
      <div className="formStart" dangerouslySetInnerHTML={{ __html: htmlCode }}></div>
    </div>
  );
};

export default Dashboard;

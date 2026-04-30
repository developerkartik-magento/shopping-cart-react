import React, { useState } from 'react'

const Dashboard = () => {
  const firstName = localStorage.getItem('firstName') || '';
  const lastName = localStorage.getItem('lastName') || '';
  const fullName = `${firstName} ${lastName}`.trim() || 'User';
  const [activeTab, setActiveTab] = useState("dashboard");

  const storedUserString = localStorage.getItem("user");
  const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
  const user = storedUser || {
    username: localStorage.getItem('accountUsername') || '',
    email: localStorage.getItem('accountEmail') || '',
    password: localStorage.getItem('accountPassword') || ''
  };

  return (
    <div className="account-container">

      {/* Sidebar */}
      <div className="sidebar">
        <h3>My Account</h3>
        <ul>
          <li onClick={() => setActiveTab("dashboard")}>Dashboard</li>
          <li onClick={() => setActiveTab("account")}>Account</li>
          <li onClick={() => setActiveTab("address")}>Address</li>
        </ul>
      </div>

      {/* Content */}
      <div className="content">

        {/* Dashboard */}
        {activeTab === "dashboard" && (
          <div>
            <h2>Welcome, {fullName}</h2>

            <div className="graph-box">
              <p>Orders Overview (Demo Graph)</p>
              <div className="bar-chart">
                <div style={{ height: "40%" }}></div>
                <div style={{ height: "70%" }}></div>
                <div style={{ height: "50%" }}></div>
                <div style={{ height: "90%" }}></div>
              </div>
            </div>
          </div>
        )}

        {/* Account Page */}
        {activeTab === "account" && (
          <div>
            <h2>Account Details</h2>

            <div className="form-group">
              <label>Username</label>
              <input value={user.username || ""} readOnly />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input value={user.email || ""} readOnly />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" value={user.password || ""} readOnly />
            </div>
          </div>
        )}

        {/* Address Page */}
        {activeTab === "address" && (
          <div>
            <h2>Address Details</h2>

            <div className="form-group">
              <label>Street</label>
              <input value={user.address?.street || ""} readOnly />
            </div>

            <div className="form-group">
              <label>City</label>
              <input value={user.address?.city || ""} readOnly />
            </div>

            <div className="form-group">
              <label>Zipcode</label>
              <input value={user.address?.zipcode || ""} readOnly />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input value={user.phone || ""} readOnly />
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
export default Dashboard;

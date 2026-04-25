import React from 'react'

const Dashboard = () => {
  const firstName = localStorage.getItem('firstName') || '';
  const lastName = localStorage.getItem('lastName') || '';
  const fullName = `${firstName} ${lastName}`.trim() || 'User';

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {fullName}!</p>
    </div>
  )
}
export default Dashboard;

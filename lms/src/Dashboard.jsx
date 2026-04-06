import React from 'react';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('lmsUser'));
  return (
    <div className="dashboard-container">
      <h2>Welcome to the LMS Dashboard</h2>
      <p>Hello, {user ? user.username : 'User'}!</p>
      <p>This is your dashboard page.</p>
    </div>
  );
};

export default Dashboard;

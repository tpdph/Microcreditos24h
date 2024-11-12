import React from 'react';

const ApplicationStatusDashboard = ({ status, onUpdate }) => {
  const handleUpdate = () => {
    onUpdate();
  };

  return (
    <div>
      <h2>Application Status</h2>
      <p>Status: {status}</p>
      <button onClick={handleUpdate}>Update Status</button>
    </div>
  );
};

export default ApplicationStatusDashboard;


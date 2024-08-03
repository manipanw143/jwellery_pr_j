import "./StatusIcon.css";
import React, { useState } from "react";

const StatusIcon = () => {

    const [status, setStatus] = useState('pending');

  return (
    <>
    <div className="App">
      <h1>Request Status</h1>
      <button onClick={() => setStatus('approved')}>Approve</button>
      <button onClick={() => setStatus('pending')}>Pending</button>
    </div>
      <div className={`icon-container`}>
        {status === "pending" && (
          <div className="pending-icon">
            <div className="spinner"></div>
            <p>Pending...</p>
          </div>
        )}
        {status === "approved" && (
          <div className="approved-icon">
            <div className="checkmark"></div>
            <p>Approved!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default StatusIcon;

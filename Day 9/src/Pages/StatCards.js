import React from 'react';
import './StatCards.css';

const StatCards = () => {
  return (
    <div className="stat-cards-container">
      <div className="stat-card">
        <div className="stat-card-header" style={{ background: '#FFC0CB' }}>
          <img src="https://cdn-icons-png.flaticon.com/128/1763/1763438.png" alt="Weekly Sales" />
        </div>
        <div className="stat-card-content">
          <h2>714k</h2>
          <p>Weekly Sales</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-card-header" style={{ background: '#ADD8E6' }}>
          <img src="https://cdn-icons-png.flaticon.com/128/999/999026.png" alt="New Users" />
        </div>
        <div className="stat-card-content">
          <h2>1.35M</h2>
          <p>New Users</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-card-header" style={{ background: '#FFD700' }}>
          <img src="https://cdn-icons-png.flaticon.com/128/9252/9252155.png" alt="Item Orders" />
        </div>
        <div className="stat-card-content">
          <h2>1.72M</h2>
          <p>Item Orders</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-card-header" style={{ background: '#98FB98' }}>
          <img src="https://cdn-icons-png.flaticon.com/128/4256/4256863.png" alt="Total Profit" />
        </div>
        <div className="stat-card-content">
          <h2>$15K</h2>
          <p>Total Profit</p>
        </div>
      </div>
    </div>
  );
};

export default StatCards;
